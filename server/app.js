import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";

import userRoute from "./src/routes/user.js";
import announcementRoute from "./src/routes/announcement.js";
import qnaRoute from "./src/routes/qna.js";
import signinRoute from "./src/routes/signin.js";
import commentRoute from "./src/routes/commentRoute.js";
import documentRoute from "./src/routes/document.js";
import communityRoute from "./src/routes/community.js";
import reviewRoute from "./src/routes/review.js";
import mypostingRoute from "./src/routes/myposting.js";

const app = express();

app.use(express.json());
app.use(morgan());
app.use(helmet());
app.use(cors());

app.use("/signin", signinRoute);
app.use("/user", userRoute);
app.use("/myposting", mypostingRoute);
app.use("/announcement", announcementRoute);
app.use("/qna", qnaRoute);
app.use("/comment", commentRoute);
app.use("/document", documentRoute);
app.use("/community", communityRoute);
app.use("/review", reviewRoute);

app.use("/", (req, res, next) => {
  res.sendStatus(404);
});

app.use((error, req, res, next) => {
  res.sendStatus(500);
});

app.listen(8080, () => {
  console.log("active!");
});
