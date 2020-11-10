const mongoose = require('mongoose')

const profile = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    question: { type: mongoose.Schema.Types.ObjectId, ref: 'Question' },
    answer: {
      type: String,
    },
  },
  { timestamps: true }
)
