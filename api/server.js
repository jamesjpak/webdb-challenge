const express = require('express');
const helmet = require('helmet');

const server = express();

const projectsRouter = require('../data/projectsRouter');
const actionsRouter = require('../data/actionsRouter');

server.use(helmet())
server.use(express.json())
server.use('/projects', projectsRouter)
server.use('/actions', actionsRouter)

server.get('/', (req, res) => {
    res.status(200).json({ message: 'Setting up Projects and Actions'})
})

module.exports = server;