import express from "express";
import data from "./data.js";
const app = express();

app.get("/api/products/:id", (req, res) => {
  const product = data.products.find((x) => x._id === req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "Product not found" });
  }
});

app.get("/api/products", (req, res) => {
  res.send(data.products);
});

app.get("/", (req, res) => {
  res.send("server is running");
});

const port = process.env.PORT || 5000;

let server = app.listen(port, () => {
  console.log(` serving at http://localhost:${port}`);
});

setTimeout(function () {
  server.close();
}, 1200000);
