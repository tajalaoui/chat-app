const express = require('express')
const router = new express.Router()
const auth = require('../middleware/auth')
const User = require('../model/user')
const Profile = require('../model/profile')

// Query is for get and body for post

router.get('/profile', auth, async (req, res) => {
  const { userId } = req.query

  try {
    const profile = await User.findById(userId).populate('profile')
    // const profile = await User.findById('5fad3613e15afc00d3d413ad').populate(
    //   'profile'
    // )

    console.log(profile)

    // const { profileQuestions, username, birthday, country, test } = profile

    // console.log(profileQuestions, username, birthday, country, test)

    res.json(profile)
  } catch (e) {
    res.status(400).json(e.message)
  }
})

router.patch('/profile', auth, async (req, res) => {
  const { userId, profile } = req.body

  try {
    const profile = await Profile.create(
      {
        $set: {          
          owner: userId,
          profileData: profile,
        },
      },
      {
        new: true,
      }
    )

    res.send(profile)
  } catch (e) {
    res.status(400).json(e)
  }
})

// * Test
const multer = require('multer')

const storage = multer.diskStorage({
  destination(req, file, next) {
    next(null, 'avatars')
  },
  // filename(req, file, next) {
  // const ext = file.mimetype.split('/')[1]
  // next(null, file.fieldname + '.' + ext)
  // },
})

const upload = multer({
  // storage: storage,
  limits: {
    fileSize: 2000000,
  },
  fileFilter(req, file, next) {
    if (!file.originalname.match(/\.(png|jpg|jpeg)$/)) {
      return cb(new Error('Please upload an image'))
    }

    next(undefined, true)
  },
})

router.post(
  '/avatar',
  upload.single('picture'),
  async (req, res) => {
    const { userId } = req.body

    try {
      const avatar = await User.findByIdAndUpdate(
        userId,
        {
          $set: {
            avatar: req.file.filename,
          },
        }
        // {
        //   new: true,
        // }
      )
      // const avatar = await User.findByIdAndUpdate(
      //   userId,
      //   {
      //     $set: {
      //       avatar: req.file.buffer,
      //     },
      //   }
      //   {
      //     new: true,
      //   }
      // )
      res.status(200).send(avatar)
    } catch (e) {
      console.log(e.message)
      res.status(400).json({ error: e.message })
    }
  },
  (error, req, res, next) => {
    res.status(400).json({ error: error.message })
  }
)

// router.get('/profile', async (req, res) => {

// })

module.exports = router
