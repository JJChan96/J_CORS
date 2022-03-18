require('dotenv').config()
const mysql = require('mysql2')
// npm install mysql2

const host = process.env.DB_HOST || 'localhost'
const user = process.env.DB_USER || 'juchan'
const password = process.env.DB_PASSWORD || 'juchan'
const database = process.env.DB_DATABASE || 'home'


const config = {host,user,password,database}
const pool = mysql.createPool(config)
const promisePool = pool.promise()
exports.pool = promisePool