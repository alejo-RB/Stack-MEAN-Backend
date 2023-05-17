const Products = require("../models/model.products");

const products = {};

products.getProducts = async (req, res, next) => {
  const products = await Products.find();
  res.json(products);
};

products.createProduct = async (req, res, next) => {
  const product = new Products({
    productId: req.body.productId,
    productoDescripcion: req.body.productoDescripcion,
    price: req.body.price
  });
  await product.save();
  res.json({ status: "Product created" }); 
};

products.getProduct = async (req, res, next) => {
  const { id } = req.params;
  const product = await Products.findById(id);
  res.json(product);
};

products.editProduct = async (req, res, next) => {
  const { id } = req.params;
  await Products.findByIdAndUpdate(id, {$set: req.body}, {new: true});
  res.json({ status: "Product Updated" });
};

products.deleteProduct = async (req, res, next) => {
  await Products.findByIdAndRemove(req.params.id);
  res.json({ status: "Product Deleted" });
};

module.exports = products;