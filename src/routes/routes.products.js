const express = require("express");
const router = express.Router();

const productsCtrl = require('../controllers/controller.products.js')
//CRUD
//CREATE -READ -UPDATE -DELETE

router.get('/', productsCtrl.getProducts)

router.post('/', productsCtrl.createProduct)

router.get('/:id', productsCtrl.getProduct)

router.put('/:id', productsCtrl.editProduct)

router.delete('/:id', productsCtrl.deleteProduct)


module.exports = router;