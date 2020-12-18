'use strict';

const app = require('express')();

const configuration = require('./configuration/develop.json');
const loginRouter = require('./routes/loginRoutes.js');


(async () => {
	const port = configuration.server.port;
	try {
		await app
			.use(loginRouter)
			.listen(port)
			;
		console.log(`Server listening art 'http://localhost:${port}`);
	}
	catch (error) {
		console.error(error.message);
	}
})();
