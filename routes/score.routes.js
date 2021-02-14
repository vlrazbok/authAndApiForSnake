const { Router } = require('express')
const User  = require('../models/User')
const router = Router()

router.get(
  '/topscore',
  async (req, res) => {
    res.json(await User.find({}).sort({"score": -1}))
  }
)
module.exports = router