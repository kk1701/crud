require('dotenv').config()

const express = require('express')
const connectToDb = require('./config/db.js')
const { home } = require('./controllers/userController.js')


const app = express()

connectToDb()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

const userRoutes = require('./routes/userRoutes.js')
app.use('/', userRoutes)

module.exports = app