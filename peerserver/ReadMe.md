# peerserver
## This is the peerserver made using `peerjs` npm library.
Whenever we send a req to this server with proper info it proviodes us with a peer instance which helps us in creating webrtc connection and sending and getting data from the other peers connected.
## The file structure is explained below.
- 📂node_modules (will be there after installing node modules)
- 📜.gitignore (to ignore some specified files(wrriten in this file) by git)

- 📜package-lock.json (this is used to save npm packages supporting packages version)

- 📜package.json (this is used to store npm configurations,package versions and more npm stuff)
- 📜peerserver.js (this file acctually creates the peerserver by importing the peer package and creating a server with its builtin `PeerServer` function )

- 📜Readme.md (this is what you are Reading)
>more info on can be found [here](https://github.com/peers/peerjs-server).