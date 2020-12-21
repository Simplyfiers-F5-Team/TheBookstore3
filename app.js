'use strict';

import express       from 'express';
import handlebars    from 'express-handlebars';
import dbServer      from './dbServer.js';
import configuration from './configuration/configuration.js';
import loginRouter   from './routes/loginRouter.js';


(async () => {
	try {
		dbServer.start();
		const app = express()
			.engine('hbs', handlebars({extname:'hbs'}))
			.set('view engine', 'hbs')
			.use(express.json())
			.use(express.urlencoded())
			.use(express.static('public'))
			.use(loginRouter)
			.listen({
				host: configuration.server.host,
				port: configuration.server.port,
			})
			.on('listening', _ =>
				console.info(`Express server listening at '${app.address().address}:${app.address().port}'`)
			)
			;
	}
	catch (error) {
		console.error(`Error starting express server: '${error.message}'`);
	}
})();
