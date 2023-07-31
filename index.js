require('dotenv').config();
const express = require('express');
const mysql = require('mysql');

const app = express();
const PORT = process.env.PORT;
const DB_HOST = process.env.DB_HOST;
const DB_DATABASE = process.env.DB_DATABASE;
const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;

// Connection to MySQL database with automatic reconnection enabled
const db = mysql.createConnection({
  user: DB_USERNAME,
  password: DB_PASSWORD,
  host: DB_HOST,
  database: DB_DATABASE,
  multipleStatements: true, // To allow multiple statements in a single query
  reconnect: true, // Enable automatic reconnection on connection loss
});

// Event listener for MySQL connection error
db.on('error', (err) => {
  console.error('MySQL connection error:', err.message);
  if (err.code === 'PROTOCOL_CONNECTION_LOST') {
    // Connection lost, attempt to reconnect
    db.connect((reconnectErr) => {
      if (reconnectErr) {
        console.error('MySQL reconnection error:', reconnectErr.message);
      } else {
        console.log('---MYSQL RECONNECTED---');
      }
    });
  }
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('---MYSQL CONNECTED---');
});

app.use(express.json()); // Parse JSON request bodies

app.get('/', (req, res) => {
  console.log('h1');
  res.send('Hello, World!');
});

// Add new employee to the database
app.post('/todoCreate', function (req, res) {
  let newtodo = { ...req.body };
  newtodo.createdAt = new Date();
  // console.log("req");

  db.query("INSERT INTO todo_list SET ?", newtodo, (error, result) => {
    if (error) {
      console.log('error', error);
      return res.status(500).json({ status: "ERROR", error });
    }

    return res.json({ status: "SUCCESS" });
  });
});

// Get single employee by id from the database
app.get('/employees/details/:id', function (req, res) {
  const employeeId = req.params.id;

  db.query("SELECT * FROM todo_list WHERE id = ?", employeeId, (error, result) => {
    if (error) {
      console.log('error', error);
      return res.status(500).json({ status: "ERROR", error });
    }

    return res.json({ status: "SUCCESS", employee: result });
  });
});

// Update single employee by id from the database
app.put('/employees/update/:id', function (req, res) {
  const employeeId = req.params.id;
  const updatedEmployee = { ...req.body };

  db.query("UPDATE employees SET ? WHERE id = ?", [updatedEmployee, employeeId], (error, result) => {
    if (error) {
      console.log('error', error);
      return res.status(500).json({ status: "ERROR", error });
    }

    return res.json({ status: "SUCCESS" });
  });
});

// Delete single employee by id from the database
app.delete('/employees/delete/:id', function (req, res) {
  const employeeId = req.params.id;

  db.query("DELETE FROM employees WHERE id = ?", employeeId, (error, result) => {
    if (error) {
      console.log('error', error);
      return res.status(500).json({ status: "ERROR", error });
    }

    return res.json({ status: "SUCCESS" });
  });
});

// Get all todo_list records from the database
app.get('/todoListAll', function (req, res) {
  db.query("SELECT * FROM todo_list", (error, result) => {
    if (error) {
      console.log('error', error);
      return res.status(500).json({ status: "ERROR", error });
    }

    return res.json({ status: "SUCCESS", todoList: result });
  });
});

// Get today's todo_list records from the database
app.get('/todoList', function (req, res) {
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Set the time to 00:00:00.000

  db.query("SELECT * FROM todo_list WHERE todoDate = ?", [today], (error, result) => {
    if (error) {
      console.log('error', error);
      return res.status(500).json({ status: "ERROR", error });
    }

    return res.json({ status: "SUCCESS", todoList: result });
  });
});


app.listen(PORT, function () {
  console.log('Restful API is running on PORT', PORT);
});
