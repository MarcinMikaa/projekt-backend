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
    model: "Nike Dunk High Aluminium",
    date: new Date("2021-11-25"),
    price: 109,
    resell: 1,
    url: "https://sneakerbardetroit.com/wp-content/uploads/2021/06/Nike-Dunk-High-Aluminum-DD1869-107-Release-Date-4-1068x706.jpg",
  }),
  Shoe.create({
    brand: "adidas",
    model: "adidas Yeezy 350 V2 Beluga Reflective",
    date: new Date("2021-10-30"),
    price: 220,
    resell: 2,
    url: "https://sneakerbardetroit.com/wp-content/uploads/2021/05/adidas-Yeezy-Boost-350-V2-Beluga-Reflective-Release-Date.jpg",
  }),
  Shoe.create({
    brand: "Nike",
    model: "Nike Air Force 1 Purple Skeleton",
    date: new Date("2021-10-28"),
    price: 139,
    resell: 0,
    url: "https://wa.snkraddicted.com/wp-content/uploads/2021/10/nike-air-force-1-purple-skeleton-CU8067-500-web.jpg",
  }),
  Shoe.create({
    brand: "Nike",
    model: "Nike x Sacai VaporWaffle Sail",
    date: new Date("2021-10-29"),
    price: 179,
    resell: 1,
    url: "https://images.restocks.net/products/DD1875-100/nike-sacai-vaporwaffle-sail-gum-1-1000.png",
  }),
  Shoe.create({
    brand: "adidas",
    model: "adidas Yeezy 500 Blush",
    date: new Date("2021-11-24"),
    price: 200,
    resell: 2,
    url: "https://th.bing.com/th/id/R.b861f0fc174d3837bfc26215fa360a94?rik=sHVBgkD8l7%2biGA&pid=ImgRaw&r=0",
  }),
  Shoe.create({
    brand: "Nike",
    model: "Nike x Off-White Air Jordan 2 Low",
    date: new Date("2021-11-12"),
    price: 250,
    resell: 2,
    url: "https://thedropdate-media.s3.amazonaws.com/uploads/2021/06/off-white-air-jordan-2.jpg",
  }).then(() => {
    console.log("Mongoose Disconected");
    mongoose.disconnect();
  }),
]);
