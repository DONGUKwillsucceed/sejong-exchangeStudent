import { v1 } from 'uuid';
import { db } from '../db/db.js';
import { LogicalError } from '../error/error.js';


export async function readAll(){
    try{
        const queryResult = db.users.findMany();

        if(!queryResult){
            throw new LogicalError("LogicalError occured!!!!");
        }
        return queryResult;
    }catch(e){
        console.log(e);
    }
    
}

export async function readOne(param){
    try{
        const queryResult = await db.users.findUnique({
            where:{
                id : param
            }
        });
    
        if(!queryResult){
            throw new LogicalError("LogicalError occured!!!!");
        }
        return queryResult;
    }catch(e){
        console.log(e);
    }
    
}

export async function postOne(body){
    try{
        const {userID, password, userName, nickName, isAuth} = body;
        const id = v1();
        const queryResult = await db.users.create({
            data:{
                id,
                userID,
                password,
                userName,
                nickName,
                isAuth
            }
    });

    if(!queryResult){
        throw new LogicalError("LogicalError occured!!!!");
    }
    return queryResult;
    }catch(e){
        console.log(e);
    }
    
}

export async function putOne(param, body){
    try{
        const {userID, password, userName, nickName, isAuth} = body;
        const queryResult = await db.users.update({
            where:{
                id:param
            },
            data:{
                userID,
                password,
                userName,
                nickName,
                isAuth
            }
        });

        if(!queryResult){
            throw new LogicalError("LogicalError occured!!!!");
        }
    
        return queryResult;
    }catch(e){
        console.log(e);
    }
    
}

export async function removeOne(param){
    try{
        const queryResult = await db.users.delete({
            where:{
                id : param
            }
        });
    
        if(!queryResult){
            throw new LogicalError("LogicalError occured!!!!");
        }
        return queryResult;
    }catch(e){
        console.log(e);
    }
    
}