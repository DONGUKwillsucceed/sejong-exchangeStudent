import * as userRepository from '../data/user.js'

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