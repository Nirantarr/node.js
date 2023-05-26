const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
    title: {type:String},
    price: {type:Number},
    stock:{type: Number, min:[1,"Min is 1"]},
    total: {type:Number, max:[1000,"Max is 100"]},
    category:{type: String},
    rating:{type: Number},
    brand:{type: String},
    images:{type: String},
    discountPercentage: {type: Number}
  });

  const Product = mongoose.model('Product', productSchema);
 exports.Product = Product;