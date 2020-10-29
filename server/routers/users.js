const express = require('express')
const router = new express.Router()
const User = require('../model/user')
const auth = require('../middleware/auth')

router.get('/users', auth, async (req, res) => {
  try {
    const users = await User.find()
    
    res.send(users)
  } catch (e) {
    console.log('🟥', e)
    res.status(400)//.json({ error: e.message })
  }
})

module.exports = router
