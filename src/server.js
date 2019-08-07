const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const cors = require('cors');


mongoose.connect('mongodb+srv://omnistack:omnistack@foodcurso-qveps.mongodb.net/omnistack8?retryWrites=true&w=majority',{
    useNewUrlParser: true
})

const server = express();
server.use(cors());
server.use(express.json());

server.use(routes);

server.listen(3333);