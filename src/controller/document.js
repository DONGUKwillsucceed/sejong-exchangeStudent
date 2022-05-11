import * as documentRepository from '../data/document.js';

export async function getAdata(req, res){
    try{
        const id = req.params.id;
        const queryResult = await documentRepository.readOne(id);
        res.status(200).json(queryResult);

    }catch(err){
        res.status(500).send(err.toJSON ? err.toJSON() : null)
    }
}

export async function getSchoolList(req, res){

    try{
        const country = req.params.country;
        const queryResult = await documentRepository.readSchoolAll(country);
        res.status(200).json(queryResult);

    }catch(err){
        res.status(500).send(err.toJSON ? err.toJSON() : null)
    }

}

export async function getPostingList(req, res){
  try{
      const country = req.params.country;
      const school = req.params.school;
      const queryResult = await documentRepository.readPostingAll(country, school);
      res.status(200).json(queryResult);

  }catch(err){
      res.status(500).send(err.toJSON ? err.toJSON() : null)
  }

}

export async function postData(req, res){
  try{
      const body = req.body;
      const country = req.params.country;
      const school = req.params.school;
      const queryResult = await documentRepository.postOne(body, country, school);
      res.status(200).json(queryResult);

  }catch(err){
      res.status(500).send(err.toJSON ? err.toJSON() : null)
  }

  
}

export async function putData(req, res){

  try{
      const id = req.params.id;
      const body = req.body;
      const queryResult = await documentRepository.putOne(id, body);
      res.status(200).json(queryResult);

  }catch(err){
      res.status(500).send(err.toJSON ? err.toJSON() : null)
  }

  
}

export async function removeData(req, res){

  try{
      const id = req.params.id;
      const queryResult = await documentRepository.removeOne(id);
      res.status(200).json(queryResult);

  }catch(err){
      res.status(500).send(err.toJSON ? err.toJSON() : null)
  }
  
}