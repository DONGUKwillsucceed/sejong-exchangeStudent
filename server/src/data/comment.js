import { v1 } from "uuid";
import { db } from "../db/db.js";
import { LogicalError, NotFoundError } from "../error/error.js";

export async function readAll(id) {
  try {
    const queryResult = await db.comments.findMany({
      where: {
        postings_id: id,
      },
      select: {
        id: true,
        author: true,
        context: true,
        createdAt: true,
      },
    });
    if (!queryResult) {
      throw new LogicalError("LogicalError occured!!!!!");
    }
    return queryResult;
  } catch (e) {
    console.log(e);
  }
}

export async function postOne(param, body) {
  try {
    const { author, context, createdAt, updatedAt } = body;
    const id = v1();
    const queryResult = await db.comments.create({
      data: {
        id,
        author,
        context,
        createdAt: new Date(createdAt),
        updatedAt: new Date(updatedAt),
        postings_id: param,
      },
    });
    if (!queryResult) {
      throw new NotFoundError("NotFoundError occured!!!!");
    }

    return queryResult;
  } catch (e) {
    throw new LogicalError("LogicalError occured!!!!");
  }
}

export async function putOne(param, body) {
  try {
    const { author, context, updatedAt } = body;
    const queryResult = await db.comments.update({
      where: {
        id: param,
      },
      data: {
        author,
        context,
        updatedAt: new Date(updatedAt),
      },
    });

    if (!queryResult) {
      throw new NotFoundError("LogicalError occured!!!!");
    }
    return queryResult;
  } catch (e) {
    throw new LogicalError("LogicalError occured!!!!");
  }
}

export async function removeOne(param) {
  try {
    const queryResult = db.comments.delete({
      where: {
        id: param,
      },
    });

    if (!queryResult) {
      throw new NotFoundError("NotFoundError occured!!!!");
    }
    return queryResult;
  } catch (e) {
    throw new LogicalError("LogicalError occured!!!!");
  }
}
