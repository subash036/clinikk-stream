var express = require("express");
var router = express.Router();
const fs = require("fs");
const mongodb = require('mongodb');
const { videoHandler, sliderData } = require("../controller/video");
const { getConnection } = require("../MW/connector");
/* GET users listing. */
router.get("/:schemaName", getConnection, videoHandler);
router.get("/slider/:schemaName", getConnection, sliderData);

module.exports = router;
