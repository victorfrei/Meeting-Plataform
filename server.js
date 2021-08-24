const express = require('express')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const nextApp = next({ dev })
const nextHandler = nextApp.getRequestHandler()
app.use(express.static(__dirname + "/socket.io/socket.io.js"));

app.use(express.static(__dirname + "/public"));

// fake DB
const chats = {
  chat1: [],
  chats2: [],
}

// socket.io server

let broadcaster

io.sockets.on("connection", socket => {

  socket.on('disconnect', () => {
    console.log(socket.id + " Saiu!")
  })


  socket.on("broadcaster", () => {
    broadcaster = socket.id;
    socket.broadcast.emit("broadcaster");
  });
  socket.on("watcher", () => {
    socket.to(broadcaster).emit("watcher", socket.id);
  });
  socket.on("disconnect", () => {
    socket.to(broadcaster).emit("disconnectPeer", socket.id);
  });


//webRTC (Signaling)

socket.on("offer", (id, message) => {
  socket.to(id).emit("offer", socket.id, message);
});
socket.on("answer", (id, message) => {
socket.to(id).emit("answer", socket.id, message);
});
socket.on("candidate", (id, message) => {
socket.to(id).emit("candidate", socket.id, message);
});


  
});




nextApp.prepare().then(() => {

  app.get('*', (req, res) => {
    return nextHandler(req, res)
  })

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})