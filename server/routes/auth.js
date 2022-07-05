import express from 'express'
import {loginController, refreshController, logoutController} from '../controllers/auth.js';

// Note for later: we should refresh whenever checking the token for every request (middleware)

const authRouter = express.Router();


authRouter.post('/login', loginController);
authRouter.post('/refresh', refreshController);
authRouter.post('/logout', logoutController);


export {authRouter};


