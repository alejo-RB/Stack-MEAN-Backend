const Orders = require("../models/model.orders");

const orders = {};

orders.getOrders = async (req, res, next) => {
  const orders = await Orders.find();
  res.json(orders);
};

orders.createOrder = async (req, res, next) => {
  const order = new Orders({
    customerId: req.body.customerId,
    orderId: req.body.orderId,
    orderStatus: req.body.orderStatus
  });
  await order.save();
  res.json({ status: "Orders created" }); 
};

orders.getOrder = async (req, res, next) => {
  const { id } = req.params;
  const order = await Orders.findById(id);
  res.json(order);
};


orders.editOrder = async (req, res, next) => {
  const { id } = req.params;
  await Orders.findByIdAndUpdate(id, {$set: req.body}, {new: true});
  res.json({ status: "Order Updated" });
};

orders.deleteOrder = async (req, res, next) => {
  await Orders.findByIdAndRemove(req.params.id);
  res.json({ status: "Order Deleted" });
};


module.exports = orders;