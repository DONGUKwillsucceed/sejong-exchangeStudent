import jwt from 'jsonwebtoken';
import { config } from '../../config.js';
import * as userRepository from '../data/user.js';
function tokenGenerater(userName, ID,isAdmin){
    const accessToken = jwt.sign({
        userName,
        ID,
        isAdmin
    },
    config.jwt.accessToken,
    {
        expiresIn: '1h'
    }
    )
    const refreshToken = jwt.sign({
        userName,
        ID,
        isAdmin
    },
    config.jwt.refreshToken,
    {
        expiresIn: '14d'
    }
    );
    return {accessToken, refreshToken};
}

export async function getAdata(req, res){
    try{
        const id = req.params.id;
        const queryResult = await userRepository.readOne(id);
        res.status(200).json(queryResult);

    }catch(err){
        res.status(500).send(err.toJSON ? err.toJSON() : null)
    }
    
}

export async function getList(req, res){
    try{

        const queryResult = await userRepository.readAll();
        res.status(200).json(queryResult);
        
    }catch(err){
        res.status(500).send(err.toJSON ? err.toJSON() : null)
    }
    
}

export async function postData(req, res){
    try{
        const body = req.body;
        const queryResult = await userRepository.postOne(body);
        res.status(200).json(queryResult);
        
    }catch(err){
        res.status(500).send(err.toJSON ? err.toJSON() : null)
    }
    
}

export async function putData(req, res){
    try{
        const id = req.params.id;
        const body = req.body;
        const queryResult = await userRepository.putOne(id, body);
        if(!queryResult){
            console.log("fuck!");
        }
        res.status(200).json(queryResult);

    }catch(err){
        res.status(500).send(err.toJSON ? err.toJSON() : null)
    }
}

export async function removeData(req, res){
    try{
        const id = req.params.id;
        const queryResult = await userRepository.removeOne(id);
        res.status(200).json(queryResult);
        
    }catch(err){
        res.status(500).send(err.toJSON ? err.toJSON() : null)
    }
    
}

export async function signin(req, res){
    try{
        console.log('isIn?');
        const {userID, password} = req.body;
        const response = await userRepository.checkOut(userID, password);
        const {userName, isAuth} = response;
        const ID = response.userID;
        const token = tokenGenerater(userName, ID, isAuth);
        console.log(token);
        res.status(200).json({userName, isAuth, token});
    }catch(err){
        res.status(404).send("ID or Password is wrong!!");
    }
}

export async function refresh(req, res){
    try{
        const {refreshToken} = req.body;
        if(!refreshToken){
            res.sendStatus(401);
        }
        jwt.verify(
            refreshToken,
            config.jwt.refreshToken,
            (error, decoded)=>{
                if(error){
                    res.sendStatus(401);
                }
                else{
                    console.log(decoded);
                    const {userID, isAdmin, userName} = decoded;
                    const {accessToken} = tokenGenerater(userName, userID, isAdmin);
                    res.status(200).json({accessToken});
                }
            }
        )
    }catch(err){
        res.status(500).send(err.toJSON ? err.toJSON() : null);
    }
}