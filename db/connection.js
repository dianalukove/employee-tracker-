const mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      //MySQL username,
      user: 'root',
      //MySQL password
      password: 'mZ0$1vscthXs',
      database: 'employeeTracker'
    },
    console.log('Connected to the employeeTracker database.')
);

module.exports = db;