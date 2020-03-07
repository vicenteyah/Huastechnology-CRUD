'use strict'
var mysql = require('mysql')
var { database } = require('../config')
var chalk = require('chalk')

var connection = mysql.createPool(database)

connection.getConnection((err,connected) => {

    if (err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error(chalk.inverse.red.bold('Database connection was closed.'))
        }
        if (err.code === 'ER_CON_COUNT_ERROR') {
            console.error(chalk.inverse.red.bold('Database has to many connections.'))
        }
        if (err.code === 'ECONNREFUSED') {
            console.error(chalk.inverse.red.bold('DATABASE CONNECTION WAS REFUSED.'))
        }
        if (err.code === 'ER_ACCESS_DENIED_ERROR') {
            console.error(chalk.inverse.red.bold('DATABASE ACCESS DENIED'))
        }
    }
    if (connected) {
        console.log(chalk.inverse.blue.bold('database connection success'))
        connected.release()
    }

    return

})

module.exports.connection = connection;