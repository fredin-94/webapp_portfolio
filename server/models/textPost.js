const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const textPostSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    creationDate: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('posts', textPostSchema);