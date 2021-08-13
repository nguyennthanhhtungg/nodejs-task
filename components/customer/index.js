const express = require('express');
const router = express.Router();
const customersController = require('./customersController');

router.get('/', customersController.getAll);

module.exports = router;
