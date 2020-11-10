const mongoose = require('mongoose')

const question = new mongoose.Schema({
  _id: {},
  question: { 
    type: String,
  },
  isMendatory: {
    type: Boolean,
    default: true,
  },
})
