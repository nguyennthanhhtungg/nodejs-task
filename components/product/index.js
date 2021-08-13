const express = require('express');
const router = express.Router();
const productsController = require('./productsController');

router.get('/', productsController.getAll);

module.exports = router;
