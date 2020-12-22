'use strict'

// Llamamos a la proiedad router del módulo express
// usamos la desestructuración de objetos para coger solo el {Router}
const {Router} = require ('express');

// esta const y funct la vamos a requerir en index.js
const router = Router();


//destructurar loginController para pedirle logincontroller creado en el login.controller (loginController.renderLogin)
const loginController = require('../controller/login.controller')


//lamamos al controlador con router.get, le decimos q vaya a la raiz '/' y llame a muestraRegistro
router.get('/login', loginController.muestraRegistro);

//Asociamos la url login con el metodo ejecutaRegistro
router.post('/login', loginController.ejecutaRegistro);



module.exports = router;
