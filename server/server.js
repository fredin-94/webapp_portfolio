const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const db = require('./config/keys').mongoURI;
const path = require('path');

const app = express();

app.use(bodyParser.json());

mongoose.connect(db, {useNewUrlParser:true})
.then(()=>{
    console.log('Connected to mongoDB');
})
.catch((err)=>{
    console.log(err);
});

//what to do in production mode
if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
    app.get('*', (req,res)=>{
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const port = process.env.PORT || 5000;

app.listen(port, ()=>{
    console.log(`server started on port ${port}`);
});

module.exports = server; //need?
