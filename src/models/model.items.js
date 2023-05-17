const mongoose = require("mongoose");
const { Schema } = mongoose;

const itemsSchema = new Schema(
  {
    orderId: { type: String, required: true },
    productId: { type: String, required: true },
    quantity: { type: Number, required: true }
  },
  {
    versionKey: false
  }
);

module.exports = mongoose.model("Items", itemsSchema);
