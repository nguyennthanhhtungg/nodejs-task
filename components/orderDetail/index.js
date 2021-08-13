const express = require('express');
const router = express.Router();
const orderDetailsController = require('./orderDetailsController');

router.get('/', orderDetailsController.getAll);

module.exports = router;
