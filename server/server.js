const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const db = require('./config/keys').mongoURI;
const path = require('path');
const cors = require('cors');

//endpoint request handlers
const posts = require('./routes/posts.js');
const images = require('./routes/images.js');

const app = express();

app.use(cors());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect(db, {useNewUrlParser:true})
.then(()=>{
    console.log('Connected to mongoDB');
})
.catch((err)=>{
    console.log(err);
});

//ROUTES:
app.use('/api/posts', posts);
app.use('/api/images', images);

//what to do in production mode
if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
    app.get('*', (req,res)=>{
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const port = process.env.PORT || 5000;

app.listen(port, ()=>{
    console.log(`backend server started on port ${port}`);
});

module.exports = app; //need?
