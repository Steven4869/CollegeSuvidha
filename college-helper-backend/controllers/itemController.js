const Item = require('../models/Item');

// Controller function to handle creating a new item
const createItem = async (req, res) => {
  try {
    const newItem = new Item(req.body);
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create item' });
  }
};

// Controller function to handle getting all items
const getAllItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve items' });
  }
};

// Add more controller functions for updating, deleting, or getting specific items as needed

module.exports = {
  createItem,
  getAllItems,
  // Export other controller functions here
};
