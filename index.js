var express = require("express");
var cors = require("cors");
var app = express();

require("dotenv").config();

const mysql = require("mysql2");

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

app.use(cors());

app.get("/hello-world", function (req, res, next) {
  res.json({ msg: "hello world" });
});

app.get("attractions", function (req, res, next) {
  pool.query("SELECT * FROM attractions", function (err, rows, fields) {
    res.json(rows);
  });
});

app.listen(5000, function () {
  console.log("listening on port 5000");
});
