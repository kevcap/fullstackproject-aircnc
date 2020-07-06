const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const socketio = require('socket.io');
const http = require('http');

const routes = require('./routes');

const app = express();
const server = http.Server(app);
const io = socketio(server);
//interações com dados no server:
//GET(busca), POST(cria), PUT(edita), DELETE(apaga);

mongoose.connect('yourmongodbLogin', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const connectedUsers = {};

io.on('connection', socket => {
  const { user_id } = socket.handshake.query;
  //makes real-time connection between front and backend

  connectedUsers[user_id] = socket.id;
});

app.use((req, res, next) => {
  req.io = io;
  req.connectedUsers = connectedUsers;

  return next();
})

//req.query = acessar query params (filtros);
//req.params = acessar route params (editar);
//req.body = acessar o corpo da requisição (criar);

app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);

server.listen(3333);
