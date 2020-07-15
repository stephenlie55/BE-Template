const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    isbn: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    stock: {
        type: Number,
        required: true
    }
}, {timestamps: true, versionKey: false})

const Book = mongoose.model('Book', bookSchema)
module.exports = Book