'use strict'

const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let AdminSchema = Schema({
    nombres: { type: String, required: true},
    apellidos: { type: String, required: true},
    email: { type: String, required: true},
    password: { type: String, required: true},
    telefono: { type: String, required: true},
    rol: { type: String, required: true},
    cedula: { type: String, required: true},
});

module.exports = mongoose.model('Admin', AdminSchema);