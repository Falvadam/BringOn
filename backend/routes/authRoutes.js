const router = require('express').Router()
const passport = require('../config/passport')
const { verifyToken } = require('../config/jwt')
const { signup, login, logout, profile, editProfile } = require('../controllers/auth.controllers')

router.post('/signup', signup)
router.post('/login', passport.authenticate('local'), login)
router.get('/logout', logout)
router.get('/profile', verifyToken, profile)
router.put('/profile/:id', editProfile)

module.exports = router