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
    }, //also add like types like: manga, realistic, photo, color, digital, analog and that kinda stuff i just dont know how right now
    projecturl:{
        type: String
    },
    webhosturl:{
        type: String
    }
});

module.exports = mongoose.model('images', imgPostSchema);