const express = require('express');

const SchemeRouter = require('./schemes/scheme-router.js');

const server = express();

server.use(express.json());
server.use('/api/schemes', SchemeRouter);

server.get('/', (req, res, next) => {
    res.send('<h1>SUCCESSFULLY LOADED INTO THE SERVER! You are part of the grid.</h1>')
});

module.exports = server;