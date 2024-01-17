const express = require('express');
const { createDB, createTable, createList } = require('../controllers/todoController');
const router = express.Router();

//ROUTES
router.get('/create/database', createDB);
router.get('/create/table', createTable);
router.get('/create/list', createList);

module.exports = router;