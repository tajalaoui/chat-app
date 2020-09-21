const express = require('express')
const router = new express.Router()
const jwt = require('jsonwebtoken')
// const bodyParser = require('body-parser')
const User = require('../model/user')

// router.use(bodyParser.json())

router.post('/server/register', async (req, res) => {
  // if (req.body) {
  // const user = {
  //   name: req.body.name,
  //   email: req.body.email,
  //   password: req.body.password,
  // }

  try {
    const user = new User(req.body)
    await user.save()
  } catch (e) {
    console.log(e)
  }

  // const token = await jwt.sign({}, 'the_secret_key')
  // res.json({
  //   token,
  //   email: user.email,
  //   name: user.name,
  // })
  // } else {
  // res.sendStatus(401)
  // }
})

router.post('/server/login', (req, res) => {
  if (req.body) {
    const token = jwt.sign({ user }, 'the_secret_key')
    res.json({
      token,
      email: req.body.email,
      name: req.body.name,
    })
  }
})
module.exports = router
