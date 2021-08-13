const express = require('express');
const router = express.Router();
const suppliersController = require('./suppliersController');

router.get('/', suppliersController.getAll);

module.exports = router;
