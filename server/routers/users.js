const express = require('express')
const router = new express.Router()

// * Db model
const User = require('../model/user')

router.get('/users', async (req, res) => {
  try {
    const users = await User.find()
    res.send(users)
  } catch (e) {
    res.status(400).json({ error: e.message })
  }
})

module.exports = router
