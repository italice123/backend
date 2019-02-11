module.exports = app => {
  const user = require("../controllers/user.controller");
  const admin = require("../controllers/admin.controller");

  app.get("/", (req, res) => {
    user.render(req, res);
  });

  app.get("/test", (req, res) => {
    res.send("Hello");
  });
  app.get("/get_user", (req, res) => {
    user.getuser(req, res);
  });
  app.post("/register_admin", (req, res) => {
    admin.regis(req,res);
  });
};
