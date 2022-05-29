import express from "express";
import * as announcementController from "../controller/announcement.js";
import { isAuth } from "../middleware/auth.js";

const route = express.Router();

route.get("/init", announcementController.getFive);
route.get("/:id", announcementController.getAdata);
route.get("/", announcementController.getList);
route.post("/", isAuth, announcementController.postData);
route.put("/:id", isAuth, announcementController.putData);
route.delete("/:id", isAuth, announcementController.removeData);

export default route;
