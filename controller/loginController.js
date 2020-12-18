"use strict";


const loginController = 
{
	renderLogin : async (request, response) => {
		await response.send("Render login en el controlador");
	}
};


module.exports = loginController;



