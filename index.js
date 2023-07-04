require('dotenv').config();
const express = require('express');
const mysql = require('mysql');

const app = express();
const PORT = process.env.PORT;
const DB_HOST = process.env.DB_HOST;
const DB_DATABASE = process.env.DB_DATABASE;
const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;

// Connection to MySQL database
const db = mysql.createConnection({
  user: DB_USERNAME,
  password: DB_PASSWORD,
  host: DB_HOST,
  database: DB_DATABASE,
});

app.use(express.json()); // Parse JSON request bodies

app.get('/', (req, res) => {
  console.log('h1');
  res.send('Hello, World!');
});

// Add new employee to the database
app.post('/employees', function (req, res) {
  let newEmployee = { ...req.body };
  // console.log("req");

  db.query("INSERT INTO employees SET ?", newEmployee, (error, result) => {
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

  db.query("SELECT * FROM employees WHERE id = ?", employeeId, (error, result) => {
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

app.listen(PORT, function () {
  console.log('Restful API is running on PORT', PORT);
});
