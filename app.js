const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const passportLocal = require("passport-local").Strategy;
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const session = require("express-session");
const bodyParser = require("body-parser");
// const { getShoe } = require("./actions/get-shoe");
// const { register } = require("./actions/register");
// const { login } = require("./actions/login");
const Shoe = require("./models/shoe-model");
const User = require("./models/user-model");
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
    origin: "http://localhost:3000", // <--location of the react app were connecting to
    credentials: true,
  })
);

app.use(
  session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(cookieParser("secretcode"));
app.use(passport.initialize());
app.use(passport.session());
require("./passportConfig")(passport);

// app.use({ register });

app.post("/register", (req, res) => {
  User.findOne({ username: req.body.username }, async (err, doc) => {
    if (err) throw err;
    if (doc) res.send("User Already Exists");
    if (!doc) {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);

      const newUser = new User({
        username: req.body.username,
        password: hashedPassword,
      });
      await newUser.save();
      res.send("User Created");
    }
  });
});

// app.use({ login });

app.get("/shoes", (req, res) => {
  Shoe.find({})
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log(error);
    });
});

// app.use({ getShoe });

app.listen(4000, () => {
  console.log("Server Has Started");
});
