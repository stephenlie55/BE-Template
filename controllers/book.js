const Book = require('../models/book')

class Controller {

    static searchBy(req,res,next){
        console.log(req.query);

        Book.find({title: {$regex:  req.query.title, $options: 'i' }})
        .then((data)=>{
            if(data.length > 0){
                res.status(200).json(data)
            }else{
                res.status(200).json({
                    message: `Cannot find book information about ${req.query.title}`
                })
            }
        })
        .catch(next)
    }

    static read(req, res, next) {
        Book.find()
        .then( (books) => {
            res.status(200).json(books)
        })
        .catch(next)
    }

    static readOne(req, res, next) {
        Book.findById(req.params.id)
        .then( (book) => {
            console.log(book)
            res.status(200).json(book)
        })
        .catch(next)
    }

    static create(req, res, next) {
        const newBook = new Book();
        for (var properties in req.body) {
            newBook[properties] = req.body[properties]
        }
        newBook.save()
        .then( (book) => {
            res.status(201).json(book)
        })
        .catch(next)
    }

    static put(req, res, next) {
        Book.findById(req.params.id, (err, book) => {
            if (req.body.isbn && req.body.title && req.body.author && req.body.category && req.body.stock) {
                for (var key in req.body) {
                    book[key] = req.body[key]
                }
                book.save()
                .then( (updatedBook) => {
                    res.status(200).json(book)
                })
                .catch(next)
            } else {
                next({
                    code: 400,
                    message: 'Properties not match with request payload'
                })
            }
        })
    }

    static patch(req, res, next) {
        Book.findById(req.params.id)
        .then( (book) => {
            for (var key in req.body) {
                book[key] = req.body[key]
            }
            book.save()
            .then( (patchedBook) => {
                res.status(200).json(patchedBook)
            })
            .catch(next)
        })
        .catch(next)
    }

    static delete(req, res, next) {
        Book.findByIdAndDelete(req.params.id, (err, succeed) => {
            if (succeed) {
                res.status(200).json(succeed)
            } else if (err) {
                next(err)
            } else {
                next({
                    code: 500,
                    message: 'Unknown error'
                })
            }
        })
    }
}

module.exports = Controller