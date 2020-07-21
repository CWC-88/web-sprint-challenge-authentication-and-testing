const express = require('express');
const cors = require('cors');
const helmet = require('helmet');


const authenticate = require('../auth/authenticate-middleware.js');
const authRouter = require('../auth/auth-router.js');
const jokesRouter = require('../jokes/jokes-router.js');
const cookieParser = require('cookie-parser');

const server = express();

server.use(helmet());
server.use(cors(
    {    credentials: true,
        origin: "http://localhost:3300",}
));
server.use(express.json());
server.use(cookieParser())

server.use('/api/auth', authRouter);
server.use('/api/jokes', authenticate(),jokesRouter);



//testing
server.use('/',(req,res)=>{
    res.status(200).json({testing:'this  a test'})
})

module.exports = server;