"use strict";

// //creamos un objeto vacío
// const loginShow = {};

// //el objeto va a tener varias funciones, una de ellas es renderLogin, que rellena el objeto
// loginShow.renderLogin = (request, response) => {
// response.send("Render login en el controlador");
// };



const loginController = {
	muestraRegistro: (request, response) => {
		response.render('loginView', {layout:'loginLayout'}); //ponemos loginLayout porque por defecto va a main
	},
	ejecutaRegistro: (request, response) => {
		const username = request.body.username;
		response.send(`${username} está intentando entrar`);
	}
}

//exportamos el login al controlador
module.exports = loginController;



