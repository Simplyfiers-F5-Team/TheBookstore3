'use strict'

import { Router } from 'express';
import loginController from '../controllers/loginController.js';


const loginRouter = Router()
	.get('/', loginController.checkLogin)
	.get('/login', loginController.showLogin)
	.post('/login', loginController.doLogin)
	;


export default loginRouter;
