require('dotenv').config()

const express = require('express')
const app = express()
const port = process.env.PORT
const mongoose = require('mongoose')
const uri = process.env.URI
const baseRoute = require('./routes/index.js')
const errorHandler = require('./middlewares/errorHandler.js')

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use('/', baseRoute)
app.use(errorHandler)

app.listen(port, () => {
    console.log('Connected to port: ', port)
    mongoose.connect(uri, {useNewUrlParser: true})
    .then( () => {
        console.log(`Connected to database, URL: ${uri}`)
    })
})