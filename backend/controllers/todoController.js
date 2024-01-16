const db = require("../db/database");

//CREATE DB
exports.createDB = (req, res) => {
    let q = 'CREATE DATABASE todolist';
    db.query(q, (err, result) =>{
        if (err) throw err;
        return res.status(201).json("DB Created");
    });
}