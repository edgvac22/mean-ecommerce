'use strict'

let express = require('express');
let clienteController = require('../controllers/ClienteController');

let api = express.Router();
let auth = require('../middlewares/auth');

api.post('/login-cliente', clienteController.loginCliente);

//** Administración de Clientes */
api.get('/listar-clientes-filtro-admin/:tipo/:filtro?', auth.auth, clienteController.listarClientesFiltroAdmin);
api.post('/registro-cliente',auth.auth, clienteController.registroClienteAdmin);



module.exports = api;
