'use strict'

let under = require('underscore')
let verduras = require('../models/verduras.json')

//Rutas
function listar(req, res) {
    res.status(200).json(verduras)
}

function saveVerdura(req, res) {

    let {nombre, color} = req.body
    if(nombre && color) {
        let id = verduras.length + 1
        let newVerdura = {id, ...req.body}
        verduras.push(newVerdura)
        res.status(200).json(verduras)
    } else {
        res.status(500).json('La verdura no se ha añadido con éxito')
    }
}

function updateVerdura(req, res) {
    let {id} = req.params
    let {nombre, color} = req.body
    if(nombre && color) {
        under.each(verduras, (verdura, i) => {
            if(verdura.id == id) {
                verdura.nombre = nombre
                verdura.color = color
            }
        })
        res.status(200).json(verduras)
    } else {
        res.status(500).json('La verdura no se ha actualizado con éxito')
    }
}

function deleteVerdura(req, res) {
    under.each(verduras, (verdura, i) => {
        let {id} = req.params
        if(verdura.id == id) {
            verduras.splice(i, 1)
            res.status(200).json(verduras)
        }
    })
    res.status(500).json('La verdura no ha sido eliminada')
}
//TODO en postman funciona todo, en swagger solo funciona listar, mirar el lunes
module.exports = {
    listar,
    saveVerdura,
    updateVerdura,
    deleteVerdura
}