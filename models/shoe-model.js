const mongoose = require("mongoose");
const shoe = new mongoose.Schema({
  brand: String,
  model: String,
  date: Date,
  price: Number,
  resell: Number,
  url: String,
});

module.exports = mongoose.model("Shoe", shoe);
