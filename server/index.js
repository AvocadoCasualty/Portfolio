require('dotenv').config()
const express = require('express'),
    massive = require('massive')
const ctrl = require('./controllers/controller')

const app = express()

app.use(express.json())

