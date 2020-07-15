const Transaction = require('../models/transaction')

class Controller {
    static findAll(req, res, next) {
        Transaction.find()
            .then((data) => {
                res.status(200).json(data)
            })
            .catch(next)
    }

    static findOne(req, res, next) {
        Transaction.findById(req.params.id)
            .populate('member')
            .populate('booklist')
            .then((book)=>{
                res.status(200).json(book)
            })
            .catch(next)
    }

    static create(req, res, next) {
        let arr = []

        req.body.booklist.forEach(book => {
            arr.push(book)
        });
        Transaction.create({
            member: req.body.member,
            in_date: null,
            out_date: req.body.out_date,
            due_date: req.body.due_date,
            fine: -1,
            booklist: arr
        }).then((data) => {
            res.status(201).json(data)
        }).catch(next)
    }

    static delete(req, res,next) {
        Transaction.findByIdAndDelete({ _id: req.params.id })
        .then((data)=>{
            res.status(200).json(data)
        })
        .catch(next)
    }
    static update(req, res,next) {
        const {in_date} = req.body
         if (req.result <= 0) {
            req.result = 0
        }else{
            req.result = req.result * 1000
        }

        Transaction.updateOne({ _id: req.params.id },{in_date, fine: req.result})
        .then((data)=>{
            res.status(200).json(data)
        })
        .catch(next)
    }

    static searchById(req, res,next) {
        console.log(req.query);
        Transaction.find({ booklist: req.query.bookid }).populate('booklist')
        .then((data)=>{
            res.status(200).json(data)
        })
        .catch(next)
    }
}

module.exports = Controller 