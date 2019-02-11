const admin = require("../models/admin.model").admin();


exports.regis = (req, res) => {
    console.log(req.body);
    const obj = req.body;
    res.status(200).json(obj);
};