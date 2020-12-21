'use strict';

import mongoose from 'mongoose';


const userModel = mongoose.model(
	'User',
	new mongoose.Schema(
		{
			userName: {
				type: String,
				require: true,
				unique: true,
			},
		}
	),
	'Users'
);


export default userModel;
