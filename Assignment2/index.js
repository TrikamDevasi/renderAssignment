const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

let products = [
  { id: 1, name: "Wireless Mouse", category: "Electronics", price: 799, stock: 25, rating: 4.3 },
  { id: 2, name: "Running Shoes", category: "Footwear", price: 2499, stock: 40, rating: 4.5 },
  { id: 3, name: "Laptop Stand", category: "Accessories", price: 999, stock: 30, rating: 4.2 },
  { id: 4, name: "Smart Watch", category: "Electronics", price: 4999, stock: 12, rating: 4.4 },
  { id: 5, name: "Backpack", category: "Fashion", price: 1599, stock: 50, rating: 4.1 }
];

app.get("/products", (req, res) => {
  res.status(200).json(products);
});

app.get("/products/category/:categoryName", (req, res) => {
  const category = req.params.categoryName.toLowerCase();
  const filtered = products.filter(p => p.category.toLowerCase() === category);
  res.status(200).json(filtered);
});

app.get("/products/:id", (req, res) => {
  const id = parseInt(req.params.id);
  if (isNaN(id)) return res.status(400).json({ message: "Invalid ID" });

  const product = products.find(p => p.id === id);
  if (!product) return res.status(404).json({ message: "Product not found" });

  res.status(200).json(product);
});

app.post("/products", (req, res) => {
  if (!req.body) return res.status(400).json({ message: "Body required" });

  const { name, category, price, stock, rating } = req.body;
  if (!name || !category || price == null || stock == null || rating == null) {
    return res.status(400).json({ message: "All fields required" });
  }

  const newId = products.length > 0 ? products[products.length - 1].id + 1 : 1;

  const newProduct = { id: newId, name, category, price, stock, rating };
  products.push(newProduct);

  res.status(201).json(newProduct);
});

app.put("/products/:id", (req, res) => {
  const id = parseInt(req.params.id);
  if (isNaN(id)) return res.status(400).json({ message: "Invalid ID" });

  const index = products.findIndex(p => p.id === id);
  if (index === -1) return res.status(404).json({ message: "Product not found" });

  if (!req.body) return res.status(400).json({ message: "Body required" });

  const { name, category, price, stock, rating } = req.body;
  if (!name || !category || price == null || stock == null || rating == null) {
    return res.status(400).json({ message: "All fields required" });
  }

  products[index] = { id, name, category, price, stock, rating };

  res.status(200).json(products[index]);
});

app.put("/products/:id/stock", (req, res) => {
  const id = parseInt(req.params.id);
  if (isNaN(id)) return res.status(400).json({ message: "Invalid ID" });

  const product = products.find(p => p.id === id);
  if (!product) return res.status(404).json({ message: "Product not found" });

  if (req.body.stock == null) {
    return res.status(400).json({ message: "Stock required" });
  }

  product.stock = req.body.stock;
  res.status(200).json(product);
});

app.put("/products/:id/price", (req, res) => {
  const id = parseInt(req.params.id);
  if (isNaN(id)) return res.status(400).json({ message: "Invalid ID" });

  const product = products.find(p => p.id === id);
  if (!product) return res.status(404).json({ message: "Product not found" });

  if (req.body.price == null) {
    return res.status(400).json({ message: "Price required" });
  }

  product.price = req.body.price;
  res.status(200).json(product);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});