const Member = require('../models/member')

class Controller {
    static findAll(req, res, next) {
        Member.find()
        .then((data)=>{
            res.status(200).json(data)
        })
        .catch(next)
    }

    static findOne(req, res,next) {
        Member.findById(req.params.id)
        .then((data)=>{
            res.status(200).json(data)
        })
        .catch(next)
    }

    static create(req, res, next) {
        Member.create({
            name:req.body.name,
            address:req.body.address,
            zipcode:req.body.zipcode,
            email:req.body.email,
            phone:req.body.phone
        }).then((member) => {
            res.status(201).json(member)
        }).catch(next)
    }

    static delete(req, res, next) {
        Member.findByIdAndDelete({ _id: req.params.id })
        .then((data)=>{
            res.status(200).json(data)
        })
        .catch(next)
    }

    static update(req, res,next) {
        const {name, address, zipcode, email, phone} = req.body
        Member.updateOne({ _id: req.params.id }, {name, address, zipcode, email, phone})
        .then((data)=>{
            res.status(200).json(data)
        })
        .catch(next)
    }
}

module.exports = Controller 