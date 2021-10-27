const passport = require("passport");

const login = (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    console.log(user);
    if (err) throw err;
    if (!user) res.send("This User Doesn't Exists");
    else {
      req.logIn(user, (err) => {
        if (err) throw err;
        res.json({ ...req.user.toJSON(), password: undefined });
        console.log(user);
      });
    }
  })(req, res, next);
};

module.exports = { login };
