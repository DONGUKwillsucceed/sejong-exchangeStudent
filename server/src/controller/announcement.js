import * as announcementRepository from "../data/announcement.js";

export async function getAdata(req, res) {
  try {
    const id = req.params.id;
    const queryResult = await announcementRepository.readOne(id);
    res.status(200).json(queryResult);
  } catch (err) {
    res.status(500).send(err.toJSON ? err.toJSON() : null);
  }
}

export async function getList(req, res) {
  try {
    const queryResult = await announcementRepository.readAll();
    res.status(200).json(queryResult);
  } catch (err) {
    res.status(500).send(err.toJSON ? err.toJSON() : null);
  }
}

export async function postData(req, res) {
  try {
    const body = req.body;
    const queryResult = await announcementRepository.postOne(body);
    res.status(200).json(queryResult);
  } catch (err) {
    res.status(500).send(err.toJSON ? err.toJSON() : null);
  }
}

export async function putData(req, res) {
  try {
    const id = req.params.id;
    const body = req.body;
    const queryResult = await announcementRepository.putOne(id, body);
    res.status(200).json(queryResult);
  } catch (err) {
    res.status(500).send(err.toJSON ? err.toJSON() : null);
  }
}

export async function removeData(req, res) {
  try {
    const id = req.params.id;
    const queryResult = await announcementRepository.removeOne(id);
    res.status(200).json(queryResult);
  } catch (err) {
    res.status(500).send(err.toJSON ? err.toJSON() : null);
  }
}

export async function getFive(req, res) {
  try {
    const queryResult = await announcementRepository.readFive();
    res.status(200).json(queryResult);
  } catch (err) {
    res.status(500).send(err.toJSON ? err.toJSON() : null);
  }
}
