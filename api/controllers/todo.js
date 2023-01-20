const path = require("path");
const fs = require("fs");
const todosPath = path.join(__dirname, "..", "models", "todos.json");

const readTodos = () => {
  return JSON.parse(fs.readFileSync(todosPath, "utf8"));
};

const updateTodos = (todos, newTodo) => {
  try {
    fs.writeFileSync(todosPath, JSON.stringify(todos, null, 4), "utf8");
    return newTodo;
  } catch (err) {
    return null;
  }
};

const addNewTodo = (todo, userId) => {
  let todos = readTodos();
  let newTodo = { ...todo, id: todos.maxId + 1 };
  todos.maxId = newTodo.id;
  todos[`${userId}`].push(newTodo);
  return updateTodos(todos, newTodo);
};

const editTodo = (todo, userId) => {
  let todos = readTodos();
  todos[`${userId}`] = todos[`${userId}`].map((t) =>
    t.id === todo.id ? todo : t
  );
  return updateTodos(todos, todo);
};

const deleteTodo = (todoId, userId) => {
  let todos = readTodos();
  todos[`${userId}`] = todos[`${userId}`].filter((t) => t.id !== todoId);
  return updateTodos(todos, todoId);
};

exports.getTodos = async (req, res) => {
  try {
    const todos = readTodos();
    res.json({ todos: todos[`${req.user.id}`] });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createTodo = async (req, res) => {
  try {
    const { title, description } = req.body;
    const todo = addNewTodo({ title, description }, req.user.id);
    if (!todo) {
      return res.status(400).json({ msg: "error adding new todo" });
    }
    res.json({ todo });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

exports.updateTodo = async (req, res) => {
  const id = Number(req.params.id);
  const { description, title } = req.body;
  try {
    const todo = editTodo({ title, description, id }, req.user.id);
    if (!todo) {
      return res.status(400).json({ msg: "error editing todo" });
    }
    res.json({ todo });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteTodo = async (req, res) => {
  const todoId = Number(req.params.id);
  try {
    const todo = deleteTodo(todoId, req.user.id);
    if (!todo) {
      return res.status(400).json({ msg: "error deleting todo" });
    }
    res.json({ todoId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
