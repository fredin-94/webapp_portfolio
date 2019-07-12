const express = require('express');
const router = express.Router();

const Image = require('../models/imgPost.js');

//Get all images
router.get('/', (req,res,next)=>{
    Image.find({})
    .then((images)=>{
        res.status(200).json(images);
    })
    .catch((err)=>{
        console.log("error on serverside get request for projects");
        return next(err);
    });
});

//Get image by ID
router.get('/:id', (req,res,next)=>{
    Image.find({
        "_id":id
    })
    .then((image)=>{
        res.status(200).json({"data": image});
    })
    .catch((err)=>{
        return next(err);
    });
});

//Query images

module.exports = router;