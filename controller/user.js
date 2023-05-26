const fs = require('fs');
const Data = JSON.parse(fs.readFileSync('data.json','utf-8')); // json is read
const user = Data.users;
// console.log(cart[1]);
// const index = fs.readFileSync('index.html','utf-8'); // index.html is read

exports.createProduct=(req,res)=>{
    res.json(req.body);
    user.push(req.body);
}
exports.searchAllProduct=(req,res)=>{
    res.json(user);
}
exports.searchProduct=(req,res)=>{
    const id = (+req.params.id); //+ symbol changes string to number.
    const product = user.find(p=>p.id===id);
    res.json(product);
}
exports.replaceProduct=(req,res)=>{
    const id = (+req.params.id);
    const productIndex = cart.findIndex(p=>p.id===id);
    const product= user[productIndex];
    user.splice(productIndex,1,{...product,...req.body});
    res.status(201).json("Updated");
 }
 exports.updateProduct =(req,res)=>{
    const id = (+req.params.id);
    const productIndex=user.findIndex(p=>p.id===id);
    const product= user[productIndex];
    user.splice(productIndex,1,{...product,...req.body});
    res.status(201).json("Updated");
 }
 exports.deleteProduct=(req,res)=>{
    const id = (+req.params.id);
    const productIndex=user.findIndex(p=>p.id===id);
    const product = user[productIndex];
    user.splice(productIndex,1);
    res.status(200).json("Deleted");
}