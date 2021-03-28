const express = require("express");
const socketIO = require("socket.io");
const http = require("http");

const PORT = process.env.PORT || 5000;

const router = require("./router");
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

io.on("connected", (socket) => {
  console.log("new connection");

  socket.on("disconnect", () => {
    console.log("user has disconnect");
  });
});

app.use(router);

server.listen(PORT, () => console.log(`Server has started on port ${PORT}`));
