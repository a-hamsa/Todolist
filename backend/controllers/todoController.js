const db = require("../db/database");

//CREATE DB
exports.createDB = (req, res) => {
    let q = 'CREATE DATABASE todolist';
    db.query(q, (err, result) =>{
        if (err) throw err;
        return res.status(201).json("DB Created");
    });
}


// CREATE TABEL
exports.createTable = (req, res) => {
    let q = 'CREATE TABLE todos(id int AUTO_INCREMENT, firstname VARCHAR(255), lastname VARCHAR(255), PRIMARY KEY(id))';
    db.query(q, (err, result) => {
        if (err) throw err;
        return res.status(201).json("TABLE CREATED")
    });
}

//CREATE LIST
exports.createList = (req, res) => {
    const q = "INSERT INTO todos SET ?";

    const { firstName, lastName } = req.body;

    db.query(q, {firstName, lastName}, (err, result) => {
        if (err) return res.json(err);
        return res.status(200).json(result);
    });
}