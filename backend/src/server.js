const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const server  = express();

mongoose.connect('mongodb+srv://hugo:hugoho123@cluster0-df8xh.mongodb.net/test?retryWrites=true&w=majority', 
{useNewUrlParser: true});


server.use(express.json)
server.use(routes);

server.listen(3333);