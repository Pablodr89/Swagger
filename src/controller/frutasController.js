'use strict'

let under = require('underscore')
let frutas = require('../models/frutas.json')

//Rutas
function listar(req, res) {
    res.status(200).json(frutas)
}

function saveFruta(req, res) {

    let {nombre, color} = req.body
    if(nombre && color) {
        let id = frutas.length + 1
        let newFruit = {id, ...req.body}
        frutas.push(newFruit)
        res.status(200).json(frutas)
    } else {
        res.status(500).json('La fruta no se ha añadido con éxito')
    }
}

function updateFruta(req, res) {
    let {id} = req.params
    let {nombre, color} = req.body
    if(nombre && color) {
        under.each(frutas, (fruta, i) => {
            if(fruta.id == id) {
                fruta.nombre = nombre
                fruta.color = color
            }
        })
        res.status(200).json(frutas)
    } else {
        res.status(500).json('La fruta no se ha actualizó con éxito')
    }
}

function deleteFruta(req, res) {
    under.each(frutas, (fruta, i) => {
        let {id} = req.params
        if(fruta.id == id) {
            frutas.splice(i, 1)
            res.status(200).json(frutas)
        } 
    })
    res.status(500).json('La fruta no ha sido eliminada')
}
//TODO en postman funciona todo, en swagger solo funciona listar, mirar el lunes
module.exports = {
    listar,
    saveFruta,
    updateFruta,
    deleteFruta
}
