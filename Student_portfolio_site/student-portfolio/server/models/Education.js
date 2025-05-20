// models/Education.js
const mongoose = require('mongoose');

const educationSchema = new mongoose.Schema({
  institution: String,
  degree: String,
  fieldOfStudy: String,
  startDate: Date,
  endDate: Date,
  description: String,
});

module.exports = mongoose.model('Education', educationSchema);
