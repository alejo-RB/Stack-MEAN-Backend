const express = require("express");
const router = express.Router();

const registersCtrl = require('../controllers/controller.registers.js')
//CRUD
//CREATE -READ -UPDATE -DELETE

router.get('/', registersCtrl.getRegisters)

router.post('/', registersCtrl.createRegister)

router.get('/:id', registersCtrl.getRegister)

router.get('/name/:name', registersCtrl.getName)
router.get('/password/:password', registersCtrl.getPasword)

router.put('/:id', registersCtrl.editRegister)

router.delete('/:id', registersCtrl.deleteProduct)

module.exports = router;