const express = require('express');
const router = express.Router();

const ordersCtrl = require('../controllers/controller.orders.js')
//CRUD
//CREATE -READ -UPDATE -DELETE

router.get('/', ordersCtrl.getOrders)

router.post('/', ordersCtrl.createOrder)

router.get('/:id', ordersCtrl.getOrder)


router.put('/:id', ordersCtrl.editOrder)

router.delete('/:id', ordersCtrl.deleteOrder)


module.exports = router; 
