require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
// const { Schema } = mongoose;
// const morgan = require('morgan');
const server = express();

const productRouter= require('./Routes/product');
const userRouter = require('./Routes/user');

// database conenction local
main().catch(err=>console.log(err));
async function main(){
   await mongoose.connect('mongodb://127.0.0.1:27017/eccomerce');
   console.log("Database Connected");    
}
server.use(cors());
server.use(express.json()); 
server.use('/products',productRouter.Router);
server.use('/users',userRouter.Router);
// server.use(morgan('default'));
server.use(express.static(process.env.DIRECTORY));

server.listen(8080,()=>{
    console.log("server started at 8080");
})
server.listen(8080);