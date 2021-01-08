const {Router} = require('express');

const router = Router();

const bookController = require('../controller/book.controller');

/* CREATE BOOK */

router.get('/books/add', bookController.formularioCrearLibro);
router.post('/books/createBook', bookController.crearNuevoLibro);

/* READ BOOKS */
router.get('/books', bookController.muestraLibros);

/* UPDATE BOOK */

/* DELETE BOOK */

module.exports = router;