import express from "express";
import * as userController from "../controller/user.js";
import { isAuth } from "../middleware/auth.js";

const route = express.Router();

route.get("/postings/:id", userController.getMyPostings);
route.get("/:id", userController.getAdata);
route.get("/", userController.getList);
route.post("/", userController.postData);
route.put("/:id", isAuth, userController.putData);
route.delete("/:id", isAuth, userController.removeData);
route.post("/refresh", userController.refresh);

export default route;
