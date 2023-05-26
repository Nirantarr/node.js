const express = require('express');
const Router= express.Router();
const UserController = require('../controller/user');

Router.post('/',UserController.createProduct)
.get('/',UserController.searchAllProduct)
.get('/:id',UserController.searchProduct)
.put('/:id',UserController.replaceProduct)
.patch('/:id',UserController.updateProduct)
.delete('/:id',UserController.deleteProduct)

exports.Router = Router;