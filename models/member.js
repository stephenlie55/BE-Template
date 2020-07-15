const mongoose = require('mongoose')

const memberSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    zipcode: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        validate: [
            {
                validator: function(value) {
                    var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                    return emailRegex.test(value)
                },
                message: 'Invalid email format',
            },
            {
                validator: function(value) {
                    Member.findOne({email: value.email})
                    .then( (member) => {
                        if (member) {
                            return false
                        } else {
                            return true
                        }
                    })
                    .catch( (err) => {
                        return true
                    })
                },
                message: 'Email must be unique!',
            }
        ],
    },
    phone: {
        type: String,
        minlength: 11,
        maxlength: 13,
        required: true
    }
}, {timestamps: true, versionKey: false})

const Member = mongoose.model('Member', memberSchema)
module.exports = Member