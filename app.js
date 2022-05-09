import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import documentRoute from './src/routes/document.js';
import communityRoute from './src/routes/community.js';
import reviewRoute from './src/routes/review.js';

const app = express();

app.use(express.json());
app.use(morgan('tiny'));
app.use(helmet());
app.use(cors());

app.use('/document', documentRoute);
app.use('/community', communityRoute);
app.use('/review', reviewRoute);

app.use((req, res, next)=>{
    res.sendStatus(404);
});

app.use((error, req, res, next)=>{
    res.sendStatus(500);
});

app.listen(3000,()=>{
    console.log('active!');
});