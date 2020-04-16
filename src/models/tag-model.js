const mongoose = require('mongoose');

const tag = new mongoose.Schema({
  consumerId: { type: String, required: false },
  key: { type: String, required: false },
  value: { type: String, required: false },
})

module.exports = mongoose.model('tags', tag);