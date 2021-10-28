const mongoose = require("mongoose");
const Shoe = require("./shoe-model");

const user = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  isAdmin: { type: Boolean, default: false },
  favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: Shoe }],
});

module.exports = mongoose.model("User", user);
