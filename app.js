const express = require('express')
const app = express()
const bodyParser = require('bodyParser')
const cors = require('cors')

app.use(cors())
app.use(bodyParser.json())



module.exports = app