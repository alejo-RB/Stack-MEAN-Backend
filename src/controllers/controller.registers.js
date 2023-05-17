const Registers = require("../models/model.registers");
const bcryptjs = require("bcryptjs");

const registers = {};

registers.getRegisters = async (req, res, next) => {
  const registers = await Registers.find();
  res.json(registers);
};

registers.createRegister = async (req, res, next) => {
  const register = new Registers({
    name: req.body.name, 
    email: req.body.email,
    password: req.body.password
  });
  await register.save();
  res.json({ status: "Register created" }); 
};

registers.getRegister = async (req, res, next) => {
  const { id } = req.params;
  const register = await Registers.findById(id);
  res.json(register);
};

///METODOS AÑADIDOS
//1 que el usuario sea unico
//2 comprobar si el usuario existe
registers.getName = async (req, res, next) => {
  const { name } = req.params;
  const register = await Registers.find({name: name}, {name:1, _id:0});
  res.json(register);
};
// si la clave es correcta
registers.getPasword = async (req, res, next) => {
  const { password } = req.params;
  const register = await Registers.find({password:password}, {password:1, _id:0});
  res.json(register);
};
/////
registers.editRegister = async (req, res, next) => {
  const { id } = req.params;
  await Registers.findByIdAndUpdate(id, {$set: req.body}, {new: true});
  res.json({ status: "Register Updated" });
};

registers.deleteProduct = async (req, res, next) => {
  await Registers.findByIdAndRemove(req.params.id);
  res.json({ status: "Register Deleted" });
};

module.exports = registers;