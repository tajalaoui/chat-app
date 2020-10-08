const { ObjectID } = require('mongodb')
const mongoose = require('mongoose')

const profile = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    // required: true,
  },
  // profileData: [],
  title: {
    type: String,
    trim: true,
  },
  subtitle: {
    type: String,
    trim: true,
  },
})

// const Profile = mongoose.model('profile', profile)

// module.exports = Profile

module.exports = profile
