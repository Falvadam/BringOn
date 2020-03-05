const Beca = require('../models/Beca')
const PC = require('../models/PC')

//Create
exports.createBeca = (req, res, next) => {
  Beca.create({...req.body})
  .then(beca => res.status(201).json({ beca }))
  .catch(err => res.status(500).json({ err }))
}

exports.createPC = (req, res, next) => {
  PC.create({...req.body})
  .then(pc => res.status(201).json({ pc }))
  .catch(err => res.status(500).json({ err }))
}

//Read (all)
exports.getAllBPC = (req, res, next) => {
  Promise.all([Beca.find(), PC.find()]).then( all => res.status(200).json({ all }))
}

exports.getAllBecas = (req, res, next) => {
  Beca.find()
  .then(becas => res.status(200).json({ becas }))
  .catch(err => res.status(500).json({ err }))
}

exports.getAllPC = (req, res, next) => {
  PC.find()
  .then(pcs => res.status(200).json({ pcs }))
  .catch(err => res.status(500).json({ err }))
}

//Read (detail)
exports.getOneBeca = (req, res, next) => {
  const { id } = req.params
  Beca.findById(id)
  .then(beca => res.status(201).json({ beca }))
  .catch(err => res.status(500).json({ err }))
}

exports.getOnePC = (req, res, next) => {
  const { id } = req.params
  PC.findById(id)
  .then(pc => res.status(201).json({ pc }))
  .catch(err => res.status(500).json({ err }))
}

//Update
exports.updateBeca = (req, res, next) => {
  const { id } = req.params
  Beca.findByIdAndUpdate(id, { ...req.body }, {new: true })
  .then(beca => res.status(200).json({ beca }))
  .catch(err => res.status(500).json({ err }))
}

exports.updatePC = (req, res, next) => {
  const { id } = req.params
  PC.findByIdAndUpdate(id, { ...req.body }, {new: true })
  .then(pc => res.status(200).json({ pc }))
  .catch(err => res.status(500).json({ err }))
}


//Delete
exports.deleteBeca = (req, res, next) => {
  const { id } = req.params
  Beca.findByIdAndDelete(id)
  .then(beca => res.status(200).json({ beca, msg: 'Beca deleted'}))
  .catch(err => res.status(500).json({ err }))
}

exports.deletePC = (req, res, next) => {
  const { id } = req.params
  PC.findByIdAndDelete(id)
  .then(pc => res.status(200).json({ pc, msg: 'PC deleted'}))
  .catch(err => res.status(500).json({ err }))
}

//OTRAS
exports.getByField = (req, res, next) => {
  const { type, field } = req.params

  if(type === 'becas'){
    Beca.find({ field: { $eq: field } })
    .then(becas => res.status(200).json({ becas }))
    .catch(err => res.status(500).json({ err }))
  } else if(type === 'premios') {
    PC.find({ field: { $eq: field } })
    .then(premios => res.status(200).json({ premios }))
    .catch(err => res.status(500).json({ err }))
  }
}
