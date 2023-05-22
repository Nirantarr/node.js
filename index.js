const fs = require('fs');
const data = JSON.parse(fs.readFileSync('data.json','utf-8')); // json is read
const cart = data.carts;
// console.log(cart[1]);
const index = fs.readFileSync('index.html','utf-8'); // index.html is read

const express = require('express');
const server = express();

// bodyparse  use to get data from body 
server.use(express.json()); 

// ========CREATE-READ-UPDATE-DELETE (CRUD) ===========
const createProduct=(req,res)=>{
    res.json(req.body);
    cart.push(req.body);
}
const searchAllProduct=(req,res)=>{
    res.json(cart);
}
const searchProduct=(req,res)=>{
    const id = (+req.params.id); //+ symbol changes string to number.
    const product = cart.find(p=>p.id===id);
    res.json(product);
}
const replaceProduct=(req,res)=>{
    const id = (+req.params.id);
    const productIndex = cart.findIndex(p=>p.id===id);
    const product= cart[productIndex];
    cart.splice(productIndex,1,{...product,...req.body});
    res.status(201).json("Updated");
 }
 const updateProduct =(req,res)=>{
    const id = (+req.params.id);
    const productIndex=cart.findIndex(p=>p.id===id);
    const product= cart[productIndex];
    cart.splice(productIndex,1,{...product,...req.body});
    res.status(201).json("Updated");
 }
 const deleteProduct=(req,res)=>{
    const id = (+req.params.id);
    const productIndex=cart.findIndex(p=>p.id===id);
    const product = cart[productIndex];
    cart.splice(productIndex,1);
    res.status(200).json("Deleted");
}
// CREATE API Type - alwasys use POST
server.post('/products',createProduct)

// READ API
server.get('/products',searchAllProduct)
// baseURL/ Api root - 'https://localhost:8080'
server.get('/products/:id',searchProduct)

// UPDATE API
// In put the provided data overrides the existing data means new data will be shown and old all data will be erased.
server.put('/products/:id',replaceProduct)
// In patch the data gets comined with existing data.
server.patch('/products/:id',updateProduct)

// UPDATE API
server.delete('/products/:id',deleteProduct)

server.listen(8080,()=>{
    console.log("server started at 8080");
})
