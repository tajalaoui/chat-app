const { ObjectID } = require('mongodb')
const mongoose = require('mongoose')

const profileSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  descreption: {
    type: String,
  },
})

const Profile = mongoose.model('Profile', profileSchema)

module.exports = Profile
