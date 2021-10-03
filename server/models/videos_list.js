const mongoose = require("mongoose");
const schema = new mongoose.Schema({
    "video": {
        type: String,
        required: true
    },
    "thumbs": {
        type: String,
        required: true
    },
    "title": {
        type: String,
        required: true
    },
    "description": {
        type: String,
        required: true
    },
    "otherLinks": {
        type: Object
    },
    "createdAt": { type: Date, default: Date.now },
    "row_stat_cd": {
        type: String,
        default:"A"
    },
    "row_ts": { type: Date, default: Date.now }
}, {
    collection: "videos_list"
});

module.exports = {
    schema: schema,
    Model: mongoose.model('videos_list', schema)
};