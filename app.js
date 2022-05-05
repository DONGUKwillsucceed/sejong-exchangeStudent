import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';

import userRoute from './src/routes/user.js';
import announcementRoute from './src/routes/announcement.js';
import qnaRoute from './src/routes/qna.js';
import signinRoute from './src/routes/signin.js'

const app = express();

app.use(express.json());
app.use(morgan());
app.use(helmet());
app.use(cors());

app.use('/signin', signinRoute);
app.use('/user', userRoute);
app.use('/announcement', announcementRoute);
app.use('/qna', qnaRoute);




app.use('/',(req, res, next)=>{
    res.sendStatus(404);
})

app.use((error, req, res, next)=>{
    res.sendStatus(500);
})

app.listen(3000,()=>{
    console.log('active!');
})