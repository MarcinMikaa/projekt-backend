const mongoose = require("mongoose");
const express = require("express");
const MongoStore = require("connect-mongo");
const cors = require("cors");
const passport = require("passport");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const bodyParser = require("body-parser");
const { getShoes } = require("./actions/get-shoes");
const { getSelectedShoe } = require("./actions/get-selected-shoe");
const { register } = require("./actions/register");
const { login } = require("./actions/login");
const { logout } = require("./actions/logout");
const { getUser } = require("./actions/get-user");
const { addNewShoe } = require("./actions/add-new-shoe");
const { updateShoe } = require("./actions/update-shoe");
const { addToFavorite } = require("./actions/add-to-favorite");
const { getFavoritesShoes } = require("./actions/get-favorites-shoes");
const app = express();

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

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: process.env.ORIGIN_ALLOWED  || "http://localhost:3000",
    credentials: true,
  })
);

app.use(
  session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true,
    store: MongoStore.create({
      mongoUrl: "mongodb+srv://praktyki:praktyki2021@development.wtktz.mongodb.net/sneakers-release",
    }),
  })
);
app.use(cookieParser("secretcode"));
app.use(passport.initialize());
app.use(passport.session());
require("./passportConfig")(passport);

app.post("/register", register);
app.post("/login", login);
app.get("/logout", logout);
app.get("/user", getUser);

app.get("/shoes", getShoes);
app.get("/shoes/favorites", getFavoritesShoes);
app.get("/shoes/:id", getSelectedShoe);
app.post("/shoes", addNewShoe);
app.put("/shoes/:id", updateShoe);
app.patch("/shoes/:id/favorites", addToFavorite);

app.listen(process.env.PORT || 4000, () => {
  console.log("Server Has Started");
});
