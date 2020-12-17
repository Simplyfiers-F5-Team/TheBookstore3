"use strict";

//creamos un objeto vacío
const loginShow = {};

//el objeto va a tener varias funciones, una de ellas es renderLogin, que rellena el objeto
loginShow.renderLogin = (request, response) => {
response.send("Render login en el controlador");
}

//exportamos el login al controlador
module.exports = loginShow;



