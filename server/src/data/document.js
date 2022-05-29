import { v1 } from "uuid";
import { db } from "../db/db.js";
import { LogicalError } from "../error/error.js";

export async function readOne(param) {
  try {
    const queryResult = db.postings.findUnique({
      where: {
        id: param,
      },
      select: {
        title: true,
        author: true,
        createdAt: true,
        context: true,
        user_id: true,
      },
    });

    if (!queryResult) {
      throw new LogicalError("LogicalError occured!!!!");
    }
    return queryResult;
  } catch (e) {
    console.log(e);
  }
}

export async function readSchoolAll(_country) {
  try {
    const { id } = await db.boardtypes.findFirst({
      where: {
        country: _country,
        type: "document",
      },
      select: {
        id: true,
      },
    });
    const queryResult = await db.school.findMany({
      where: {
        boardtypes_id: id,
      },
      select: {
        id: true,
        schoolName: true,
        latitude: true,
        longitude: true,
      },
    });

    if (!queryResult) {
      console.log("error");
      throw new LogicalError("LogicalError occured!!!!");
    }

    return queryResult;
  } catch (e) {
    throw new LogicalError("LogicalError occured!!!!");
  }
}

export async function readPostingAll(_country, _school) {
  try {
    const { id } = await db.school.findFirst({
      where: {
        id: _school,
      },
      select: {
        id: true,
      },
    });
    const queryResult = await db.postings.findMany({
      where: {
        school_id: id,
      },
      select: {
        id: true,
        title: true,
        author: true,
        createdAt: true,
      },
    });

    if (!queryResult) {
      console.log("error");
      throw new LogicalError("LogicalError occured!!!!");
    }

    return queryResult;
  } catch (e) {
    throw new LogicalError("LogicalError occured!!!!");
  }
}

export async function postOne(body, _country, _school) {
  try {
    const { title, author, context, user_id, createdAt, updatedAt } = body;
    const id = v1();
    const { id: bId } = await db.boardtypes.findFirst({
      where: {
        country: _country,
        type: "document",
      },
      select: {
        id: true,
      },
    });
    const { id: sId } = await db.school.findFirst({
      where: {
        boardtypes_id: bId,
        id: _school,
      },
      select: {
        id: true,
      },
    });
    const queryResult = await db.postings.create({
      data: {
        id,
        title,
        boardtypes_id: bId,
        author,
        context,
        createdAt: new Date(createdAt),
        updatedAt: new Date(updatedAt),
        school_id: sId,
        user_id,
      },
    });

    return queryResult;
  } catch (e) {
    throw new LogicalError("LogicalError occured!!!!");
  }
}

export async function putOne(param, body) {
  try {
    const { title, author, context, updatedAt } = body;
    const queryResult = await db.postings.update({
      where: {
        id: param,
      },
      data: {
        title,
        author,
        context,
        updatedAt: new Date(updatedAt),
      },
    });

    return queryResult;
  } catch (e) {
    throw new LogicalError("LogicalError occured!!!!");
  }
}

export async function removeOne(param) {
  try {
    const queryResult = db.postings.delete({
      where: {
        id: param,
      },
    });

    if (!queryResult) {
      throw new LogicalError("LogicalError occured!!!!");
    }
    return queryResult;
  } catch (e) {
    throw new LogicalError("LogicalError occured!!!!");
  }
}
