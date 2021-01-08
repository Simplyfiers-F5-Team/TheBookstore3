'use strict'

const Book = require('../models/book');

const bookController = {
    formularioCrearLibro: (request, response) => {
        response.render('books/createBook')
    },
    crearNuevoLibro: async (request, response) => {
        const {title, description, category, price, stock} = request.body;
        const newBook = new Book ({title, description, category, price, stock});
        await newBook.save();
        response.redirect('/books')
    },
    
    muestraLibros: (request, response) => {
        response.render('books/allBooks')
    }

}
module.exports = bookController;
