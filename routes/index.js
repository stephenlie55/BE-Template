const router = require('express').Router()
const bookRoutes = require('./book.js')
const memberRoutes = require('./member.js')
const transactionRoutes = require('./transaction.js')

router.get('/', (req, res) => {
    res.status(200).json({
        message: 'Home route'
    })
})

router.use('/books', bookRoutes)
router.use('/members', memberRoutes)
router.use('/transactions', transactionRoutes)

module.exports = router