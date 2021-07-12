// a express server on node is used in this 
// // server Script
// getting the express package from node_modules
const express = require('express')
// getting the cors
// to make the server talk and interact with more than one port on same machine
// and avoid accidental breaks
const cors = require('cors')
// Initializing the app
const app = express()
// making the server with http
const server = require('http').Server(app)
//Making a socket server to setup the socket connections and maintain them
const io = require('socket.io')(server)
// getting the uuid for making dynamic meet links 
// using the version 4 as  uuidV4
const { v4: uuidV4 } = require('uuid')
const { json } = require('express')
// setting up the view-engine to ejs 
// ejs is used in templating the frontend
app.set('view engine', 'ejs')
// using the public folder for the source of 
// the static files (images ,css , frontend scripts etc)
app.use(express.static('public'))
app.use('/chat' , express.static('public')) //this is for the chat feature to load static files on /chat path
// using cors  to make the server talk and interact with more than one port on same machine
// and avoid accidental breaks
app.use(cors())
//receiving get request at baseurl
const msgService = require('./Database/msg-service')
app.get('/', (req, res) => {
//   if someone comes to the baseurl make a new room 
//   using uuid and redirect to that website 
//   also passing the name params 
  var roomId = uuidV4()
  // creating a json file which will store the chat of this meeting
  res.redirect(`/${roomId}?name=${req.query.name}`)
})
//getting get request to join a room with room id as room
app.get('/:room', (req, res) => {
  //rendering the room with the roomid 
  // passing the roomid and user name to be 
  // used in the client side
  res.render('room', { roomId: req.params.room , user : req.query.name })
})
app.get('/chat/:room',(req,res)=>{
  //rendering chat of a room with id specified in the url param
  res.render('chat-room',{ roomId: req.params.room , user : req.query.name })
})
// creating an api which will return all the previous msges of a room 
app.get('/api/chat/:room',(req,res)=>{
  let roomId = req.params.room
  //getting the responce as an json and sending as an responce
  msgService.get(req,res,roomId)

})
// Handling the Socket Connections
// handling events on socket connection
io.on('connection', socket => {
  socket.on('join-room', (roomId, userId) => {
    // joining the room
    socket.join(roomId)
    // sending the user connected event to every one in the room except self
    // to connect with them and them to connect with the 
    // new connected user
    socket.to(roomId).broadcast.emit('user-connected', userId);
    // Send a msg to everyone in the room  from system
    // that a new user is connected
    io.to(roomId).emit('ShowMessage',{
      msgContent:'A new user Connected',
      sender:'system'
    })
    // handling messages
    socket.on('message', (message) => {
      //saving the message in the database server
      msgService.create(message.sender,message.msgContent,roomId)
      //send message to the same room
      //showing the msg to the frontend by this ShowMessage event
      io.to(roomId).emit('ShowMessage', message)
  }); 
    // if socket disconnects 
    // disconnect the user from the
    // call by the user-disconnected event
    socket.on('disconnect', () => {
      socket.to(roomId).broadcast.emit('user-disconnected', userId)
    })
  })
})
// listen on the env Port
// or 3002 for local machine testing
server.listen(process.env.PORT || 3002)