'use strict'

const { request, response } = require('express');
const { findById } = require('../models/book');
const Book = require('../models/book');

const bookController = {
    formularioCrearLibro: (request, response) => {
        response.render('books/createBook')
    },
    crearNuevoLibro: async (request, response) => {
        const {title, description, category, price, stock} = request.body;
        const newBook = new Book ({title, description, category, price, stock});
        await newBook.save();
        response.redirect('/books');
    },
    
    muestraLibros: async (request, response) => {
        const libro = await Book.find().lean();
        response.render('books/allBooks', { libro });
    },

    actualizarFormularioLibro: async (request, response) => {
        const book = await Book.findById(request.params.id).lean();
        response.render('books/editBook', { book });
    },

    actualizarLibro: async (request, response) => {
        const {title, description, category, price, stock} = request.body;
        await Book.findByIdAndUpdate(request.params.id, {title, description, category, price, stock}),
        response.redirect('/books');
    },

    eliminarLibro: async (request, response) => {
        await Book.findByIdAndDelete(request.params.id)
        response.redirect('/books');
    }
};

module.exports = bookController;
