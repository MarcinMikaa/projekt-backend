const Shoe = require("../models/shoe-model");
const User = require("../models/user-model");

const addToFavorite = async (req, res) => {
  const user = await User.findOne({ _id: req.user._id });
  const shoe = await Shoe.findOne({ _id: req.params.id });

  user.favorites.push(shoe._id);
  await user.save();
  res.json({ favorites: user.favorites });
};

module.exports = { addToFavorite };
