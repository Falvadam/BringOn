const router = require('express').Router()
const { createBeca, createPC, getAllBPC ,getAllBecas, getAllPC, getOneBeca,
   getOnePC, deleteBeca, deletePC, updateBeca, 
   updatePC, getByField } = require('../controllers/bpc.controllers')

//REST
//Create
router.post('/beca', createBeca)
router.post('/pc', createPC)

//Read (all)
router.get('/becapremioyconcurso', getAllBPC)
router.get('/beca', getAllBecas)
router.get('/pc', getAllPC)

//Read (detail)
router.get('/beca/:id', getOneBeca)
router.get('/pc/:id', getOnePC)

//Update
router.put('/beca/:id', updateBeca)
router.put('/pc/:id', updatePC)

//Delete
router.delete('/beca/:id', deleteBeca)
router.delete('/pc/:id', deletePC)

//OTHER ROUTES
router.get('/:type/:field', getByField)

module.exports = router