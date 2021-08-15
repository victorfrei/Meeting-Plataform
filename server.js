const app = require('express')()
const server = require('http').Server(app)
const io = require('socket.io')(server)
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const nextApp = next({ dev })
const nextHandler = nextApp.getRequestHandler()

// fake DB
const chats = {
  chat1: [],
  chats2: [],
}

// socket.io server

io.on('connection', socket => {
  console.log(socket.id + " Entrou!")
   socket.emit('update-chat',chats.chat1);
  // socket.emit("newconnection", socket.id);

  socket.on('disconnect', () => {
    console.log(socket.id + " Saiu!")
  })


  socket.on('join', () => {
    socket.join("room1");
    socket.to('room1').emit('newconnection', {name:socket.id, room:"room1"});
    console.log(socket.rooms);
  })


  socket.on('send-message',(text)=>{
    console.log(text);
    chats.chat1.push({user:socket.id,msg:text})
    console.log(chats.chat1);
    io.emit('update-chat',chats.chat1);
  })


  

  socket.on("on-typing",()=>{
    io.sockets.emit("typing",socket.id);
  })

  socket.on("video",(video)=>{
    console.log(video);
    console.log("^-------Server------^")
    io.sockets.emit("video",video);
  })

  
})







nextApp.prepare().then(() => {

  app.get('*', (req, res) => {
    return nextHandler(req, res)
  })

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})