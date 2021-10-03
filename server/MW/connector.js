
const mongoose = require("mongoose");
const response = require("../response");
const Schema = mongoose.Schema;
require("dotenv").config();
const conn = mongoose.connect(process.env.DB_URL);
module.exports.getConnection = async (req, res, next) => {
    try {
        req.connection = conn;
        let getDetailsMS = require(`../models/${req.params.schemaName}.js`);
        req.Model = getDetailsMS.Model;
        req.schema = getDetailsMS.schema;
        return next();
    } catch (error) {
        response.error(res, 500, error);
    }
}
