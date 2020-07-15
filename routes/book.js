const router = require('express').Router()
const bookController = require('../controllers/book')

router.get('/test', (req, res) => {
    res.status(200).json({
        message: 'Book routes'
    })
})

router.get('/search', bookController.searchBy)
router.get('/', bookController.read)
router.get('/:id', bookController.readOne)
router.post('/', bookController.create)
router.put('/:id', bookController.put)
router.patch('/:id', bookController.patch)
router.delete('/:id', bookController.delete)

module.exports = router