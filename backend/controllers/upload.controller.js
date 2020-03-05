exports.upload = (req, res, next) => {
  res.status(201).json({ image: req.file.url })
}