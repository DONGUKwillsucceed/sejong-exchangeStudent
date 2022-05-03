import express from 'express';
import * as userController from '../controller/user.js'

const route = express.Router();

route.get('/:id',userController.getAdata);
route.get('/', userController.getList);
route.post('/', userController.postData);
route.put('/:id', userController.putData);
route.delete('/:id', userController.removeData);


export default route;