import * as postingRepository from "../data/posting.js";

export async function getAllData(req, res) {
  try {
    const id = req.params.id;
    const queryResult = await postingRepository.readAll(id);
    res.status(200).json(queryResult);
  } catch (err) {
    res.status(500).send(err.toJSON ? err.toJSON() : null);
  }
}

export async function getAdata(req, res) {
  try {
    const postID = req.params.postid;
    const queryResult = await postingRepository.readOne(postID);
    res.status(200).json(queryResult);
  } catch (err) {
    res.status(500).send(err.toJSON ? err.toJSON() : null);
  }
}

export async function putData(req, res) {
  try {
    const postID = req.params.postid;
    const body = req.body;
    const queryResult = await postingRepository.putOne(postID, body);
    res.status(200).json(queryResult);
  } catch (err) {
    res.status(500).send(err.toJSON ? err.toJSON() : null);
  }
}

export async function removeData(req, res) {
  try {
    const postID = req.params.postid;
    const queryResult = await postingRepository.removeOne(postID);
    res.status(200).json(queryResult);
  } catch (err) {
    res.status(500).send(err.toJSON ? err.toJSON() : null);
  }
}
