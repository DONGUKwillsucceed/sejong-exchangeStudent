import express from 'express';
import * as reviewController from '../controller/review.js'
import { isAuth } from '../middleware/auth.js';
const route = express.Router();

route.get('/:country/:id', isAuth, reviewController.getAdata);
route.get('/:country', isAuth, reviewController.getList);
route.post('/:country', isAuth, reviewController.postData);     //id 뺄게요
route.put('/:country/:id', isAuth, reviewController.putData);   // country 필요없긴 함
route.delete('/:country/:id', isAuth, reviewController.removeData); // 얘도 country 필요없긴 함

export default route;