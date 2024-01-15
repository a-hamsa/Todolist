const mysql = require('mysql');

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "todolist"
})

//Open the MySQL connection
db.connect(error => {
    if (error) throw error;
    console.log("DB Connected");
});

module.exports = db;