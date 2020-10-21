const express = require('express')
const router = new express.Router()

// * Db model
const User = require('../model/user')

router.post('/register', async (req, res) => {
  const { email, username } = req.body

  try {
    const user = new User(req.body)

    // TODO Add username to checkDuplication()
    await User.checkDuplication(email)

    await user.save()

    const token = await user.generateAuthToken()

    const { id, username } = user

    // * I removed avatar
    res.status(200).json({ id, token, username })
  } catch (e) {
    console.log(e)
    res.status(400).json({ error: e })
  }
})

router.post('/login', async (req, res) => {
  const { email, password } = req.body

  try {
    const user = await User.findByCredentials(email, password)

    const token = await user.generateAuthToken()

    const { id, username } = user

    // * I removed avatar
    res.status(200).json({ id, token, username })
  } catch (e) {
    res.status(400).json({ error: e })
  }
})

module.exports = router
