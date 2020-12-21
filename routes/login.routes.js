'use strict'

// Llamamos a la proiedad router del módulo express
// usamos la desestructuración de objetos para coger solo el {Router}
const {Router} = require ('express');

// esta const y funct la vamos a requerir en index.js
const router = Router();


//destructurar loginShow para pedirle renderLogin creado en el login.controller (loginShow.renderLogin)
const {renderLogin} = require('../controller/login.controller')

//lamamos al controlador con router.get, le decimos q vaya a la raiz '/' y llame a renderLogin
router.get('/', renderLogin);


module.exports = router;