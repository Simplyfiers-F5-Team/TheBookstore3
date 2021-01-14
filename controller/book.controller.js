'use strict'

const Book = require('../models/book');

const bookController = {
    formularioCrearLibro: (request, response) => {
        response.render('books/createBook')
    },
    crearNuevoLibro: async (request, response) => {
        const {title, description, category,cover, price, stock} = request.body;
        const newBook = new Book ({title, description, category, cover, price, stock});
        await newBook.save();
        response.redirect('/books');
    },
    
    muestraLibros: async (request, response) => {
        const libro = await Book.find().sort({createdAt:'desc'}).lean();
        response.render('books/allBooks', { libro });
    },

    actualizarFormularioLibro: async (request, response) => {
        const book = await Book.findById(request.params.id).lean();
        response.render('books/editBook', { book });
    },

    actualizarLibro: async (request, response) => {
        const {title, description, category, cover, price, stock} = request.body;
        await Book.findByIdAndUpdate(request.params.id, {title, description, category, cover, price, stock}),
        response.redirect('/books');
    },

    eliminarLibro: async (request, response) => {
        await Book.findByIdAndDelete(request.params.id)
        response.redirect('/books');
    },
    // BARRA DE BUSQUEDA FUNCIONAL!!!
    buscarLibro : async (request,response) => {
        const busqueda = await Book.find({$text: { $search: request.body.search, $caseSensitive: false }}).lean();
        response.render('books/allBooks',{libro: busqueda});
    }

};

module.exports = bookController;
