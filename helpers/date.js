const Transaction = require('../models/transaction')

function calculate(req,res,next){
    let result
    Transaction.findById(req.params.id,function(err,data){

        let day  = 1000*60*60*24
        let in_date = new Date(req.body.in_date).getTime()
        console.log(in_date, day);

        let due_date = new Date(data.due_date).getTime()
        result = Math.round((in_date - due_date) / day)
        req.result = result
        next()

    })


}

module.exports = {calculate} 