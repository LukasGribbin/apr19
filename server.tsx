require('dotenv').config()

const express = require('express')
const app = express()
const mysql = require('mysql')

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: process.env.PASSWORD,
    database: "mydatabase"
})

con.connect(function(err) {
    if (err) {
        console.log('Something went wrong here')
        throw err
    }
    console.log("Connected!")
})

con.query("SELECT * FROM mytable", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    console.log(result[0].firstname)
})

app.listen(3000, () => console.log('Server Started'))


