'use strict';

import userModel from '../models/userModel.js';


const loginService = new class
{
	_loggedUser = null;

	async _userExists(username) {
		const usersWithUsername = await userModel.find({ userName: username })
		return usersWithUsername.length !== 0;
	}

	get isLogged() {
		return this._loggedUser !== null;
	}

	get loggedUser() {
		return this._loggedUser;
	}

	async logUser(userName) {
		if (! await this._userExists(userName))
			throw new Error('Username incorrect for logging');
		this._loggedUser = userName
	}
};


export default loginService;
