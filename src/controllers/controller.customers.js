const Customers = require("../models/model.customers");

const customers = {};

customers.getCustomers = async (req, res, next) => {
  const customers = await Customers.find();
  res.json(customers);
};

customers.createCustomer = async (req, res, next) => {
  const customer = new Customers({
    customerId: req.body.customerId,
    name: req.body.name,
    email: req.body.email,
	address: req.body.address
  });
  await customer.save();
  res.json({ status: "Customer created" }); 
};

customers.getCustomer = async (req, res, next) => {
  const { id } = req.params;
  const customer = await Customers.findById(id);
  res.json(customer);
};

customers.editCustomer = async (req, res, next) => {
  const { id } = req.params;
  await Customers.findByIdAndUpdate(id, {$set: req.body}, {new: true});
  res.json({ status: "Customer Updated" });
};

customers.deleteCustomer = async (req, res, next) => {
  await Customers.findByIdAndRemove(req.params.id);
  res.json({ status: "Customer Deleted" });
};

module.exports = customers;