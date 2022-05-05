import express from 'express';
import * as userController from '../controller/user.js'

const route = express.Router();

route.post('/', userController.signin);

export default route;
