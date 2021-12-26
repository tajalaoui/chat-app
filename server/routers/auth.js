const express = require('express')
// TODO Shall we delete new ?
const router = new express.Router()

// * Db model
const User = require('../model/user')
const Profile = require('../model/profile')
// !gregre
const { findByIdAndUpdate } = require('../model/user')

router.post('/signup', async (req, res) => {
  const { email, username } = req.body

  try {
    // Id of profile needs to be in user
    const profile = await Profile.create()
    // const { id } = profile
    // console.log(`profile id: ${profile._id}`)

    const user = await User.create(req.body)

    const { id, username } = user

    // Give profile id to user model
    // const createId = await User.findByIdAndUpdate(profile._id)

    // TODO Add username to checkDuplication()
    await User.checkDuplication(email)

    await user.save()
    await profile.save()

    const token = await user.generateAuthToken()

    res.status(200).json({ id, token, username })
  } catch (e) {
    console.log(e)
    res.status(400).json({ error: e.message })
  }
})

router.post('/login', async (req, res) => {
  const { email, password } = req.body

  try {
    const user = await User.findByCredentials(email, password)

    const token = await user.generateAuthToken()

    const { id, username } = user

    res.status(200).json({ id, token, username })
  } catch (e) {
    res.status(400).json({ error: e })
  }
})

module.exports = router

//

const inputData = [
  {
    id: 1,
    title: 'hippo',
    faveFood: 'carrots',
  },
  {
    id: 2,
    title: 'Cat',
    faveFood: 'carrots',
  },
  {
    id: 3,
    title: 'ducks',
    faveFood: 'breadcrumbs',
  },
]

function findAnimal(title) {
  var animal = inputData.find((animal) => animal.title === title)
  if (animal.hasOwnProperty('faveFood')) {
    return animal.faveFood
  }
}

console.log(findAnimal('hippo'))
