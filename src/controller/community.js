import * as communityRepository from '../data/community.js';

export async function getAdata(req, res){
    try{
        const id = req.params.id;
        const queryResult = await communityRepository.readOne(id);
        res.status(200).json(queryResult);

    }catch(err){
        res.status(500).send(err.toJSON ? err.toJSON() : null)
    }
}

export async function getList(req, res){

    try{
        const country = req.params.country;
        const queryResult = await communityRepository.readAll(country);
        res.status(200).json(queryResult);

    }catch(err){
        res.status(500).send(err.toJSON ? err.toJSON() : null)
    }
    
}

export async function postData(req, res){

    try{
        const body = req.body;
        const country = req.params.country;
        const queryResult = await communityRepository.postOne(body, country);
        res.status(200).json(queryResult);

    }catch(err){
        res.status(500).send(err.toJSON ? err.toJSON() : null)
    }

    
}

export async function putData(req, res){

    try{
        const id = req.params.id;
        const body = req.body;
        const queryResult = await communityRepository.putOne(id, body);
        res.status(200).json(queryResult);

    }catch(err){
        res.status(500).send(err.toJSON ? err.toJSON() : null)
    }

    
}

export async function removeData(req, res){

    try{
        const id = req.params.id;
        const queryResult = await communityRepository.removeOne(id);
        res.status(200).json(queryResult);

    }catch(err){
        res.status(500).send(err.toJSON ? err.toJSON() : null)
    }
    
}