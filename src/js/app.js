'use strict'

//Express
let express = require('express')
let app = express()
let logger = require('morgan')
app.use(logger('dev'))
app.use(express.urlencoded({extended:false}))
app.use(express.json())

//Cargar rutas
let frutasRouter = require('../routes/routes')

//Ruta base
app.use('/api', frutasRouter)


module.exports = app