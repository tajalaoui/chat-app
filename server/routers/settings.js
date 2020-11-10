const express = require('express')
const router = new express.Router()
const User = require('../model/user')
const auth = require('../middleware/auth')

router.get('/settings', auth, async (req, res) => {
  const { userId } = req.query
  console.log(`user id: ${userId}`)

  try {
    const settings = await User.findById('5faa58920f950b00675ff3ab')

    const { username, email, password } = settings

    res.json({ username, email, password })
  } catch (e) {
    res.status(400).json({ error: e.message })
  }
})

module.exports = router
