const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 4000;

/* =========================
   Middleware (Order Matters)
========================= */
app.use(cors());
app.use(express.json());

/* =========================
   In-Memory JSON Database
========================= */
const students = [
  { id: 1, name: "Aarav Sharma", branch: "CSE", semester: 8, cgpa: 9.3 },
  { id: 2, name: "Ishita Verma", branch: "IT", semester: 7, cgpa: 8.9 },
  { id: 3, name: "Rohan Kulkarni", branch: "ECE", semester: 6, cgpa: 8.4 },
  { id: 4, name: "Meera Iyer", branch: "CSE", semester: 8, cgpa: 9.1 },
  { id: 5, name: "Kunal Deshmukh", branch: "IT", semester: 5, cgpa: 7.8 },
  { id: 6, name: "Ananya Reddy", branch: "CSE", semester: 6, cgpa: 8.7 },
  { id: 7, name: "Vikram Patil", branch: "ECE", semester: 7, cgpa: 8.2 },
  { id: 8, name: "Priyanka Nair", branch: "AI", semester: 4, cgpa: 8.8 },
  { id: 9, name: "Harsh Mehta", branch: "Data Science", semester: 5, cgpa: 8.0 },
  { id: 10, name: "Neha Gupta", branch: "CSE", semester: 6, cgpa: 7.9 }
];

/* =========================
   ROUTES
========================= */

/* 1️⃣ GET /students
   Return all students
*/
app.get("/students", (req, res) => {
  return res.status(200).json(students);
});

/* 2️⃣ GET /students/topper
   Return highest CGPA student
*/
app.get("/students/topper", (req, res) => {
  if (students.length === 0) {
    return res.status(404).json({ message: "No students found" });
  }

  const topper = students.reduce((prev, current) =>
    current.cgpa > prev.cgpa ? current : prev
  );

  return res.status(200).json(topper);
});

/* 3️⃣ GET /students/average
   Return average CGPA
*/
app.get("/students/average", (req, res) => {
  if (students.length === 0) {
    return res.status(404).json({ message: "No students available" });
  }

  const total = students.reduce((sum, student) => sum + student.cgpa, 0);
  const average = (total / students.length).toFixed(2);

  return res.status(200).json({
    averageCGPA: Number(average)
  });
});

/* 4️⃣ GET /students/count
   Return total student count
*/
app.get("/students/count", (req, res) => {
  return res.status(200).json({
    totalStudents: students.length
  });
});

/* 5️⃣ GET /students/:id
   Return student by ID
*/
app.get("/students/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const student = students.find(s => s.id === id);

  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }

  return res.status(200).json(student);
});

/* 6️⃣ GET /students/branch/:branchName
   Return students by branch
   Choice: Return empty array instead of 404
   Reason: REST principle → filtering should not error if resource exists but no match
*/
app.get("/students/branch/:branchName", (req, res) => {
  const branchParam = req.params.branchName.toLowerCase();

  const filteredStudents = students.filter(
    s => s.branch.toLowerCase() === branchParam
  );

  return res.status(200).json(filteredStudents);
});
app.get("/students/semester/:semester", (req, res) => {
  const semesterParam = parseInt(req.params.semester, 10);

  const filteredStudents = students.filter(
    s => s.semester === semesterParam
  );

  return res.status(200).json(filteredStudents);
});

/* =========================
   404 Handler (Optional but Professional)
========================= */
app.use((req, res) => {
  return res.status(404).json({
    message: "Route not found"
  });
});

/* =========================
   Server Start
========================= */
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});