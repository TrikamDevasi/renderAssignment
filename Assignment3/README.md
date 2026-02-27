# 🗺️ State Statistics Management API

> A complete REST API built with **Express.js** to manage statistical data of Indian states using an in-memory JSON array.

[![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=flat-square&logo=node.js)](https://expressjs.com)
[![REST API](https://img.shields.io/badge/REST-API-blue?style=flat-square)]()
[![Deployed on Render](https://img.shields.io/badge/Deployed-Render-46E3B7?style=flat-square&logo=render)](https://your-render-link.onrender.com)

---

## 📌 Assignment Info

| Field | Details |
|---|---|
| Assignment | #3 |
| Topic | Full REST Implementation |
| Methods Covered | GET, POST, PUT, PATCH, DELETE |
| Total Routes | 13 |
| Database | None (In-Memory Array) |
| Auth | None |

---

## 🚀 Live Demo

🔗 **Render Deployment:** [https://your-render-link.onrender.com](https://your-render-link.onrender.com)

📮 **Postman Documentation:** [https://your-postman-link.postman.co](https://your-postman-link.postman.co)

---

## 📁 Project Structure

```
state-stats-api/
├── index.js          # Main server file with all routes
├── package.json      # Project dependencies
└── README.md         # Project documentation
```

---

## ⚙️ Setup & Installation

### Prerequisites

- Node.js v18+
- npm

### Steps

```bash
# 1. Clone the repository
git clone https://github.com/TrikamDevasi/renderAssignment.git

# 2. Navigate into the project
cd Assignment3

# 3. Install dependencies
npm install

# 4. Start the server
node index.js
```

Server runs at: `http://localhost:3000`

---

## 📦 Dependencies

```json
{
  "express": "^4.x",
  "cors": "^2.x"
}
```

Install with:

```bash
npm install express cors
```

---

## 🗃️ Data Structure

Each state object follows this schema:

```js
{
  id: 1,                    // Unique identifier (number)
  name: "Gujarat",          // State name (string)
  population: 63872399,     // Total population (number)
  literacyRate: 78.03,      // Literacy percentage (number)
  annualBudget: 243965,     // Annual budget in ₹ crores (number)
  gdp: 21000000             // State GDP in ₹ crores (number)
}
```

The API is pre-loaded with **28 Indian states**.

---

## 📋 API Routes

### 🔵 GET Routes

| # | Method | Endpoint | Description | Status |
|---|--------|----------|-------------|--------|
| 1 | GET | `/states` | Get all states | 200 |
| 2 | GET | `/states/:id` | Get state by ID | 200 / 404 |
| 3 | GET | `/states/highest-gdp` | Get state with highest GDP | 200 |

---

#### `GET /states`

Returns the complete list of all states.

**Response (200):**
```json
[
  { "id": 1, "name": "Andhra Pradesh", "population": 49386799, ... },
  { "id": 2, "name": "Arunachal Pradesh", ... }
]
```

---

#### `GET /states/:id`

Returns a single state by its ID.

**Example:** `GET /states/7`

**Response (200):**
```json
{
  "id": 7,
  "name": "Gujarat",
  "population": 63872399,
  "literacyRate": 78.03,
  "annualBudget": 243965,
  "gdp": 21000000
}
```

**Response (404):**
```json
{ "message": "State not found" }
```

---

#### `GET /states/highest-gdp`

Returns the state with the highest GDP using `reduce()`.

**Response (200):**
```json
{
  "id": 26,
  "name": "Uttar Pradesh",
  "population": 199812341,
  "literacyRate": 67.68,
  "annualBudget": 350000,
  "gdp": 25000000
}
```

---

### 🟢 POST Routes

| # | Method | Endpoint | Description | Status |
|---|--------|----------|-------------|--------|
| 4 | POST | `/states` | Add a new state | 201 |

---

#### `POST /states`

Adds a new state with an auto-generated ID.

**Request Body:**
```json
{
  "name": "New State",
  "population": 10000000,
  "literacyRate": 72.5,
  "annualBudget": 50000,
  "gdp": 3000000
}
```

**Response (201):**
```json
{
  "id": 29,
  "name": "New State",
  "population": 10000000,
  "literacyRate": 72.5,
  "annualBudget": 50000,
  "gdp": 3000000
}
```

---

### 🟡 PUT Routes

> PUT replaces the **entire resource** (except `id`).

| # | Method | Endpoint | Description | Status |
|---|--------|----------|-------------|--------|
| 5 | PUT | `/states/:id` | Replace entire state record | 200 / 404 |
| 6 | PUT | `/states/:id/budget` | Replace annual budget | 200 / 404 |
| 7 | PUT | `/states/:id/population` | Replace population | 200 / 404 |

---

#### `PUT /states/:id`

Replaces all fields (except `id`) of a state.

**Request Body:**
```json
{
  "name": "Gujarat",
  "population": 70000000,
  "literacyRate": 80.00,
  "annualBudget": 260000,
  "gdp": 22000000
}
```

**Response (200):** Updated state object

---

#### `PUT /states/:id/budget`

Replaces only the `annualBudget` field.

**Request Body:**
```json
{ "annualBudget": 260000 }
```

**Response (200):** Updated state object

---

#### `PUT /states/:id/population`

Replaces only the `population` field.

**Request Body:**
```json
{ "population": 70000000 }
```

**Response (200):** Updated state object

---

### 🟠 PATCH Routes

> PATCH performs a **partial update** — only provided fields are updated.

| # | Method | Endpoint | Description | Status |
|---|--------|----------|-------------|--------|
| 8 | PATCH | `/states/:id/literacy` | Update literacy rate only | 200 / 404 |
| 9 | PATCH | `/states/:id/gdp` | Update GDP only | 200 / 404 |
| 10 | PATCH | `/states/:id` | Update any provided fields | 200 / 404 |

---

#### `PATCH /states/:id/literacy`

**Request Body:**
```json
{ "literacyRate": 85.5 }
```

---

#### `PATCH /states/:id/gdp`

**Request Body:**
```json
{ "gdp": 25000000 }
```

---

#### `PATCH /states/:id`

Updates only the fields provided in the body.

**Request Body:**
```json
{ "annualBudget": 280000 }
```

**Response (200):**
```json
{
  "id": 7,
  "name": "Gujarat",
  "population": 63872399,
  "literacyRate": 78.03,
  "annualBudget": 280000,
  "gdp": 21000000
}
```

---

### 🔴 DELETE Routes

| # | Method | Endpoint | Description | Status |
|---|--------|----------|-------------|--------|
| 11 | DELETE | `/states/:id` | Delete state by ID | 204 / 404 |
| 12 | DELETE | `/states/name/:stateName` | Delete state by name (case-insensitive) | 200 / 404 |
| 13 | DELETE | `/states/low-literacy/:percentage` | Delete all states below literacy % | 200 |

---

#### `DELETE /states/:id`

Removes a state by ID.

- **Success:** Status `204` (No Content)
- **Not Found:** Status `404` with `{ "message": "State not found" }`

---

#### `DELETE /states/name/:stateName`

Deletes a state by name. Case-insensitive.

**Example:** `DELETE /states/name/gujarat`

**Response (200):** Deleted state object

---

#### `DELETE /states/low-literacy/:percentage`

Deletes all states where `literacyRate` is less than the given percentage.

**Example:** `DELETE /states/low-literacy/70`

**Response (200):**
```json
{ "deletedCount": 3 }
```

---

## 📊 HTTP Status Codes Used

| Code | Meaning | Used When |
|------|---------|-----------|
| 200 | OK | Successful GET, PUT, PATCH, DELETE |
| 201 | Created | Successful POST |
| 204 | No Content | Successful DELETE by ID |
| 404 | Not Found | State not found by ID or name |

---

## 🔑 Key Concepts Demonstrated

- ✅ REST architecture and naming conventions
- ✅ Correct use of all HTTP methods
- ✅ Dynamic route parameters (`req.params`)
- ✅ Request body parsing (`req.body`)
- ✅ Difference between **PUT** (full replace) and **PATCH** (partial update)
- ✅ Array methods: `find()`, `filter()`, `reduce()`, `findIndex()`
- ✅ Auto ID generation
- ✅ Proper HTTP status codes
- ✅ CORS enabled for cross-origin access

---

## 📮 Postman Collection

All 13 routes are documented with sample requests and responses.

🔗 **Postman Docs:** https://documenter.getpostman.com/view/50840761/2sBXcHhySD

---

## 🌐 Deployment

This API is deployed publicly on **Render**.

🔗 **Base URL:** `https://assignment3-l7su.onrender.com`

> ⚠️ Note: Render free tier may spin down after inactivity. First request may take ~30 seconds.

---

## 👨‍💻 Author

**Trikam Devasi**
- GitHub: [@TrikamDevasi](https://github.com/TrikamDevasi)

