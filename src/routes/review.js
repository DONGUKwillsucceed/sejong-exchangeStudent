import express from 'express';
import * as reviewController from '../controller/review.js'
const route = express.Router();

route.get('/:country/:id', reviewController.getAdata);
route.get('/:country', reviewController.getList);
// route.post('/america/', );
// route.put('/america/:id', );
// route.delete('/america/:id', );

export default route;