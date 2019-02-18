const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const imgPostSchema = new Schema({
    imgurl:{
        type: String, 
        required: true
    },
    title:{
        type: String, 
        required: true
    },
    description:{
        type: String, 
        required: true
    },
    year: { //what year it was created (not always same as the year of posting)
        type: Number
    }
});

module.exports = mongoose.model('images', imgPostSchema);