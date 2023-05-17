const express = require("express");
const router = express.Router();


const itemsCtrl = require('../controllers/controller.items.js')
//CRUD
//CREATE -READ -UPDATE -DELETE

router.get('/', itemsCtrl.getItems)

router.post('/', itemsCtrl.createItem)

router.get('/:id', itemsCtrl.getItem)

router.put('/:id', itemsCtrl.editItem)

router.delete('/:id', itemsCtrl.deleteItem)




module.exports = router;