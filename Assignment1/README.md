````markdown
# 🎓 Student CGPA API (Using In-Memory JSON Database)

## 📌 Project Title
Student CGPA REST API

---

## 🎯 Objective
To build a RESTful API using Express.js that manages student academic performance records stored in an in-memory JSON array.

The application:
- Uses only GET routes
- Includes static and dynamic routes
- Follows REST principles
- Returns proper HTTP status codes
- Does not use any external database

---

## 📚 Student Data (In-Memory JSON Database)

The following data is stored inside the application:

```json
[
  {
    "id": 1,
    "name": "Aarav Sharma",
    "branch": "CSE",
    "semester": 8,
    "cgpa": 9.3
  },
  {
    "id": 2,
    "name": "Ishita Verma",
    "branch": "IT",
    "semester": 7,
    "cgpa": 8.9
  },
  {
    "id": 3,
    "name": "Rohan Kulkarni",
    "branch": "ECE",
    "semester": 6,
    "cgpa": 8.4
  },
  {
    "id": 4,
    "name": "Meera Iyer",
    "branch": "CSE",
    "semester": 8,
    "cgpa": 9.1
  },
  {
    "id": 5,
    "name": "Kunal Deshmukh",
    "branch": "IT",
    "semester": 5,
    "cgpa": 7.8
  },
  {
    "id": 6,
    "name": "Ananya Reddy",
    "branch": "CSE",
    "semester": 6,
    "cgpa": 8.7
  },
  {
    "id": 7,
    "name": "Vikram Patil",
    "branch": "ECE",
    "semester": 7,
    "cgpa": 8.2
  },
  {
    "id": 8,
    "name": "Priyanka Nair",
    "branch": "AI",
    "semester": 4,
    "cgpa": 8.8
  },
  {
    "id": 9,
    "name": "Harsh Mehta",
    "branch": "Data Science",
    "semester": 5,
    "cgpa": 8.0
  },
  {
    "id": 10,
    "name": "Neha Gupta",
    "branch": "CSE",
    "semester": 6,
    "cgpa": 7.9
  }
]
````

---

## 🚀 List of Implemented Routes

### 1️⃣ GET /students

Returns all students.

* Status Code: 200

---

### 2️⃣ GET /students/topper

Returns the student with the highest CGPA.

* Status Code: 200
* If no students exist → 404

---

### 3️⃣ GET /students/average

Returns average CGPA of all students.

Example Response:

```json
{
  "averageCGPA": 8.41
}
```

* Status Code: 200

---

### 4️⃣ GET /students/count

Returns total number of students.

Example Response:

```json
{
  "totalStudents": 10
}
```

* Status Code: 200

---

### 5️⃣ GET /students/:id

Returns a student by ID.

Example:

```
/students/3
```

* If found → 200
* If not found → 404

---

### 6️⃣ GET /students/branch/:branchName

Returns students belonging to a specific branch.

Example:

```
/students/branch/CSE
```

* Status Code: 200
* Returns empty array if no students match

---

## 🌐 Sample API URLs (Deployed)

Base URL:

```
https://renderassignment-3ijt.onrender.com
```

Test URLs:

```
https://renderassignment-3ijt.onrender.com/students
https://renderassignment-3ijt.onrender.com/students/topper
https://renderassignment-3ijt.onrender.com/students/average
https://renderassignment-3ijt.onrender.com/students/count
https://renderassignment-3ijt.onrender.com/students/1
https://renderassignment-3ijt.onrender.com/students/branch/CSE
```

---

## 💻 Steps to Run Locally

1. Clone the repository:

```
git clone https://github.com/TrikamDevasi/renderAssignment.git
```

2. Navigate to the project folder:

```
cd renderAssignment
```

3. Install dependencies:

```
npm install
```

4. Start the server:

```
npm start
```

Server runs at:

```
http://localhost:4000
```

---

## 📁 Repository Structure

```
renderAssignment/
│
├── index.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

---

## ☁️ Deployed Link

```
https://renderassignment-3ijt.onrender.com
```

---

## 📎 GitHub Repository

```
https://github.com/TrikamDevasi/renderAssignment
```

---

## 📘 Postman Documentation

```
https://documenter.getpostman.com/view/50840761/2sBXcGCeNx
```

---

## 🧠 Learning Outcomes

* Designed RESTful GET routes
* Implemented dynamic routing using req.params
* Performed filtering and aggregation logic
* Used proper HTTP status codes
* Deployed backend API on Render
* Documented API professionally

