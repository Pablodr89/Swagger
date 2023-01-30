'use strict'

let express = require('express')
let frutaController = require('../controller/frutasController')
let verdurasController = require('../controller/verdurasController')

let api = express.Router()

api.get('/listarfruta', frutaController.listar)
api.get('/listarverdura', verdurasController.listar)

api.post('/savefruta', frutaController.saveFruta)
api.post('/saveverdura', verdurasController.saveVerdura)

api.put('/updatefruta/:id', frutaController.updateFruta)
api.put('/updateverdura/:id', verdurasController.updateVerdura)

api.delete('/deletefruta/:id', frutaController.deleteFruta)
api.delete('/deleteverdura/:id', verdurasController.deleteVerdura)

module.exports = api