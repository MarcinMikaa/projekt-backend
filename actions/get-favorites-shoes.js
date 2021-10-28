const User = require("../models/user-model");

const getFavoritesShoes = (req, res) => {
  User.findOne({ _id: req.user._id })
    .populate("favorites")
    .then((data) => {
      res.json(data.favorites);
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = { getFavoritesShoes };
