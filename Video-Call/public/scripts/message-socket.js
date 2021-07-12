// Making the Socket Connection in the client side
//for  messaging
const socket = io('/')
var userId = MY_NAME
//adding event handelers for the socket
socket.on('connect',()=>{
  // joining a room with specified room ID
    socket.emit('join-room', ROOM_ID, userId)
    console.log('socket connected');
})
socket.on("ShowMessage", message => {
  //showing the msges in the frontend on showmsg event
    let Msg = document.createElement('li')
    Msg.className='message'
    Msg.innerHTML = `<b>${message.sender}</b><br/> ${message.msgContent}`
    document.getElementById("messages").appendChild(Msg);
    //scrolling to the bottom of the msg panel so that the latest msg shows at the bottom
    scrollToBottom()
  })
  //sending the message on clicking enter
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
  //sending the message on clicking the send button 
  document.getElementById('send-message-button').onclick = (()=>
  {
      //Getting the msg input from  the Dom
      let msgText = document.getElementById("chat-message");
      //if we press the enter key and the msg text is not empty send the msg
      if (msgText.value.length !== 0) {
        //emitting the message to the server  so  every connected client gets the message
        socket.emit('message',{
          msgContent: msgText.value,
          sender : MY_NAME
        } );
        // making the msg text empty after sending
        // so we don't have to remove the previous msg before typing a new msg.
        msgText.value ='';
  }
  }
  )
  // This function Scrolls the Chat window to the bottom 
  // so the latest msg shows up at the bottom
  function scrollToBottom(){
    //getting the main-chat-window from the Dom
    let chatWindow = document.getElementById('messages-container');
    // Scrolling it to the bottom
    chatWindow.scrollTop = chatWindow.scrollHeight
  }
  