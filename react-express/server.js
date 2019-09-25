const express = require("express");
const app = express();
const port = 5000;
app.listen(port, () => console.log("Server started on port ${port}"));
app.get("/api/customers", (req, res) => {
  const customers = [
    { id: 1, firstname: "John", lastname: "Doe" },
    { id: 2, firstname: "May", lastname: "Griffin" },
    { id: 3, firstname: "Richard", lastname: "Feynman" }
  ];

  res.json(customers);
});
