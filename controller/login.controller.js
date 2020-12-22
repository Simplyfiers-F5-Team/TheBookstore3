"use strict";


// //creamos un objeto vacío
// const loginShow = {};

// //el objeto va a tener varias funciones, una de ellas es renderLogin, que rellena el objeto
// loginShow.renderLogin = (request, response) => {
// response.send("Render login en el controlador");
// };

//Aqui decimos que de el archivo user en models encuentre usuarios.
const userModel = require('../models/user');

const loginController = {
	muestraRegistro: (request, response) => {
		response.render('loginView', {layout:'loginLayout', loginInvalid: false}); //ponemos loginLayout porque por defecto va a main
	},
	ejecutaRegistro: async (request, response) => {
		const username = request.body.username;
		//Aqui llamamos a la constante usermodel y le decimos que encuentre el username que le decimos en la linea anterior.
		const userFind = await userModel.find({ userName: username });
		//Con esta funcion decimos que si userFind tiene almacenado un documento, haga la funcion de abajo.
		if(userFind.length == 1) {
			response.redirect('/books');
		} else {
			//Si el usuario que le metemos no esta en la bbdd, nos redirige a loginView, hay que recordar poner que vaya al layout (loginLayout)
			//porque por defecto te llevario a main.hbs
			response.render('loginView', {layout:'loginLayout', loginInvalid: true});
		}
	}
};

//exportamos el login al controlador
module.exports = loginController;



