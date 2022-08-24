const { Schema, model } = require("mongoose");

const sidebarSchema = new Schema(
  {
    tag: String,
    logo: String,
    text: {
      type: String,
      trim: true,
    },
    images: [String],
    map: String
  },
  { timestamp: true }
);

const Sidebar = model("Sidebar", sidebarSchema);

module.exports = Sidebar;
