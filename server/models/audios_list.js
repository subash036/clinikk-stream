const mongoose = require("mongoose");
const schema = new mongoose.Schema({
    "audio": {
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
    collection: "audios_list"
});

module.exports = {
    schema: schema,
    Model: mongoose.model('audios_list', schema)
};