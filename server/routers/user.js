const express = require('express')
const router = new express.Router()
const bodyParser = require('body-parser')
const User = require('../model/user')

router.use(bodyParser.json())

const handleErrors = (error) => {
  // Extracting properties from errors object values.
  Object.values(error.errors).forEach(({ properties }) => {
    const { message } = properties
    console.log(message)
    // It does extract the errors but not return it.
    return message
  })
}

router.post('/register', async (req, res) => {
  try {
    const user = new User(req.body)
    await User.checkDuplicateEmail(req.body.email)

    await user.save()

    const token = await user.generateAuthToken()

    const { id } = user

    res.status(200).json({ id, token })
  } catch (e) {
    const errors = handleErrors(e)
    res.status(400).json({ error: errors })
  }
})

router.post('/login', async (req, res) => {
  const { email, password } = req.body

  try {
    const user = await User.findByCredentials(email, password)

    const token = await user.generateAuthToken()

    const { id } = user

    res.status(200).json({ id, token })
  } catch (e) {
    const errors = handleErrors(e)
    res.status(400).json(errors)
  }
})

router.patch('/saveprofileinfo', async (req, res) => {
  try {
    console.log(req.body)
  } catch (e) {
    res.status(400).json(e)
  }
})

module.exports = router
