import * as reviewRepository from '../data/review.js';

export async function getAdata(req, res){
    try{
        const id = req.params.id;
        const queryResult = await reviewRepository.readOne(id);
        res.status(200).json(queryResult);

    }catch(err){
        res.status(500).send(err.toJSON ? err.toJSON() : null)
    }
}

export async function getList(req, res){

    try{
        const country = req.params.country;
        const queryResult = await reviewRepository.readAll(country);
        res.status(200).json(queryResult);

    }catch(err){
        res.status(500).send(err.toJSON ? err.toJSON() : null)
    }
    
}