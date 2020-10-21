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
