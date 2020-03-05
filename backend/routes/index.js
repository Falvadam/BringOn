const router = require('express').Router()
const uploadCloud = require('../config/cloudinary')
const { upload } = require('../controllers/upload.controller')

router.get('/', (req, res, next) => {
  res.render('index')
})

router.post('/upload', uploadCloud.single('image'), upload)

module.exports = router
