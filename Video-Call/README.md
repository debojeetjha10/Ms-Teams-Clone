## This NodeJs server creates, maintains the video-calls and chats also it is the part which talks with the mongo Database deployed on azure

### It creates a `socket` connection with the clients and will recieve msg from one client in a room and send it to everyone else in the same room, The `Peer-connection script` in the `📂public/📂scripts` makes a peer-to-peer connection with every client in a room with webrtc and sends flow of data i.e. Video,audio that we use for the videocall.
### Executing the following code we recieve the peer instancce from the peer server and will create a `webrtc client` that we have created in the folder `📂peerserver`

```javascript
const myPeer = new Peer(undefined, {
  key:'peerjs',
  host: 'debo-peerjs.herokuapp.com',
  port: '',
  secure:true,
    // this config contains the ice-server configs(turn,stun servers)
   config: {'iceServers':[
    { url: 'stun:stun.l.google.com:19302' },
    {
      url: 'turn_url',
      credential: 'turn_password',
      username: 'turn_username'
  }
  ]}});
```

<mark>In this Code and Explanation `iceserver,stun,turn` are some keywords used. I have explained this things why we use them and what they are in this [video](https://1drv.ms/v/s!Aqiu0gLTQJGHji8VLAzz5nWOgCJF)(This onedrive page need a reload sometimes). </mark>

## This is the explanation of the files/folders in this folder

## The code is explained in the code comments.

---

- 📂Database (This conatins all the files to interact with the database server)

  - 📜env.js (this conatins the environment variables)
  - 📜mongo,js (this helps us connnect with the mongo database)

  - 📜msg-model.js (this creates a schema and model for our data to be stored on the Database)

- 📂node_modules (will be there after installing node modules)

- 📂public

  - 📂logos (this folder contains all the logos _.png _.ico etc files)
    - 📜calender.png
    - 📜chain.png
    - 📜mute.png
    - 📜phone-call-end.png
    - 📜teams.png
    - 📜teams_icon.ico
    - 📜unmute.png
    - 📜user.png
    - 📜video-off.png
    - 📜video-on.png
  - 📂scripts (this contains the scripts of the frontend side)
    - 📜button-control.js (this contains all the code for controlling diff buttons on the website except call-functioning buttons ex. call-end, mute-unmute etc)
    - 📜call-control.js (this contains all the code for the different functionalities of call-controlling buttons like end call, mute/unmute , video-on/off)
    - 📜load-chat.js (this fetches an api and loads all the previous chat of a room)
    - 📜message-socket.js (this file is used in the chat site this contains code to send and recieve messages)
    - 📜peer-socket-connection.js ( this file makes peer and socket connection and this is responsible for making the video-chat work)
  - 📂stylesheets (this folder conatins all the stylesheets used in the website the names are sel-explenotary,the stylesheets starting with "chat" are only used in the chat page otherwise every stylesheet is used in both the pages)
    - 📜chat-messages.css
    - 📜footer.css
    - 📜main-content.css
    - 📜messages.css
    - 📜navbar.css
    - 📜sidebar.css
  - 📜 style.css (this containes some standard initial css used in the pages)

- 📂views (this folder contains the ejs templates for the chat and video-call page)

  - 📜 chat-room.ejs (this file is for the chat page)
  - 📜 room.ejs (this file is for the video-call page)

- 📜 .gitignore (to ignore some specified files(wrriten in this file) by git)

- 📜 package-lock.json (this is used to save npm packages supporting packages version)

- 📜 package.json (this is used to store npm configurations,package versions and more npm stuff)

- 📜 Readme.md (this is what you are Reading)

- 📜 server.js (this file contains the server side code and manages the chat and vide call functionality,making web-sockets ,peer connection ,saving and recieving data from the database etc , the code is expplained in the comments)

---
