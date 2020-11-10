const express = require('express')
const router = new express.Router()
const Message = require('../model/messages')
const auth = require('../middleware/auth')

router.post('/message', auth, async (req, res) => {
  try {
    const message = await Message.create({
      message: 'hello world',
      sender: '5faaa8f0705584027b54e26d',
      receiver: '5faaa9cd233f6302a181d550',
    })

    res.json({ message })
  } catch (e) {
    res.status(400).json({ error: e.message })
  }
})

module.exports = router
