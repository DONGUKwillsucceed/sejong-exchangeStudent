import { v1 } from 'uuid';
import { db } from '../db/db.js';
import { LogicalError } from '../error/error.js';

export async function readAll(id){
    try{
        const queryResult = await db.comments.findMany({
            where:{
                postings_id : id
            },
            select:{
                id:true,
                author:true,
                context:true,
                createdAt:true
            }
        });
        if(!queryResult){
            throw new LogicalError("LogicalError occured!!!!!");
        }
        return queryResult;
    }catch(e){
        console.log(e);
    }
}

export async function postOne(param, body){
    try{
    const {author, context} = body;
    const createdAt = new Date();
    const updatedAt = new Date();
    const id = v1();
    const queryResult = await db.comments.create({
        data:{
            id,
            author,
            context,
            createdAt,
            updatedAt,
            postings_id: param
        }
    });

    return queryResult;
    }catch(e){
        console.log(e);
    }
}

export async function putOne(param, body){
    try{
        const {author, context} = body;
        const updatedAt = new Date();
        const queryResult = await db.comments.update({
            where:{
                id:param
            },
            data:{
                author,
                context,
                updatedAt
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

        const queryResult = db.comments.delete({
            where:{
                id:param
            }
        })

        if(!queryResult){
            throw new LogicalError("LogicalError occured!!!!");
        }
        return queryResult;
    }catch(e){
        console.log(e);
    }
}