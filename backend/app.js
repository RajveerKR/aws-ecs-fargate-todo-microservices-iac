const express = require("express");
const app = express();
app.use(express.json());

app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

let todos = [{ id: 1, task: "Learn Docker" }];

app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

app.get("/todos", (req, res) => {
  res.json(todos);
});

app.post("/todos", (req, res) => {
  const newTodo = {
    id: todos.length + 1,
    task: req.body.task || "New Task"
  };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
