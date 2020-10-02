const express = require('express')
const router = new express.Router()
// TODO Remove body
const bodyParser = require('body-parser')

// * Db model
const User = require('../model/user')

router.use(bodyParser.json())

router.post('/register', async (req, res) => {
  const { email, username } = req.body

  try {
    const user = new User(req.body)
    await User.checkDuplication(email)

    await user.save()

    const token = await user.generateAuthToken()

    const { id } = user

    res.status(200).json({ id, token })
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

    const { id } = user

    res.status(200).json({ id, token })
  } catch (e) {
    res.status(400).json({ error: e })
  }
})

module.exports = router
