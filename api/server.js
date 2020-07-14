const express = require("express");
const server = express();
const accountRouter = require('../routes/accountRouter');

server.use(express.json());

server.use('/api/accounts', accountRouter);

module.exports = server;
