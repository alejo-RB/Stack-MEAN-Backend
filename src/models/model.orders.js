const mongoose = require("mongoose");
const { Schema } = mongoose;

const ordersSchema = new Schema(
  {
    customerId: { type: String, required: true },
    orderId: { type: String, required: true },
    orderStatus: { type: String, required: true },
  },
  {
    versionKey: false,
	timestamps: true,
  }
);

module.exports = mongoose.model("Orders", ordersSchema);
