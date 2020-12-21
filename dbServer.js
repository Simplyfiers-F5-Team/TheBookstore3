'use strict';

import mongoose                from 'mongoose';
import configuration           from './configuration/configuration.js';
import { default as userSeed } from './data/users.json';
import userModel               from './models/userModel.js';


const dbServer =
{
	seed: async _ => {
		const users = await userModel.find({}).count();
		if (!users) {
			userModel.insertMany(userSeed);
		}
	},
	start : async _ => {
		mongoose.connect(
			`${configuration.db.uri}/${configuration.db.name}`,
			{
				useNewUrlParser    : true,
				useUnifiedTopology : true,
			}
		);
		mongoose.connection
			.on('open', _ => {
				console.info('Mongo DB server connected')
			})
			;
		dbServer.seed();
	},
}


export default dbServer;
