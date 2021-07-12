// This file containes the functions to get data and create data in
// the database server
const msges = require('./msg-model')
//this readpreference will be used later to specify how to
// read data from the bdatabase
const ReadPreference = require('mongodb').ReadPreference
//coneecting to the database
require('./mongo').connect();
//this function fetches the data from database server
function get(req,res,ROOM_ID){
    //making the query
    const docquery = msges.find({roomId:ROOM_ID}).read(ReadPreference.NEAREST)
    //getting the responce and sending it as a responce again

    docquery.exec().then(
        (msges) => 
        res.json(msges)
        ).catch((err)=>
        {
        res.status(500).send(err)
    })
}
//this function writes to the databse
function create(sender,msgContent,roomId){
    //creating the msg to save
const msg = new msges({sender,msgContent,roomId})
//saving the message
msg.save().then(()=>{
    return true;
}).catch((err) => {
    console.error(err)
})
}
//exporting both of the function to use in the server 
module.exports = {
    get,create
}