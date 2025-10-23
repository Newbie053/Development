const express = require("express");
const app = express();

// Middleware: allows JSON in request body
app.use(express.json());

// Temporary in-memory database
let users = [
  { id: 1, name: "Dipto", role: "Admin" },
  { id: 2, name: "Jane", role: "User" }
];

// 1️⃣ GET - Read all users
app.get("/api/users", (req, res) => {
  res.json(users);
});

// 2️⃣ GET - Read one user
app.get("/api/users/:id", (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ message: "User not found" });
  res.json(user);
});

// 3️⃣ POST - Create new user
app.post("/api/users", (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name,
    role: req.body.role
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

// 4️⃣ PUT - Update user
app.put("/api/users/:id", (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ message: "User not found" });
  user.name = req.body.name;
  user.role = req.body.role;
  res.json(user);
});

// 5️⃣ DELETE - Remove user
app.delete("/api/users/:id", (req, res) => {
  users = users.filter(u => u.id !== parseInt(req.params.id));
  res.json({ message: "User deleted" });
});

// Start server
app.listen(3000, () => console.log("Server running on port 3000"));
