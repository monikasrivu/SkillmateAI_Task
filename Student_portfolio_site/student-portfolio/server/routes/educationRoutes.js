const express = require('express');
const router = express.Router();
const Education = require('../models/Education');

// POST: Add new education entry
router.post('/', async (req, res) => {
  try {
    const newEducation = new Education(req.body);
    const saved = await newEducation.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET: Fetch all education entries
router.get('/', async (req, res) => {
  try {
    const educationEntries = await Education.find().sort({ createdAt: -1 });
    res.json(educationEntries);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
