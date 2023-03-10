const dotenv = require('dotenv')
dotenv.config()

const mysql = require('mysql2')
const conn = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
})

conn.connect()

module.exports = conn
