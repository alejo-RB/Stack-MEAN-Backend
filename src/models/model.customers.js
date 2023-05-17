const mongoose = require("mongoose");
const { Schema } = mongoose;

const customersSchema = new Schema(
  {
    customerId: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
  },
  {
    versionKey: false
  }
);

module.exports = mongoose.model("Customers", customersSchema);
