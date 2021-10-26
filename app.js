const mongoose = require("mongoose");
const express = require("express");
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
    origin: "http://localhost:3000",
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

app.post("/register", register);
app.post("/login", login);
// app.get("/user", getUser);

app.get("/", getShoes);
app.get("/shoe/:id", getSelectedShoe);
app.post("/action", addNewShoe);

app.get("/user", (req, res) => {
  res.send(req.user);
  console.log(req.user);
});

app.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

app.listen(4000, () => {
  console.log("Server Has Started");
});
