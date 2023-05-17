const mongoose = require("mongoose");
const { Schema } = mongoose;

const registersSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }
  },
  {
    versionKey: false,
	timestamps: true,
  }
);

module.exports = mongoose.model("Register", registersSchema);