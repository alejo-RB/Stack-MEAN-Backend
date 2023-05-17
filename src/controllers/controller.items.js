const Items = require("../models/model.items");

const items = {};

items.getItems = async (req, res, next) => {
  const items = await Items.find();
  res.json(items);
};

items.createItem = async (req, res, next) => {
  const item = new Items({
    orderId: req.body.orderId,
    productId: req.body.productId, 
    quantity: req.body.quantity
  });
  await item.save();
  res.json({ status: "Items created" }); 
};

items.getItem = async (req, res, next) => {
  const { id } = req.params;
  const item = await Items.findById(id);
  res.json(item);
};

items.editItem = async (req, res, next) => {
  const { id } = req.params;
  await Items.findByIdAndUpdate(id, {$set: req.body}, {new: true});
  res.json({ status: "Items Updated" });
};

items.deleteItem = async (req, res, next) => {
  await Items.findByIdAndRemove(req.params.id);
  res.json({ status: "Items Deleted" });
};

module.exports = items;