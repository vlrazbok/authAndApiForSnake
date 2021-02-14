const { Router } = require('express')
const User  = require('../models/User')

const config = require('config')
const jwt = require('jsonwebtoken')
const {check, validationResult} = require('express-validator')
const router = Router()

router.post(
  '/login',
  async (req, res) => {
  try {
    
    const {name} = req.body

    console.log("Name", name)

    const candidate = await User.findOne({ name })

    if (candidate) {
      const token = jwt.sign(
        { 
          userId: candidate.id,
         
        },
        config.get('jwtSecret'),
        { expiresIn: '8h' }
      )

      res.json({ token, userId: candidate.id})
    }

    let rand = Math.floor(1 + Math.random() * 100)
    
    const user = new User({ name, score: rand })
    await user.save()


    const Fuser = await User.findOne({ name })

   if (Fuser) {
      const token = jwt.sign(
        { 
          userId: Fuser.id,
         
        },
        config.get('jwtSecret'),
        { expiresIn: '8h' }
      )

      res.json({ token, userId: Fuser.id})
    }

  } catch (e) {
    res.status(500).json({ message: 'Щось пішло не так, спробуйте заново' })
  }
})

module.exports = router