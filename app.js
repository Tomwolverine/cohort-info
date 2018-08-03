const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const queries = require('./queries.js')

app.use(cors())
app.use(bodyParser.json())

app.get('/', (request,response,next) => {
    queries.allStudents()
    .then(getAllStudents => {
        response.json(getAllStudents)
    })
})

module.exports = app
