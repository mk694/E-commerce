const express = require("express");
const app = express();
const data = require("./data");

app.get("/api/products", (req, res) => {
  res.send(data.products);
});

let port = app.listen(5000, () => {
  console.log("server running on port 5000");
});
