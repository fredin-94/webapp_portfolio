const express = require('express');
const router = express.Router();

const Post = require('../models/textPost.js');

//Get all posts
router.get('/', (req,res,next)=>{
    Post.find({})
    .then((posts)=>{
        res.status(200).json(posts);
    })
    .catch((err)=>{
        return next(err);
    });
});

//Get post by ID
router.get('/:id', (req,res,next)=>{
    Post.find({
        "_id":id
    })
    .then((post)=>{
        res.status(200).json({"data": post});
    })
    .catch((err)=>{
        return next(err);
    });
});

//Query posts

module.exports = router;