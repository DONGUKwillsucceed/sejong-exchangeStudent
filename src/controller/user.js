import jwt from 'jsonwebtoken';
import * as userRepository from '../data/user.js';
function tokenGenerater(userName, isAdmin){
    const accessToken = jwt.sign({
        userName,
        isAdmin
    },
    'superSecretKey',
    {
        expiresIn: '1h'
    }
    )
    const refreshToken = jwt.sign({
        userName,
        isAdmin
    },
    'superSecretKeyForRefresh',
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
        const {userName, isAuth} = await userRepository.checkOut(userID, password);
        const token = tokenGenerater(userName, isAuth);
        res.status(200).json({userName, isAuth, token});
    }catch(err){
        res.status(404).send("ID or Password is wrong!!");
    }
}