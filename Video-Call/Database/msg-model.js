// this file containes the schema for our msges
// the schema is designed then transformed into a mongoose model
const mongoose = require('mongoose')
const Schema = mongoose.Schema
//Designing the schema
const msgSchema = new Schema({
    sender : {type :String},
    msgContent: {type :String, required: true},
    roomId:{type :String, required: true}
});
//making a mongoose model and exporting it
const msges  = mongoose.model('msges',msgSchema)
module.exports = msges