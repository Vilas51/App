//importing required libraries/modules
const express= require('express');//Express is used to build the REST API (routes, middleware)
const app = express();//intialised the express

const http=require('http');//Node's native HTTP module to create server 

const mongoose=require('mongoose');// Mongoose connects and interacts with MongoDB database

const socketIo=require('socket.io'); //to real time communication (Websockets)
const bodyParser = require('body-parser');
const cors = require('cors');
const AuthRouter=require('./Routes/AuthRouter')
require('dotenv').config();
require('./Models/db');

const PORT=process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(cors());

//routes
app.use('/auth', AuthRouter);

app.listen(PORT, (req,res) =>{
    console.log(`Server is running on port ${PORT}`);
})