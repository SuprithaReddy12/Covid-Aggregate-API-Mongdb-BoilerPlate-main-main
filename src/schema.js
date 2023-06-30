const  mongoose = require('mongoose');

const tallySchema = new mongoose.Schema
({
        state: {type:String},
        infected: {type:Number},
        recovered: {type:Number},
        death: {type:Number}
})

const collection_connection = mongoose.model('covidtally', tallySchema)

module.exports = collection_connection;
