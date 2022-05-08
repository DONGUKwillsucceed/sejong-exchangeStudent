import express from 'express';
import * as communityController from '../controller/community.js'
const route = express.Router();

route.get('/:country/:id', communityController.getAdata);
route.get('/:country', communityController.getList);
// route.post('/america/', );
// route.put('/america/:id', );
// route.delete('/america/:id', );

export default route;