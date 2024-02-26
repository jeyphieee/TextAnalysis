const mongoose = require('mongoose');

const testSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  sentiment: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Test', testSchema);
