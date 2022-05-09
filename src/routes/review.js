import express from 'express';
import * as reviewController from '../controller/review.js'
const route = express.Router();

route.get('/:country/:id', reviewController.getAdata);
route.get('/:country', reviewController.getList);
route.post('/:country', reviewController.postData);     //id 뺄게요
route.put('/:country/:id', reviewController.putData);   // country 필요없긴 함
route.delete('/:country/:id', reviewController.removeData); // 얘도 country 필요없긴 함

export default route;