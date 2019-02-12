const express = require("express");
const app = express();
const bodyParser = require("body-parser");
var mysql = require('mysql');
const db = require('../config/db');
var bcrypt = require('bcryptjs');

const {getToken, verifyToken } = require('../config/jwthandler');

const result_failed = [
    {
        "result": "failed",
        "data": ""
    }
];


app.post('/register', (req, res) => {
    console.log(req.body);
    const obj = req.body;
    var hashedpassword = bcrypt.hashSync(req.body.password, 8);
    req.body.password = hashedpassword;

    var values = [
        [req.body.username, req.body.password]
    ];
    var sql = `INSERT INTO user_info (username,password) VALUES ?`;
    db.connection.query(sql, [values], function (err, result) {
        if (err) {
            res.json(result_failed);
        } else {
            const finalResult = {
                result: 'success',
                data: ''
            };
            res.json(finalResult);
            console.log("record inserted")
        }
    });
    return finalResult;
});


app.post('/login', (req, res) => {
    console.log(req.body);
    const obj = req.body;

    var sql = `SELECT
                id,
                username,
                password
              FROM users
              WHERE username = '${req.body.username}'`;

    db.connection.query(sql, function (err, result) {
        if (err) {
            res.json(result_failed);
        } else {
            if (result.length > 0) {
                const passwordIsValid = bcrypt.compareSync(req.body.password, result[0].password);
                if (!passwordIsValid) return res.json(result_failed);

                var _username = result[0].username;
                var _id = result[0].id;
                var token = getToken({ id: _id, username: _username });
                const finalResult = {
                    result: "success",
                    data: token
                };
                console.log(JSON.stringify(finalResult));
                res.json(finalResult);
            } else {
                const finalResult = {
                    result: "failed",
                    data: ""
                }
                res.json(finalResult);
            };
        };
    });
});


app.get('/feed', verifyToken, (req, res) => {
    res.json({ result: "success" })
});

module.exports = app;