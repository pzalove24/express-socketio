const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const server = http.createServer(app);

app.use(cors());

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("User connect", socket.id);

  socket.on("send_message", (data)=> {
    console.log(data)
  })
});

server.listen(3001, () => {
  console.log("SERVER RUNNING");
});
