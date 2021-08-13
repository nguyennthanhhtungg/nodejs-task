const express = require('express');
const router = express.Router();
const categoriesController = require('./categoriesController');

router.get('/', categoriesController.getAll);

module.exports = router;
