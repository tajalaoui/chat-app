const mongoose = require('mongoose')

const messages = new mongoose.Schema(
  {
    message: {
      type: String,
    },
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    receiver: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: { createdAt: true, updatedAt: false } }
)

const Messages = mongoose.model('messages', messages)

module.exports = Messages
