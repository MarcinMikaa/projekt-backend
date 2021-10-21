// const bcrypt = require("bcryptjs");
// const User = require("../models/user-model");
// const mongoose = require("mongoose");
// const express = require("express");
// const app = express();

// mongoose.connect(
//   "mongodb+srv://praktyki:praktyki2021@development.wtktz.mongodb.net/sneakers-release",
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   },
//   () => {
//     console.log("Mongoose Is Connected");
//   }
// );

// app.post("/register", (req, res) => {
//   User.findOne({ username: req.body.username }, async (err, doc) => {
//     if (err) throw err;
//     if (doc) res.send("User Already Exists");
//     if (!doc) {
//       const hashedPassword = await bcrypt.hash(req.body.password, 10);

//       const newUser = new User({
//         username: req.body.username,
//         password: hashedPassword,
//       });
//       await newUser.save();
//       res.send("User Created");
//     }
//   });
// });

// module.exports = { register };
