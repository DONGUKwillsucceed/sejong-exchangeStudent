import express from 'express';
import * as announcementController from '../controller/announcement.js'

const route = express.Router();

route.get('/:id',announcementController.getAdata);
route.get('/', announcementController.getList);
route.post('/', announcementController.postData);
route.put('/:id', announcementController.putData);
route.delete('/:id', announcementController.removeData);


export default route;