const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const path = require("path");
const port = process.env.PORT || 4000;

const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "plant-a-tree/build")));

const SELECT_ALL_PRODUCTS_QUERY = "SELECT * FROM products";

let pool = mysql.createPool({
  connectionLimit: 10,
  host: "us-cdbr-iron-east-02.cleardb.net",
  user: "b02474a9fac601",
  password: "15251463",
  database: "heroku_e7a0f6f298f431e"
});

app.use(cors());

app.get("/", (req, res) => {
  res.send("go to /products");
});

app.get("/products", (req, res) => {
  pool.getConnection(function(err, conn) {
    if (err) {
      res.send("Error occured");
    } else {
      conn.query(SELECT_ALL_PRODUCTS_QUERY, function(err2, records, fields) {
        if (!err2) {
          res.json({
            data: records
          });
        }
        conn.release();
      });
    }
  });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/plant-a-tree/build/index.html"));
});

app.listen(port, () => {
  console.log("products server listening on port 4000");
});