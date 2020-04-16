const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');
const path = require('path');

const socketio = require('socket.io');
const http = require('http');


const app = express();
//interações com dados no server:
//GET(busca), POST(cria), PUT(edita), DELETE(apaga);

const server = http.Server(app);
const io = socketio(server);

const connectedUsers = {};

io.on('connection', socket => {
  const { user_id } = socket.handshake.query;
	console.log('Usuário conectado: ', socket.id);
	//makes real-time connection between front and backend

	connectedUsers[user_id] = socket.id

	console.log('Hanshake: ', socket.handshake.query);
	console.log(connectedUsers);
	
});

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-iqmeu.mongodb.net/semana09?retryWrites=true&w=majority', {
	useNewUrlParser: true,
	useUnifiedTopology: true
})

//req.query = acessar query params (filtros);
//req.params = acessar route params (editar);
//req.body = acessar o corpo da requisição (criar);

app.use(cors())
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);

server.listen(3333);
