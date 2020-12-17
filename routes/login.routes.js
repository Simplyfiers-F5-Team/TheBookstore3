'use strict'

// Llamamos a la proiedad router del módulo express
// usamos la desestructuración de objetos para coger solo el {Router}
const {Router} = require ('express');

// esta const y funct la vamos a requerir en index.js
const router = Router();


router.get('/', (request, response) => {
    console.log("Get al raíz");
    response.send("Enviando");
});

module.exports = router;