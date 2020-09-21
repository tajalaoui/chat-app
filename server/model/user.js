const mongoose = require('mongoose')
const validator = require('validator')
const { model } = require('mongoose')

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    // unique: true,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    // unique: true,
    required: true,
    trim: true,
    lowercase: true,
    // validate(value) {
    //   if (!validator.isEmail(value)) {
    //     throw new Error('Email is invalid')
    //   }
    // },
  },
  age: {
    type: Number,
    default: 0,
    // validate(value) {
    //   if (value < 0) {
    //     throw new Error('Age must be a positive number')
    //   }
    // },
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 7,
    // validate(value) {
    //   if (value.toLowerCase().includes('password')) {
    //     throw new Error("password shouldn't containt the word: password")
    //   }
    // },
  },
  country: {
    type: String,
    required: true,
    trim: true,
  },
  birthday: {
    type: String,
    // required: true,
    trim: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
    trim: true,
  },
  // tokens: [
  //   {
  //     token: {
  //       type: String,
  //       required: true,
  //     },
  //   },
  // ],
})

const User = mongoose.model('User', userSchema)

module.exports = User
