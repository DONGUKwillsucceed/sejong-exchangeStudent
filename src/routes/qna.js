import express from 'express';
import * as qnaController from '../controller/qna.js'

const route = express.Router();

route.get('/:id',qnaController.getAdata);
route.get('/', qnaController.getList);
route.post('/', qnaController.postData);
route.put('/:id', qnaController.putData);
route.delete('/:id', qnaController.removeData);


export default route;