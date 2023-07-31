const express = require('express');
const db = require('../db/models');
const todo_list = db.todo_list;

const app = express();
const PORT = process.env.PORT;

app.use(express.json()); // Parse JSON request bodies

app.get('/', (req, res) => {
  console.log('h1');
  res.send('Hello, World!');
});

// Add new todo to the database
app.post('/todoCreate', async function (req, res) {
  try {
    let newTodo = { ...req.body };
    newTodo.createdAt = new Date();

    const createdTodo = await todo_list.create(newTodo);
    return res.json({ status: "SUCCESS", todo: createdTodo });
  } catch (error) {
    console.error('error', error);
    return res.status(500).json({ status: "ERROR", error });
  }
});

// Get single todo by id from the database
app.get('/todo/details/:id', async function (req, res) {
  try {
    const todoId = req.params.id;

    const todo = await todo_list.findOne({ where: { id: todoId } });
    if (!todo) {
      return res.status(404).json({ status: "ERROR", message: "Todo not found" });
    }

    return res.json({ status: "SUCCESS", todo: todo });
  } catch (error) {
    console.error('error', error);
    return res.status(500).json({ status: "ERROR", error });
  }
});

// Update single todo by id in the database
app.put('/todo/update/:id', async function (req, res) {
  try {
    const todoId = req.params.id;
    const updatedTodo = { ...req.body };

    const [rowsUpdated, updatedTodos] = await todo_list.update(updatedTodo, { where: { id: todoId } });
    if (rowsUpdated === 0) {
      return res.status(404).json({ status: "ERROR", message: "Todo not found" });
    }

    return res.json({ status: "SUCCESS", updatedTodo: updatedTodos[0] });
  } catch (error) {
    console.error('error', error);
    return res.status(500).json({ status: "ERROR", error });
  }
});

// Delete single todo by id from the database
app.delete('/todo/delete/:id', async function (req, res) {
  try {
    const todoId = req.params.id;

    const deletedRowsCount = await todo_list.destroy({ where: { id: todoId } });
    if (deletedRowsCount === 0) {
      return res.status(404).json({ status: "ERROR", message: "Todo not found" });
    }

    return res.json({ status: "SUCCESS" });
  } catch (error) {
    console.error('error', error);
    return res.status(500).json({ status: "ERROR", error });
  }
});

// Get all todo_list records from the database
app.get('/todoListAll', async function (req, res) {
  try {
    const allTodos = await todo_list.findAll();
    return res.json({ status: "SUCCESS", todoList: allTodos });
  } catch (error) {
    console.error('error', error);
    return res.status(500).json({ status: "ERROR", error });
  }
});

// Get today's todo_list records from the database
app.get('/todoList', async function (req, res) {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Set the time to 00:00:00.000

    const todayTodos = await todo_list.findAll({ where: { todoDate: today } });
    return res.json({ status: "SUCCESS", todoList: todayTodos });
  } catch (error) {
    console.error('error', error);
    return res.status(500).json({ status: "ERROR", error });
  }
});

app.listen(PORT, function () {
  console.log('Restful API is running on PORT', PORT);
});
