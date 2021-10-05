const express = require("express");
const multer = require("multer");
const mongoose = require("mongoose");
const crypto = require("crypto");
const GridFsStorage = require('multer-gridfs-storage');
const cors = require("cors");
require("dotenv").config();

const Grid = require("gridfs-stream");
Grid.mongo = mongoose.mongo;

mongoose.connect(process.env.DB_URL);

const fs = require('fs')
const genThumbnail = require('simple-thumbnail')

var storage = new GridFsStorage({
    url: process.env.DB_URL,
    file: (req, file) => {
        return new Promise((resolve, reject) => {
            crypto.randomBytes(16, (err, buf) => {
                if (err) {
                    return reject(err);
                }
                const filename = file.originalname.replace(" ", "_");
                const fileInfo = {
                    filename: filename,
                    bucketName: "bigbuck",
                    metadata: {
                        originalname: file.originalname,
                        createdAt: new Date(),
                        contentType: req.params.contentType,
                        row_ts: new Date(),
                        row_stat_cd: "A"
                    },
                };
                resolve(fileInfo);
            });
        });
    },
    metadata: function (req, file, cb) {
        cb(null, { originalname: file.originalname, employeeId: req.params.empid });
    },
});

// Set multer storage engine to the newly created object
const upload = multer({ storage: storage });

const app = express();
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb" }));
// custom header set
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader("Access-Control-Allow-Origin", "*");
    // Request methods you wish to allow
    res.setHeader("Access-Control-Allow-Methods", "GET, POST");
    // Request headers you wish to allow
    res.setHeader(
        "Access-Control-Allow-Headers", "Content-Type, Authorization"
    );
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader(
        "Access-Control-Expose-Headers",
        "token"
    );
    res.setHeader("Access-Control-Allow-Credentials", true);
    // Pass to next layer of middleware
    next();
});

app.use(cors());
let getStreamSingleUpload = (req, res, next) => {
    console.log("upload request ");
    let hostname = "";
    if (!process.env.APP_HOST) {
        hostname =
            (process.env.APP_HOST ? process.env.APP_HOST : "http://localhost") +
            ":" +
            (process.env.PORT ? process.env.PORT : 3004);
    } else {
        hostname = process.env.APP_HOST;
    }

    res.json({
        status: "ok",
        serve: `${hostname}/CDS/bigbuck/${req.params.contentType}/${req.file.filename}`,
    });
    next();
};
// Upload your files as usual
const sUpload = upload.single("bigbuck");
app.post(
    "/CDS/upload/:contentType",
    sUpload,
    getStreamSingleUpload
);
// get file stream
let getFilesStream = async (req, res) => {
    console.log("Request to fetch file");
    var conn = mongoose.connection;
    let gfs;
    // conn.once("open", function () {
    gfs = Grid(conn.db, mongoose.mongo);
    gfs.collection('bigbuck'); //set collection name to lookup into
    /** First check if file exists */
    let query = {
        filename: req.params.filename,
        "metadata.row_stat_cd": "A",
        "metadata.contentType": req.params.contentType
    };
    console.log("🚀 ~ file: index.js ~ line 110 ~ query", query);
    gfs.files
        .find(query)
        .sort({ [`metadata.row_ts`]: -1 })
        .toArray(function (err, files) {
            if (!files || files.length === 0) {
                return res.status(404).json({
                    responseCode: 1,
                    responseMessage: err,
                });
            }
            /** create read stream */
            let file = files[0];
            console.log(file.metadata);
            var readstream = gfs.createReadStream({
                filename: file.filename,
                _id: file._id,
                root: "bigbuck",
            });
            const range = req.headers.range;
            if (!range) {
                /** set the proper content type */
                res.set("Content-Type", files[0].contentType);
            } else {
                /** return response */

                // Create response headers
                const videoSize = file.length;
                const start = Number(range.replace(/\D/g, ""));
                const end = videoSize - 1;

                const contentLength = end - start + 1;
                const headers = {
                    "Content-Range": `bytes ${start}-${end}/${videoSize}`,
                    "Accept-Ranges": "bytes",
                    "Content-Length": contentLength,
                    "Content-Type": file.contentType,
                };

                // HTTP Status 206 for Partial Content
                res.writeHead(206, headers);
            };

           if(req.query.thumbs){
            genThumbnail(readstream, res, '150x100')
            .then(() => console.log('done!'))
            .catch(err => console.error(err))
           }else{
            return readstream.pipe(res);
           }
        });
    // });

};
app.get(
    "/CDS/bigbuck/:contentType/:filename", getFilesStream
);

// app.listen(process.env.PORT, function () {
//     console.log("cdn running on ", process.env.PORT);
// });
