import express from "express";
import * as documentController from "../controller/document.js";
import { isAuth } from "../middleware/auth.js";
const route = express.Router();

route.get("/:country/:school/:id", documentController.getAdata); // 해당 게시물 출력
route.get("/:country/:school", documentController.getPostingList); // 해당 학교 게시물들 출력
route.get("/:country", documentController.getSchoolList); // 여러 학교들 출력
route.post("/:country/:school", isAuth, documentController.postData); // 게시물 create
route.put("/:country/:school/:id", isAuth, documentController.putData); // 게시물 update
route.delete("/:country/:school/:id", isAuth, documentController.removeData); // 게시물 delete

export default route;
