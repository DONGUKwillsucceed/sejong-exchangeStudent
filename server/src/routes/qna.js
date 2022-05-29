import express from "express";
import * as qnaController from "../controller/qna.js";
import { isAuth } from "../middleware/auth.js";

const route = express.Router();

route.get("/init", qnaController.getFive);
route.get("/:id", qnaController.getAdata);
route.get("/", qnaController.getList);
route.post("/", isAuth, qnaController.postData);
route.put("/:id", isAuth, qnaController.putData);
route.delete("/:id", isAuth, qnaController.removeData);

export default route;
