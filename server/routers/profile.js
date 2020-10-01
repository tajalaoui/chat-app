const express = require('express')
const router = new express.Router()
const bodyParser = require('body-parser')

router.use(bodyParser.json())

// * Db model
const Profile = require('../model/profile')

router.patch('/saveprofileinfo', (req, res) => {
  console.log(req.body)
  //   const profile = new Profile({
  //     ...req.body,
  //     // owner: req.body.userId,
  //   })
  //   try {
  //   } catch (e) {
  //     res.status(400).json(e)
  //   }
})

module.exports = router
