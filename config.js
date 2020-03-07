'use strict'
module.exports = {
    port: process.env.PORT || 3000,
    database: {
        connectionLimit: 100,
        host:'localhost',
        user:'root',
        password:'adc123',
        database:'test',
        port: 3306,
        debug: false,
        multipleStatements: true
    }
}