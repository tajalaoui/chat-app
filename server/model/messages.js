const { ObjectID } = require('mongodb')
const mongoose = require('mongoose')

const messages = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    // required: true,
  },
  //   messages: [],
  timestamps: true,
})

const Messages = mongoose.model('messages', messages)

module.exports = Messages
