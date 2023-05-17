const express = require("express");
const router = express.Router();


const customersCtrl = require('../controllers/controller.customers.js')
//CRUD
//CREATE -READ -UPDATE -DELETE

router.get('/', customersCtrl.getCustomers)

router.post('/', customersCtrl.createCustomer)

router.get('/:id', customersCtrl.getCustomer)

router.put('/:id', customersCtrl.editCustomer)

router.delete('/:id', customersCtrl.deleteCustomer)




module.exports = router;