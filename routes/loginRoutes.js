'use strict'

const _loginController = require('../controller/loginController')


const loginRouter = require ('express')
	.Router()
		.get('/', _loginController.renderLogin)
	;


module.exports = loginRouter;
