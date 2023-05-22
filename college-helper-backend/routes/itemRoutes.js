const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');

// Route for creating a new item
router.post('/', itemController.createItem);

// Route for getting all items
router.get('/', itemController.getAllItems);

// Add more routes for updating, deleting, or getting specific items as needed

module.exports = router;
