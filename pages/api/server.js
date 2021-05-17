import { redirect } from 'next/dist/next-server/server/api-utils';

const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);



io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
  });

app.get('/', (req, res) => {
    res.sendFile(__dirname+"/index.html");
  });


  server.listen(3001 || process.env.PORT,()=>{
        console.log("listening to *:3001");
}) 


export default (req,resp) => {
        resp.send("Requested!!");
}
 
