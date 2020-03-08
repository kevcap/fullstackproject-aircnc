const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();
//interações com dados no server:
//GET(busca), POST(cria), PUT(edita), DELETE(apaga);

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-iqmeu.mongodb.net/semana09?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

//req.query = acessar query params (filtros);
//req.params = acessar route params (editar);
//req.body = acessar o corpo da requisição (criar);

app.use(express.json());
app.use(routes);

app.listen(3333);
