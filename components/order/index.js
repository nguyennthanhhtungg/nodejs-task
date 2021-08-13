const express = require('express');
const router = express.Router();
const ordersController = require('./ordersController');

router.get('/', ordersController.getAll);

module.exports = router;
