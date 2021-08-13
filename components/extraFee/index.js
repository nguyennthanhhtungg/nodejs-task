const express = require('express');
const router = express.Router();
const extraFeesController = require('./extraFeesController');

router.get('/', extraFeesController.getAll);

module.exports = router;
