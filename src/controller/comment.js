import * as commentRepository from '../data/comment.js';


export async function getList(req, res){

    try{
        const id = req.params.id;
        const queryResult = await commentRepository.readAll(id);
        res.status(200).json(queryResult);

    }catch(err){
        res.status(500).send(err.toJSON ? err.toJSON() : null)
    }
    
}

export async function postData(req, res){

    try{
        const body = req.body;
        const id = req.params.id;
        const queryResult = await commentRepository.postOne(id, body);
        res.status(200).json(queryResult);

    }catch(err){
        res.status(500).send(err.toJSON ? err.toJSON() : null)
    }

    
}

export async function putData(req, res){

    try{
        const id = req.params.id;
        const body = req.body;
        const queryResult = await commentRepository.putOne(id, body);
        res.status(200).json(queryResult);

    }catch(err){
        res.status(500).send(err.toJSON ? err.toJSON() : null)
    }

    
}

export async function removeData(req, res){

    try{
        const id = req.params.id;
        const queryResult = await commentRepository.removeOne(id);
        res.status(200).json(queryResult);

    }catch(err){
        res.status(500).send(err.toJSON ? err.toJSON() : null)
    }
    
}