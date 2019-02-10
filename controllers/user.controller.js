const users = require("../models/user.model").users();

exports.getuser = (req, res) => {
  res.status(200).json(users);
};

exports.render = (req, res) => {
  res.render("index", {
    title: "This is title of EJS Template",
    message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
    names: ["John Doe", "Jane Doe", "Jane Dane"]
  });
};
