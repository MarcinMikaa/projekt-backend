const logout = (req, res) => {
  req.logout();
  res.json([]);
  console.log("logout");
};

module.exports = { logout };
