import express from "express";
import * as myPostingsController from "../controller/myposting.js";

const route = express.Router();

route.get("/:id/:postid", myPostingsController.getAdata);
route.get("/:id", myPostingsController.getAllData);
route.put("/:id/:postid", myPostingsController.putData);
route.delete("/:id/:postid", myPostingsController.removeData);

export default route;
