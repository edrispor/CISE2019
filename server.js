const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const path = require("path");
const bodyParser = require("body-parser");
const port = process.env.PORT || 4000;

const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "plant-a-tree/build")));

const SELECT_ALL_PRODUCTS_QUERY = "SELECT * FROM products";
const SELECT_ALL_TREES_QUERY = "SELECT * FROM trees";
const SELECT_ALL_TOOLS_QUERY = "SELECT * FROM tools";
const SELECT_ALL_MAINTENANCE_QUERY = "SELECT * FROM garden_main";
const SELECT_ALL_USER_QUERY = "SELECT * FROM users";
//const SELECT_All_TABLES_QUERY =
// "SELECT a.product_id,a.product_name,a.product_price FROM trees a union all SELECT b.product_id,b.product_name,b.product_price FROM tools b union all SELECT c.product_id,c.product_name,c.product_price FROM garden_main c;";
const SELECT_All_TABLES_QUERY =
  "SELECT a.product_id,a.product_name,a.latin_name,a.QOH,a.description,a.product_price,a.maintenaince,a.tree_type,a.sunlight,a.soil_drainage,a.growth_rate,a.height FROM trees a UNION ALL SELECT b.product_id,b.product_name,b.latin_name,b.QOH,b.description,b.product_price,b.maintenaince,b.tree_type,b.sunlight,b.soil_drainage,b.growth_rate,b.height FROM tools b UNION ALL SELECT c.product_id,c.product_name,c.latin_name,c.QOH,c.description,c.product_price,c.maintenaince,c.tree_type,c.sunlight,c.soil_drainage,c.growth_rate,c.height FROM garden_main c;";

/*"SELECT a.product_id,a.product_name,a.product_price FROM trees a union all SELECT b.product_id,b.product_name,b.product_price FROM tools b union all SELECT c.product_id,c.product_name,c.product_price FROM garden_main c;";
 */
let pool = mysql.createPool({
  connectionLimit: 15,
  host: "us-cdbr-iron-east-02.cleardb.net",
  user: "b02474a9fac601",
  password: "15251463",
  database: "heroku_e7a0f6f298f431e"
});

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("go to /products");
});

app.get("/items", (req, res) => {
  pool.getConnection(function(err, conn) {
    if (err) {
      res.send("Error occured");
    } else {
      conn.query(SELECT_All_TABLES_QUERY, function(err2, records, fields) {
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
//this is for all products.
app.get("/products", (req, res) => {
  pool.getConnection(function(err, conn) {
    if (err) {
      res.send("Error occured");
    } else {
      conn.query(SELECT_ALL_PRODUCTS_QUERY, function(err2, records, fields) {
        if (!err2) {
          console.log(fields);
          res.json({
            data: records
          });
        }
        conn.release();
      });
    }
  });
});
//this is for all trees
app.get("/trees", (req, res) => {
  pool.getConnection(function(err, conn) {
    if (err) {
      res.send("Error occured");
    } else {
      conn.query(SELECT_ALL_TREES_QUERY, function(err2, records, fields) {
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

//all the tools
app.get("/tools", (req, res) => {
  pool.getConnection(function(err, conn) {
    if (err) {
      res.send("Error occured");
    } else {
      conn.query(SELECT_ALL_TOOLS_QUERY, function(err2, records, fields) {
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

//all the garden maintenence
app.get("/garden_main", (req, res) => {
  pool.getConnection(function(err, conn) {
    if (err) {
      res.send("Error occured");
    } else {
      conn.query(SELECT_ALL_MAINTENANCE_QUERY, function(err2, records, fields) {
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

app.get("/data", (req, res) => {
  pool.getConnection(function(err, conn) {
    if (err) {
      res.send("Error occured");
    } else {
      conn.query(SELECT_ALL_USER_QUERY, function(err2, records, fields) {
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

app.post("/data", (req, res) => {
  pool.getConnection(function(err, conn) {
    if (err) {
      res.send("Error occured");
    } else {
      var data = {
        username: req.body.username,
        pass: req.body.pass,
        email: req.body.email,
        shipping: req.body.shipping
      };
      var sql = "INSERT INTO users SET ?";
      conn.query(sql, data, function(err2, records, fields) {
        if (!err2) {
          console.log(records);
          res.send({
            status: "Data sukses diinput!",
            no: null,
            name: req.body.username,
            pass: req.body.pass,
            email: req.body.email,
            shipping: req.body.shipping
          });
        }
        conn.release();
      });
    }
  });
});

/*app.get("/profile", (req, res) => {
  pool.getConnection(function(err, conn) {
    if (err) {
      res.send("Error occured");
    } else {
      var data = {
        username: req.body.username
      };
      var sql = "SELECT * FROM users WHERE username = ? ";
      conn.query(sql, data, function(err2, records, fields) {
        if (!err2) {
          console.log(records);
          res.send({
            name: req.body.username
          });
        }
        conn.release();
      });
    }
  });
});*/
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/plant-a-tree/build/index.html"));
});

app.listen(port, () => {
  console.log("products server listening on port 4000");
});
