'use strict'
const express = require('express')
const cors = require('cors')
const bodyParser = require("body-parser")
const app = express()
const chalk = require('chalk')
const config = require('./config')
const morgan  = require('morgan')

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

const Users = require('./Routes/Users')

app.use('/users',Users)

app.listen(config.port,() => {
    console.log(chalk.inverse.magenta.bold(`server running on http://localhost:${config.port}`))
})