//this file connectys us to the mon gobd database
//this connect function is imported in places where we need to connect
// to the database
const mongoose = require('mongoose')
//assigning the mongoose promise with global promise
// more info on : https://stackoverflow.com/questions/51862570/mongoose-why-we-make-mongoose-promise-global-promise-when-setting-a-mongoo
mongoose.Promise = global.Promise
//loading the env variables
const env = require('./env')
const mongoUri = `mongodb://${env.dbName}:${env.key}@${env.dbName}.mongo.cosmos.azure.com:10255/?ssl=true`
//connecting to the data base
function connect(){
    return mongoose.connect(mongoUri,{ useNewUrlParser: true ,useUnifiedTopology: true });

}
module.exports = {
    connect,
    mongoose
}