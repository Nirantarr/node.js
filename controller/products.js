const Product1 = require('../model/product');
const product = Product1.Product;
exports.createProduct=async(req,res)=>{
     const  productt =new  product(req.body);
     await productt.save();
     res.json(req.body);
}
exports.searchAllProduct=async(req,res)=>{
    const one = await product.find();
    res.json(one);
}
exports.searchProduct=async(req,res)=>{
    const id = req.params.id;
    const one = await product.findById(id);
    res.json(one);
}
exports.replaceProduct=async(req,res)=>{
    const id = req.params.id;
   const one = await product.findOneAndReplace({_id:id},req.body,{new:true})
    res.status(201).json(one);
 }
 exports.updateProduct =async(req,res)=>{
    const id = req.params.id;
   const one = await product.findOneAndUpdate({_id:id},req.body,{new:true})
    res.status(201).json(one);
 }
 exports.deleteProduct=async(req,res)=>{
    const id = req.params.id;
   const one = await product.findOneAndDelete({_id:id});
    res.status(200).json(one);
}