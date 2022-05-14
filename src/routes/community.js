import express from 'express';
import * as communityController from '../controller/community.js'
const route = express.Router();

route.get('/:country/:id', communityController.getAdata);
route.get('/:country', communityController.getList);
route.post('/:country', communityController.postData);     //id 뺄게요
route.put('/:country/:id', communityController.putData);   // country 필요없긴 함
route.delete('/:country/:id', communityController.removeData); // 얘도 country 필요없긴 함

export default route;