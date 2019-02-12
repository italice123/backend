


exports.regis = (req, res) => {
    console.log(req.body);
    const obj = req.body; //register
    res.status(200).json(obj);
};

exports.login = (req, res) => {
    console.log(req.body);
    const obj = req.body; //login
    res.status(200).json(obj);
};