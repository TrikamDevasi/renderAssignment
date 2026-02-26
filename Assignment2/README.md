# 🛒 E-Commerce Product API

render link:https://assignment2-agkd.onrender.com

postman link:https://documenter.getpostman.com/view/50840761/2sBXcGFfnh
A REST API built using **Express.js** that manages product data using an in-memory JSON array.

This project implements GET, POST, and PUT routes following REST principles and proper HTTP status codes.

---

## 📌 Objective

Build a REST API that:

* Implements 3 GET routes
* Implements 1 POST route
* Implements 3 PUT routes
* Uses proper HTTP status codes (200, 201, 404)
* Uses in-memory storage (no database)
* Uses Express and CORS middleware

---

## 🛠 Tech Stack

* Node.js
* Express.js
* CORS

---

## 📂 Project Structure

```
ecommerce-api/
│
├── server.js
├── package.json
└── README.md
```

---

## 🚀 How to Run Locally

### 1️⃣ Clone the repository

```bash
git clone <your-repo-link>
cd ecommerce-api
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Start the server

```bash
node server.js
```

Server will run on:

```
http://localhost:4000
```

---

# 📦 Product Data Structure

Each product follows this structure:

```json
{
  "id": 1,
  "name": "Wireless Mouse",
  "category": "Electronics",
  "price": 799,
  "stock": 25,
  "rating": 4.3
}
```

---

# 📌 Implemented Routes

---

## ✅ 1. GET `/products`

Returns all products.

**Status:** 200

### Example:

```
GET http://localhost:4000/products
```

---

## ✅ 2. GET `/products/:id`

Returns product by ID.

**Status:**

* 200 → If product found
* 404 → If product not found

### Example:

```
GET http://localhost:4000/products/3
```

---

## ✅ 3. GET `/products/category/:categoryName`

Returns products filtered by category.

**Status:** 200
(Returns empty array if no products found)

### Example:

```
GET http://localhost:4000/products/category/Electronics
```

---

## ✅ 4. POST `/products`

Adds a new product.

**Status:** 201

### Example Request:

```
POST http://localhost:4000/products
```

### Body (JSON):

```json
{
  "name": "Bluetooth Speaker",
  "category": "Electronics",
  "price": 2999,
  "stock": 20,
  "rating": 4.6
}
```

---

## ✅ 5. PUT `/products/:id`

Replaces entire product (except ID).

**Status:**

* 200 → If updated
* 404 → If not found

### Example:

```
PUT http://localhost:4000/products/2
```

---

## ✅ 6. PUT `/products/:id/stock`

Updates only stock value.

**Status:**

* 200 → If updated
* 404 → If not found

### Example:

```
PUT http://localhost:4000/products/2/stock
```

### Body:

```json
{
  "stock": 60
}
```

---

## ✅ 7. PUT `/products/:id/price`

Updates only price value.

**Status:**

* 200 → If updated
* 404 → If not found

### Example:

```
PUT http://localhost:4000/products/3/price
```

### Body:

```json
{
  "price": 1299
}
```

---

# 🧠 Key Concepts Used

* Express routing
* Route parameters (`req.params`)
* Request body parsing (`express.json()`)
* Array methods:

  * `find()`
  * `filter()`
  * `findIndex()`
* Proper HTTP status codes
* CORS middleware
* In-memory data handling

---

# 🌐 Deployment

You can deploy this API on:

* Render
* Railway
* Cyclic
* Any Node.js hosting platform

Make sure:

* No localhost references
* All routes work publicly

---

# 📬 Submission Checklist

* ✅ GitHub repository link
* ✅ Clean folder structure
* ✅ Proper README file
* ✅ Postman documentation link
* ✅ Render deployment link
* ✅ All 7 routes working
