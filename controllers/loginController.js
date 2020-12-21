"use strict";

import loginService from '../services/loginService.js';


const loginController = new class
{
	checkLogin( _ , response ) {
		response.redirect(loginService.isLogged ? '/books' : '/login');
	}

	showLogin( _ , response ) {
		response.render('login', { layout: 'loginLayout', isError: false });
	}

	async doLogin( request, response ) {
		const userName = request.body.userName;
		try
		{
			await loginService.logUser(userName);
			response.redirect('/books');
		}
		catch (error)
		{
			response.render('login', { layout: 'loginLayout', isError: true });
		}
	}
};


export default loginController;
