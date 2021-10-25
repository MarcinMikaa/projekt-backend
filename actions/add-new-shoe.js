const Shoe = require("../models/shoe-model");

const addNewShoe = (req, res) => {
  Shoe.findOne({ model: req.body.model }, async (err, doc) => {
    if (err) throw err;
    if (doc) res.send("Shoe Already Exists");
    if (!doc) {
      const newShoe = new Shoe({
        brand: req.body.brand,
        model: req.body.model,
        date: req.body.date,
        price: req.body.price,
        resell: req.body.resell,
        url: req.body.url,
      });
      await newShoe.save();
      res.send("Shoe Created");
    }
  });
};

module.exports = { addNewShoe };
