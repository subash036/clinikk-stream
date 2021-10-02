var express = require("express");
var router = express.Router();
const fs = require("fs");
const mongodb = require('mongodb');
const url = 'mongodb+srv://shiva:0IIDfNtbXBxjIGa5@cluster0.8xa41.mongodb.net/stream?retryWrites=true&w=majority';
router.post("/:bucket", function (req, res, next) {
  mongodb.MongoClient.connect(url, function (error, client) {
    if (error) {
      res.json(error);
      return;
    }
    // connect to the videos database
    const db = client.db(req.params.bucket);

    // Create GridFS bucket to upload a large file
    const bucket = new mongodb.GridFSBucket(db);

    // create upload stream using GridFS bucket
    const videoUploadStream = bucket.openUploadStream('bigbuck');

    // You can put your file instead of bigbuck.mp4
    const videoReadStream = fs.createReadStream('./bigbuck.mp4');

    // Finally Upload!
    videoReadStream.pipe(videoUploadStream);

    // All done!
    res.status(200).send("Done...");
  });
});

module.exports = router;
