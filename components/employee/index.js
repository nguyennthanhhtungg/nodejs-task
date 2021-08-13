const express = require('express');
const router = express.Router();
const employeesController = require('./employeesController');

router.get('/', employeesController.getAll);

module.exports = router;
