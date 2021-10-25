const Shoe = require("../models/shoe-model");

const getSelectedShoe = (req, res) => {
  const id = req.params.id;

  Shoe.findOne({ _id: id })
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = { getSelectedShoe };
