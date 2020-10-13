const { ObjectID } = require('mongodb')
const mongoose = require('mongoose')

const profile = new mongoose.Schema({
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

const Profile = mongoose.model('Profile', profile)

module.exports = Profile


