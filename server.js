const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const path = require("path");
const port = process.env.PORT || 4000;

const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "plant-a-tree/build")));

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

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/plant-a-tree/build/index.html"));
});

app.listen(port, () => {
  console.log("products server listening on port 4000");
});
