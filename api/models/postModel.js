const mongoose = require('mongoose')

let schema = new mongoose.Schema({
  title: {type: String, required: true},
  body: {type: String, required: true},
  date: {type: Date, required: true},
  tags: [String]
})

module.exports = mongoose.model('Post', schema)
