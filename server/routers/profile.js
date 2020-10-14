const express = require('express')
const router = new express.Router()
const User = require('../model/user')

router.patch('/profile', async (req, res) => {
  const { userId, profileInfo } = req.body

  try {
    const profileUser = await User.findByIdAndUpdate(
      userId,
      {
        $set: {
          profileData: profileInfo,
        },
      },
      {
        new: true,
      }
    )

    res.send(profileUser)
  } catch (e) {
    console.log(e)
    res.status(400).json(e)
  }
})

// * Test
const multer = require('multer')

const upload = multer({
  dest: 'avatars',
  limits: {
    fileSize: 2000000,
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(png|jpg|jpeg)$/)) {
      return cb(new Error('Please upload an image'))
    }

    cb(undefined, true)
  },
})

router.post(
  '/avatar',
  upload.single('picture'),
  async (req, res) => {
    // const { userId } = req.body

    console.log(req.file)
    console.log(req.body.userId)

    try {
      // const profile = User.findByIdAndUpdate(userId, {
      //   profileData: [{ profilePicture: req.file.buffer }],
      // })

      // await profile.save()
      res.status(200).send()
    } catch (e) {
      console.log(e.message)
      res.status(400).json({ error: e.message })
    }
  },
  (error, req, res, next) => {
    res.status(400).json({ error: error.message })
  }
)

module.exports = router
