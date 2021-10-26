const getUser = (req, res) => {
  res.send(req.user);
  console.log(req.user);
};

module.exports = { getUser };
