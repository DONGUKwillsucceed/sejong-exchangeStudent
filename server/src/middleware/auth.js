import jwt from 'jsonwebtoken';
import { config } from '../../config.js';


export async function isAuth(req, res, next){
    const authHeader = req.get('Authorization');
    if (!(authHeader && authHeader.startsWith('Bearer '))) {
        return res.status(401).json('WHO ARE YOU');
    }

    const token = authHeader.split(' ')[1];
    jwt.verify(token, config.jwt.accessToken, (error, decoded)=>{
        if(error){
            res.sendStatus(401);
        }
        else{
        console.log(decoded);
        const userID = decoded.userID;
        req.userID = userID;
        req.token = token;
        next();
        }
    })

    
}