const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema(
  {
    productId: { type: String, required: true },
    productoDescripcion: { type: String, required: true },
    price: { type: Number, required: true }
  },
  {
    versionKey: false
  }
);

module.exports = mongoose.model("Products", productSchema);
