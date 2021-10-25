const passport = require("passport");

const login = (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) throw err;
    if (!user) res.send("This User Doesn't Exists");
    else {
      req.logIn(user, (err) => {
        if (err) throw err;
        res.send("Succesfully Authenticated");
        console.log(req.user);
      });
    }
  })(req, res, next);
};

module.exports = { login };
