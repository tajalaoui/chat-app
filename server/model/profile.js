const mongoose = require('mongoose')

const profile = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  test: {
    type: String,
    default: 'Hello World',
  },
  profileQuestions: [
    {
      _id: false,
      title: {
        type: String,
        default: 'My self-summary',
      },
      subtitle: {
        type: String,
      },
    },
    {
      _id: false,
      title: {
        type: String,
        default: 'I spend a lot of time thinking about',
      },
      subtitle: {
        type: String,
      },
    },
    {
      _id: false,
      title: {
        type: String,
        default: 'Skills i want to learn',
      },
      subtitle: {
        type: String,
      },
    },
    {
      _id: false,
      title: {
        type: String,
        default: 'things i could never live without',
      },
      subtitle: {
        type: String,
      },
    },
    {
      _id: false,
      title: {
        type: String,
        default: 'My golden rule',
      },
      subtitle: {
        type: String,
      },
    },
    {
      _id: false,
      title: {
        type: String,
        default: 'My next big trip',
      },
      subtitle: {
        type: String,
      },
    },
  ],
})

const Profile = mongoose.model('Profile', profile)

module.exports = Profile
