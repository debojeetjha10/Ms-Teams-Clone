// Making the Socket Connection in the client side
const socket = io('/')
//Getting the video-grid to append the videos
const videoGrid = document.getElementById('video-grid')
//Making a  unique peer for the specific client
//this makes sending and receiving video-calls easier 
const myPeer = new Peer(undefined, {
  key:'peerjs',
  host: 'debo-peerjs.herokuapp.com',
  port: '',
  secure:true,
    // this config contains the ice-server configs(turn,stun servers)
   config: {'iceServers':[
    { url: 'stun:stun.l.google.com:19302' },
    //{"username":"QDH2xyHSMvT0UedE-MePIPjlEkRmXVRzCtoC6wdg5nNe6P_tC1q8IDvz7f8XcmCVAAAAAGDRkclzb21lb25lNDA0","urls":["stun:bn-turn1.xirsys.com","turn:bn-turn1.xirsys.com:80?transport=udp","turn:bn-turn1.xirsys.com:3478?transport=udp","turn:bn-turn1.xirsys.com:80?transport=tcp","turn:bn-turn1.xirsys.com:3478?transport=tcp","turns:bn-turn1.xirsys.com:443?transport=tcp","turns:bn-turn1.xirsys.com:5349?transport=tcp"],"credential":"d7a15dec-d32b-11eb-b581-0242ac140004"},
    {
      url: 'turn:numb.viagenie.ca',
      credential: 'kXyzNqUpQqER3y!',
      username: 'debojeetjha@gmail.com'
  }
  ]}});
  //Making a video-element to attach the webcams  video-stream to it
const myVideo = document.createElement('video')
// Making the video-mute so that the client could not listen to his own voice
// if enabled there will be echo problem
myVideo.muted = true
// initializing MyvideoStream , later the webcams stream will be attached to it.
var MyVideoStream;
// this array will contain all the other peers
const peers = {}
// getting the video and audio stream and  making the  call using peer
navigator.mediaDevices.getUserMedia({
  video: true,
  audio: true
}).then(stream => {
  //attaching the stream to MyVideoStream
  MyVideoStream = stream;
  //adding the stream to myVideo Dom element created above
  //this addVideoStream function is written below
  addVideoStream(myVideo, stream)
  myPeer.on('call', call => {
    //answering any upcoming call
    call.answer(stream)
    //making an Dom Video Element
    // attaching it to the video-grid
    const video = document.createElement('video')
    call.on('stream', userVideoStream => {
      addVideoStream(video, userVideoStream)
    })
  })
  // this handles whenever a new-user joins the call
  socket.on('user-connected', userId => {
    //this function adds the video-stream of the new user into the video-grid of everyone present on the call
    //this function is explained and written below
    connectToNewUser(userId, stream)
  })
  //This handles the Messaging 
  // this event listener displays the upcoming and outgoing msges
  socket.on("ShowMessage", message => {
    let Msg = document.createElement('li')
    Msg.className='message'
    Msg.innerHTML = `<b>${message.sender}</b><br/> ${message.msgContent}`
    document.getElementById("messages").appendChild(Msg);
    //scrolling to the bottom of the msg panel so that the latest msg shows at the bottom
    scrollToBottom()  //(ref line : 129)
  })
})

// This event listener removes the video of a client whenever he/she disconnects the from the call
socket.on('user-disconnected', userId => {
  if (peers[userId]) peers[userId].close()
})
//This event listener Joins  the room with the specific ROOM_ID, he is assigned the id by the peer it self
//It emits a join-room event in the socket which connect the new peer with every other peer on the room.
//This process is handled by the server 
myPeer.on('open', id => {
  socket.emit('join-room', ROOM_ID, id)
})
//This function connects the already existing clients to the newly connected client
function connectToNewUser(userId, stream) {
  //the existing clients will make a call to the new client
  // as we will call this function in every existing client
  // every existing client will call the new client
  // The new-client will automatically receive those calls (Ref: Line:42 of this file)
  const call = myPeer.call(userId, stream)
  // creating the video-element of the new user and adding that to the video-grid
  // after getting the stream from the call
  const video = document.createElement('video')
  call.on('stream', userVideoStream => {
    addVideoStream(video, userVideoStream)
  })
  //removing the video,when call closes
  call.on('close', () => {
    video.remove()
  })
  //assigning the id with call in the peers array created before (ref  line: 30 )
  peers[userId] = call
}
// Adding the Video(video source is the stream) to the Video-Grid
function addVideoStream(video, stream) {
  // assigning the source of the video to the stream
  video.srcObject = stream
  //when metadata loads the video will play
  video.addEventListener('loadedmetadata', () => {
    video.play()
  })
  // adding the video to the video-grid
  videoGrid.append(video)
}
// This Part of the Code , Handles the Messaging part
// when press enter send message
document.onkeydown = (function (key) {
  //Getting the msg input from  the Dom
  let msgText = document.getElementById("chat-message");
  //if we press the enter key and the msg text is not empty send the msg
  if (key.which == 13 && msgText.value.length !== 0) {
    //emitting the message to the server  so  every connected client gets the message
    socket.emit('message',{
      msgContent: msgText.value,
      sender : MY_NAME
    } );
    // making the msg text empty after sending
    // so we don't have to remove the previous msg before typing a new msg.
    msgText.value ='';
  }
});
// This function Scrolls the Chat window to the bottom 
// so the latest msg shows up at the bottom
function scrollToBottom(){
  //getting the main-chat-window from the Dom
  let chatWindow = document.getElementById('main-chat-window');
  // Scrolling it to the bottom
  chatWindow.scrollTop = chatWindow.scrollHeight
}
