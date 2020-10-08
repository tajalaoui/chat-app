const express = require('express')
const router = new express.Router()
const bodyParser = require('body-parser')
const { Mongoose } = require('mongoose')

// * Db model
const User = require('../model/user')

router.use(bodyParser.json())

router.patch('/saveprofileinfo', async (req, res) => {
  const { userId, profileInfo } = req.body

  console.log(...profileInfo)

  try {
    //   const profile = new User({
    //     profile: [
    //       {
    //         owner: userId,
    //         profileData: profileInfo,
    //         // title: profileInfo[{ ...title }],
    //         // subtitle: profileInfo[{ ...subtitle }],
    //       },
    //     ],
    //   })

    const profile = await User.findByIdAndUpdate(userId, {
      profileData: [{ title: 'hola', subtitle: 'world' }],
    })
    await profile.save()
    res.send()
  } catch (e) {
    res.status(400).json(e)
  }
  // } finally {
  //   Mongoose.connection.close()
  // }
})

module.exports = router
