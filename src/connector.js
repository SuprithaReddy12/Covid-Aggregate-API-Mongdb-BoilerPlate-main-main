
//const mongodb = require('mongodb');

const mongoURI = "mongodb+srv://suprithareddyk12:GGawuiHS8xx3i1s2@cluster0.pkc8lce.mongodb.net/?retryWrites=true&w=majority"
const mongoose = require('mongoose');


mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => { console.log("connection established with mongodb server online"); })
    .catch(err => {
        console.log("error while connection", err)
    });
