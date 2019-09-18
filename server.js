const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();

const SELECT_ALL_PRODUCTS_QUERY = "SELECT * FROM products";

const connection = mysql.createConnection({
  host: "us-cdbr-iron-east-02.cleardb.net",
  user: "b02474a9fac601",
  password: "15251463",
  database: "heroku_e7a0f6f298f431e"
});

app.use(cors());

app.get("/", (req, res) => {
  res.send("go to /products");
});

connection.connect(err => {
  if (!err) console.log("DB connection succeded");
  else
    console.log(
      "DB Connection failed \n Error : " + JSON.stringify(err, undefined, 2)
    );
});

app.get("/products", (req, res) => {
  connection.query(SELECT_ALL_PRODUCTS_QUERY, (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.json({
        data: results
      });
    }
  });
});

app.listen(4000, () => {
  console.log("products server listening on port 4000");
});
