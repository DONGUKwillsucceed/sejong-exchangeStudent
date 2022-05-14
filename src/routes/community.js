import express from 'express';
import * as communityController from '../controller/community.js'
import { isAuth } from '../middleware/auth.js';
const route = express.Router();

route.get('/:country/:id', isAuth, communityController.getAdata);
route.get('/:country', isAuth, communityController.getList);
route.post('/:country', isAuth, communityController.postData);     //id 뺄게요
route.put('/:country/:id', isAuth, communityController.putData);   // country 필요없긴 함
route.delete('/:country/:id', isAuth, communityController.removeData); // 얘도 country 필요없긴 함

export default route;