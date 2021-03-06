# Ms-Teams-Clone
The Ms Teams Clone Made Under the MS Engage Mentorship Program 2021 By Microsoft UG
# To Use this go to : https://example404.azurewebsites.net/
<b>Important: 
>If you don't get the message on the message panel from system that a new user is connected please refresh the page
>This sometimes happens due to the dyno sleep of the heroku app (usually the first load of the </b>day) . [get more info about this](https://devcenter.heroku.com/articles/dyno-sleeping).
# This repo Contains three folders
## Each of them do different things and are deployed separetly
## Combined they make the Video-Call and Chat Application Run Seamlessly.
## - π[Client](#client) (This is a Page which makes joining and Creating Video-Calls and chat easier)
## - π[peerserver](#peerserver) (This is the server which creates the peer server of `peerjs` npm library , On request this gives us an peer instancde which helps us creating and maintaining `webrtc` connection and sending Data flawlessly . more info [here](https://github.com/peers/peerjs-server))
## - π[Video-Call](#video-call) (This is the server that handles the webrtc and socket connections and delivers the frontend by rendering `ejs` files. )
<b>Three of this folders are explained below. Their file structure and what files/folder does what is writen below.
The code is explained in the code-comments.</b>

## One can Visit the indivisual repo of these three folders and can see the entire commit history, that will give a more clear under standing of how things were made.

# Client  
## [Go to the repo](https://github.com/debojeetjha10/video-chat-application-client-side)
## To start go the the `*../client` πfolder in terminal and run the command 
```bash
npm start
```
## This Page lets us join/create Video-Calls and joining chats easier
- ### For creating meeting it asks for name and creates a new meet and joins to that meet
- ### For joining a meet/chat it asks for the meeting Id and Name and Joins the meet/chat
## [ This Page is made using React](#getting-started-with-create-react-app)
## This is the explanation of the files in this folder

- πnode_modules (will be there after installing node modules)

- πpublic

    -  πindex.html (the main html file in which react pushes content)

    - πmanifest.json (conatins some configs)
    - πteams_icon.ico (the ico file for website header)

- πsrc (the main source folder which contains all the react sources i.e react-components,icons,images etc ,the components of this folder  have self explainotary name,what they do is commented inside the js file,the  components folder have a js file,css file,icons and   images. )
    - πcomponents
        - πEndCallPage
        - πEndCallPage.css
        - πEndCallPage.js
        - πFooter
            - πFooter.css
            - πFooter.js
        - πJoinChat
            - πJoinChat.css
            - πJoinChat.js
        - πJoinCreateDecidePage
            - πJoinCreateDecidePage.css
            - πJoinCreateDecidePage.js
        - πJoinPage
            - πJoinPage.css
            - πJoinPage.js
        - πMeetCreatePage
            - πMeetCreatePage.css
            - πMeetCreatePage.js
        - πNavbar
            - πicon
                - πburgermenu.ai
                - πend-call.png
                - πgroup.png
                - πhand.png
                - πmenu.png
                - πmsg-file.png
                - πteams.png
                - πthreedot.png
                - πusr.jpeg
                - πNavbar.css
                - πNavbar.js
        - πSideBar
            - πSideBar.css
            - πSideBar.js
        - πStyleSheets (This stores the css files that we have used repetedly in the components)
            - πButtons
                - πBigBlueButton.css
            - πInput
                - πNormalInput.css
            - πMiddleCard
                - πMiddleCard.css
        - πApp.css
        - πApp.js
        - πindex.css
        - πindex.js

- π.gitignore (to ignore some specified files(wrriten in this file) by git)

- πpackage-lock.json (this is used to save npm packages supporting packages version)

- πpackage.json (this is used to store npm configurations,package versions and more npm stuff)

- πReadme.md (this is what you are Reading)



# peerserver
## [Go to the repo](https://github.com/debojeetjha10/peerserver)
## To start go the the `*../peerserver` πfolder in terminal and run the command 
```bash
npm start
```
## This is the peerserver made using `peerjs` npm library.
Whenever we send a req to this server with proper info it proviodes us with a peer instance which helps us in creating webrtc connection and sending and getting data from the other peers connected.
## The file structure is explained below.
- πnode_modules (will be there after installing node modules)
- π.gitignore (to ignore some specified files(wrriten in this file) by git)

- πpackage-lock.json (this is used to save npm packages supporting packages version)

- πpackage.json (this is used to store npm configurations,package versions and more npm stuff)
- πpeerserver.js (this file acctually creates the peerserver by importing the peer package and creating a server with its builtin `PeerServer` function )

- πReadme.md (this is what you are Reading)
>more info on can be found [here](https://github.com/peers/peerjs-server).

# Video-Call
## [Go to the repo](https://github.com/debojeetjha10/VideoChat-application)
## To start 
- ### make an `env.js` πfile in the `..*/Video-Call/DataBase` πfolder
- ### Make an object in the following format and export it. Your code should look like this.
```javascript
//This is the Mongo DataBase info
//to connect with the Databse
 const env  = {
    dbName: 'your_db_name',
    port: 'your_db_port',
    key: 'Your_Db_key'

}
module.exports = env
 ```
- ### If the Databse is hosted is hosted somewhere else than azure then also change the `mongouri` variable in `..*/Video-Call/DataBase/mongo.js` πfile
- ### Then go the the `*../Video-Call` πfolder in terminal and run the command 
```bash
npm start
```
## This is the node server that handles the webrtc and socket connections and delivers the frontend by rendering `ejs` files.
## This is also responsible for taking with the DataBase server i.e. Fetching data , saving Data
### It creates a `socket` connection with the clients and will recieve msg from one client in a room and send it to everyone else in the same room, The `Peer-connection script` in the `πpublic/πscripts` makes a peer-to-peer connection with every client in a room with webrtc and sends flow of data i.e. Video,audio that we use for the videocall.
### Executing the following code we recieve the peer instancce from the peer server and will create a `webrtc client` that we have created in the folder `πpeerserver`

```javascript
const myPeer = new Peer(undefined, {
  key:'peerjs',
  host: 'debo-peerjs.herokuapp.com',
  port: '',
  secure:true,
    // this config contains the ice-server configs(turn,stun servers)
   config: {'iceServers':[
    { url: 'stun:stun.l.google.com:19302' }, //this is the stun server 
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

- πDatabase (This conatins all the files to interact with the database server)

  - πenv.js (this conatins the environment variables)
  - πmongo,js (this helps us connnect with the mongo database)

  - πmsg-model.js (this creates a schema and model for our data to be stored on the Database)

- πnode_modules (will be there after installing node modules)

- πpublic

  - πlogos (this folder contains all the logos _.png _.ico etc files)
    - πcalender.png
    - πchain.png
    - πmute.png
    - πphone-call-end.png
    - πteams.png
    - πteams_icon.ico
    - πunmute.png
    - πuser.png
    - πvideo-off.png
    - πvideo-on.png
  - πscripts (this contains the scripts of the frontend side)
    - πbutton-control.js (this contains all the code for controlling diff buttons on the website except call-functioning buttons ex. call-end, mute-unmute etc)
    - πcall-control.js (this contains all the code for the different functionalities of call-controlling buttons like end call, mute/unmute , video-on/off)
    - πload-chat.js (this fetches an api and loads all the previous chat of a room)
    - πmessage-socket.js (this file is used in the chat site this contains code to send and recieve messages)
    - πpeer-socket-connection.js ( this file makes peer and socket connection and this is responsible for making the video-chat work)
  - πstylesheets (this folder conatins all the stylesheets used in the website the names are sel-explenotary,the stylesheets starting with "chat" are only used in the chat page otherwise every stylesheet is used in both the pages)
    - πchat-messages.css
    - πfooter.css
    - πmain-content.css
    - πmessages.css
    - πnavbar.css
    - πsidebar.css
  - π style.css (this containes some standard initial css used in the pages)

- πviews (this folder contains the ejs templates for the chat and Video-Call page)

  - π chat-room.ejs (this file is for the chat page)
  - π room.ejs (this file is for the Video-Call page)

- π .gitignore (to ignore some specified files(wrriten in this file) by git)

- π package-lock.json (this is used to save npm packages supporting packages version)

- π package.json (this is used to store npm configurations,package versions and more npm stuff)

- π Readme.md (this is what you are Reading)

- π server.js (this file contains the server side code and manages the chat and vide call functionality,making web-sockets ,peer connection ,saving and recieving data from the database etc , the code is expplained in the comments)

---



# Getting Started with Create React App 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you canβt go back!**

If you arenβt satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point youβre on your own.

You donβt have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldnβt feel obligated to use this feature. However we understand that this tool wouldnβt be useful if you couldnβt customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
