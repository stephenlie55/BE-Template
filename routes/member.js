const router = require('express').Router()
const memberController = require('../controllers/member.js')

router.get('/', memberController.findAll)
router.get('/:id', memberController.findOne)
router.post('/', memberController.create)
router.delete('/:id', memberController.delete)
router.put('/:id', memberController.update)

module.exports = router 