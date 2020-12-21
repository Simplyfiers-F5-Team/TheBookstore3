"use strict";

// //creamos un objeto vacío
// const loginShow = {};

// //el objeto va a tener varias funciones, una de ellas es renderLogin, que rellena el objeto
// loginShow.renderLogin = (request, response) => {
// response.send("Render login en el controlador");
// };



const loginController = {
	muestraRegistro: (request, response) => {
		response.send('Render login en el controlador con GET');
	},
	ejecutaRegistro: (request, response) => { 
		response.send('Do login en el controlador con POST');
	}
}

//exportamos el login al controlador
module.exports = loginController;



