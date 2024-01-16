const express = require('express');
const { createDB } = require('../controllers/todoController');
const router = express.Router();

//ROUTES
router.get('/create/database', createDB)

module.exports = router;