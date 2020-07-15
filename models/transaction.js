const mongoose = require('mongoose')

const transactionSchema = new mongoose.Schema({
    member: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Member'
    },
    in_date: Date,
    out_date: Date,
    due_date: Date,
    fine: Number,
    booklist: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book'
    }]
}, {timestamps: true, versionKey: false})

const Transaction = mongoose.model('Transaction', transactionSchema)
module.exports = Transaction