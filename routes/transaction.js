const router = require('express').Router()
const transactionController = require('../controllers/transaction')
const {calculate} = require('../middlewares/date')

router.get('/', transactionController.findAll)
router.get('/:id', transactionController.findOne)
router.post('/', transactionController.create)
router.delete('/:id', transactionController.delete)
router.patch('/:id', calculate, transactionController.update)
router.get('/search', transactionController.searchById)

module.exports = router 