// server.js
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json()); // parse JSON body

// In-memory store
let books = [
  { id: 1, title: '1984', author: 'Orwell' },
  { id: 2, title: '1985', author: 'alpha' },
  { id: 3, title: '1988', author: 'beta' },
  { id: 4, title: '1999', author: 'gama' }
];
let nextId = 5;
let employees = [
  { id: 1, name: 'Alice', salary: 50000 },
  { id: 2, name: 'Bob', salary: 60000 },
  { id: 3, name: 'Charlie', salary: 55000 }
];
let nextEmployeeId = 4;

// GET /books  -> all books
app.get('/books', (req, res) => {
  res.json(books);
});

// GET /books/:id -> single book or 404
app.get('/books/:id', (req, res) => {
  const id = Number(req.params.id);
  const book = books.find(b => b.id === id);
  if (!book) return res.status(404).json({ error: 'Book not found' });
  res.json(book);
});

// POST /books -> create a book
app.post('/books', (req, res) => {
  const { title, author } = req.body;
  if (!title || !author) {
    return res.status(400).json({ error: 'title and author required' });
  }
  const book = { id: nextId++, title, author };
  books.push(book);
  res.status(201).json(book);
});

// DELETE /books/:id -> delete a book
app.delete('/books/:id', (req, res) => {
  const id = Number(req.params.id);
  const idx = books.findIndex(b => b.id === id);
  if (idx === -1) return res.status(404).json({ error: 'Book not found' });
  books.splice(idx, 1);
  res.status(204).end(); // 204 No Content
});


app.get('/employees', (req, res) => {
  res.json(employees);
});

app.get('/employees/:id', (req, res) => {
  const id = Number(req.params.id);
  const employee = employees.find(e => e.id === id);
  if (!employee) return res.status(404).json({ error: 'Employee not found' });
  res.json(employee);
});

app.post('/employees', (req, res) => {
  const { name, salary } = req.body;
  if (!name || !salary) {
    return res.status(400).json({ error: 'name and salary required' });
  }
  const employee = { id: nextEmployeeId++, name, salary };
  employees.push(employee);
  res.status(201).json(employee);
});

app.delete('/employees/:id', (req, res) => {
  const id = Number(req.params.id);
  const idx = employees.findIndex(e => e.id === id);
  if (idx === -1) return res.status(404).json({ error: 'Employee not found' });
  employees.splice(idx, 1);
  res.status(204).end();
});



app.listen(PORT, () => {
  console.log(`Server listening: http://localhost:${PORT}`);
});
