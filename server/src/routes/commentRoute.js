import express from "express";
import * as commentController from "../controller/comment.js";
import { isAuth } from "../middleware/auth.js";

const route = express.Router();

route.get("/:id", commentController.getList);
route.post("/:id", commentController.postData);
route.put("/:id", isAuth, commentController.putData);
route.delete("/:id", isAuth, commentController.removeData);

export default route;
