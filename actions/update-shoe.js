const Shoe = require("../models/shoe-model");

const updateShoe = (req, res) => {
  const id = req.params.id;
  const updatedBrand = req.body.brand;
  const updatedModel = req.body.model;
  const updatedDate = req.body.date;
  const updatedPrice = req.body.price;
  const updatedResell = req.body.resell;
  const updatedUrl = req.body.url;

  Shoe.updateOne(
    { _id: id },
    {
      brand: updatedBrand,
      model: updatedModel,
      date: updatedDate,
      price: updatedPrice,
      resell: updatedResell,
      url: updatedUrl,
    }
  )
    .orFail()
    .then((data) => {
      if (!data) {
        res.json({ error: "Shoe doesn't exists" });
        res.status(404);
        return;
      }

      res.status(200);
      res.json(data);
      console.log("Shoe updated");
    });
};

module.exports = { updateShoe };
