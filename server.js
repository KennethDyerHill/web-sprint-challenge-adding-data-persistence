const express = require('express');

const projectRouter = require('./project/project-router');
const resourceRouter = require('./resource/resource-router')
const taskRouter = require('./task/task-router');

const server = express();

const helmet = require('helmet');
const morgan = require('morgan');

server.use(logger);
server.use(helmet());
server.use(morgan('dev'));

server.use(express.json());
server.use('/api/projects', projectRouter);
server.use('/api/resources', resourceRouter);
server.use('/api/tasks', taskRouter);



server.get('/', (req, res) => {
    res.send(`Mecha Activated.`)
})

function logger(req, res, next){
    const {method, url} = req;

    const timestamp = Date.now().toString();
  
    console.log(`${method} to ${url} @ ${timestamp}`);
   
    next();
}

module.exports = server;