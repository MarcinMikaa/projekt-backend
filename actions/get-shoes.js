const Shoe = require("../models/shoe-model");

const getShoes = (req, res) => {
  Shoe.find({})
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = { getShoes };
