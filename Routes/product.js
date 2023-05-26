const express = require('express');
const Router= express.Router();
const ProductController = require('../controller/products');

Router.post('/',ProductController.createProduct)
.get('/',ProductController.searchAllProduct)
.get('/:id',ProductController.searchProduct)
.put('/:id',ProductController.replaceProduct)
.patch('/:id',ProductController.updateProduct)
.delete('/:id',ProductController.deleteProduct)

exports.Router = Router;