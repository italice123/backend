module.exports = app => {
  const user = require("../controllers/user.controller");
  const admin = require("../controllers/admin.controller");

  app.post("/register_user", (req, res) => {
    user.regis(req, res);
  });
  app.post("/login_user", (req, res) => { 
    user.login(req, res);
  });

  //=================== admin ====================================
  app.post("/register_admin", (req, res) => {
    admin.regis(req, res);
  });
  app.post("/login_admin", (req, res) => { 
    admin.login(req, res);
  });
};
