//getting the peer code through require
const {PeerServer} = require('peer');
//initializing the peer server
//more details on :   https://github.com/peers/peerjs-server
const peerServer = PeerServer({port: process.env.PORT || 3001, path:'/'})