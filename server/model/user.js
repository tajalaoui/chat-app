const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    min: 5,
    max: 11,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('Email is invalid')
      }
    },
  },
  birthday: {
    type: Number,
    required: true,
    // validate(value) {
    //   if (value <= 15) {
    //     throw new Error('Age must be equal or greather than 15')
    //   }
    // },
  },
  gender: {
    type: String,
  },
  password: {
    type: String,
    required: true,
    trim: true,
    min: 5,
    max: 17,
  },
  country: {
    type: String,
    required: true,
  },
  birthday: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  avatar: {
    // type: String,
    type: Buffer,
    // default: false,
  },
  profileData: [
    {
      _id: false,
      title: String,
      subtitle: String,
    },
  ],
})

// Generating token after registering OR login
userSchema.methods.generateAuthToken = function () {
  const user = this
  const token = jwt.sign({ _id: user._id.toString() }, 'jwt_secret')

  return token
}

// TODO add to async functions try and catch blocks
userSchema.statics.findByCredentials = async (userEmail, userPassword) => {
  const errorMessage =
    "The email address or password that you've entered doesn't match any account."

  const user = await User.findOne({ email: userEmail })

  if (!user) {
    throw new Error(errorMessage)
  }

  const isMatch = await bcrypt.compare(userPassword, user.password)

  if (!isMatch) {
    throw new Error(errorMessage)
  }

  return user
}

userSchema.statics.checkDuplication = async (givenEmail) => {
  const user = await User.findOne({ email: givenEmail })

  if (user) {
    throw new Error('Duplicate email')
  }

  return user
}

// userSchema.statics.checkDuplication = async (userEmail, userUsername) => {
//   const mail = await User.findOne({ email: userEmail })
//   const username = await User.findOne({ username: userUsername })

//   if (mail || username) {
//     throw new Error('Duplication detected')
//   }

//   return user
// }

// * Middlewear to hash password before saving or updating
// Use es5 function since we need (this).
userSchema.pre('save', async function (next) {
  const user = this

  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 8)
  }

  next()
})

// * Schema is the blueprint & model make it possible to use it in our code
// Since whenever we want to use db we access through the model
const User = mongoose.model('User', userSchema)

module.exports = User
