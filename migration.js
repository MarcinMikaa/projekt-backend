const mongoose = require("mongoose");
const Shoe = require("./models/shoe-model");

mongoose.connect(
  "mongodb+srv://praktyki:praktyki2021@development.wtktz.mongodb.net/sneakers-release",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("Mongoose Is Connected");
  }
);

Promise.all([
  Shoe.create({
    brand: "Nike",
    model: "Nike Air Jordan 4 Red Thunder",
    date: new Date("2021-10-30"),
    price: 189,
    resell: 1,
    url: "https://houseofheat.co/app/uploads/2021/02/air-jordan-4-red-thunder-ct8527-016-release-date-1-1024x640.jpg",
  }),
  Shoe.create({
    brand: "adidas",
    model: "adidas Yeezy Foam Runner Vermilion",
    date: new Date("2021-11-19"),
    price: 80,
    resell: 2,
    url: "https://sneakerbardetroit.com/wp-content/uploads/2021/04/adidas-Yeezy-Foam-Runner-Vermilion-Red-October-Release-Date.png",
  }),
  Shoe.create({
    brand: "Nike",
    model: "Nike Dunk Low Archeo Pink",
    date: new Date("2021-11-18"),
    price: 99,
    resell: 0,
    url: "https://sneakerbardetroit.com/wp-content/uploads/2021/09/2021-Nike-Dunk-Low-Archeo-Pink-DD1503-111-Release-Date-1.jpg",
  }).then(() => {
    console.log("Mongoose Disconected");
    mongoose.disconnect();
  }),
]);
