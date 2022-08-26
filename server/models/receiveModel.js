const { Schema, model } = require("mongoose");

const receiveSchema = new Schema(
  {
    image: String,
    title: {
      type: String,
      trim: true,
    },
    detail: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

const Receive = model("Receive", receiveSchema);

module.exports = Receive;
