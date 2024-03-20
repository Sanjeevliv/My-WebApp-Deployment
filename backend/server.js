// server.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

let todos = [];

app.get('/', (req, res) => {
  res.send('Welcome to the To-Do List App!');
});

app.get('/todos', (req, res) => {
  res.json(todos);
});

app.post('/todos', (req, res) => {
  const { task } = req.body;
  todos.push({ id: todos.length + 1, task });
  res.sendStatus(201);
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
