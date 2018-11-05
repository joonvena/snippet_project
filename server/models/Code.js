const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CodeSchema = new Schema({
    title: String,
    code: String,
    tags: [String]
});

module.exports = mongoose.model('Code', CodeSchema);