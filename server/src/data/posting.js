import { db } from "../db/db.js";
import { LogicalError, NotFoundError } from "../error/error.js";

export async function readAll(id) {
  try {
    const queryResult = await db.postings.findMany({
      where: {
        user_id: id,
      },
      select: {
        id: true,
        title: true,
        author: true,
        createdAt: true,
        user_id: true,
      },
    });
    console.log(queryResult);
    if (!queryResult) {
      throw new NotFoundError("NotFoundError occured!!!!");
    }

    return queryResult;
  } catch (e) {
    throw new LogicalError("LogicalError occured!!!!");
  }
}

export async function readOne(postID) {
  try {
    const queryResult = await db.postings.findUnique({
      where: {
        id: postID,
      },
      select: {
        title: true,
        author: true,
        createdAt: true,
        context: true,
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

export async function putOne(id, body) {
  try {
    const { title, author, context, updatedAt } = body;
    const queryResult = await db.postings.update({
      where: {
        id,
      },
      data: {
        title,
        author,
        context,
        updatedAt: new Date(updatedAt),
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

export async function removeOne(param) {
  try {
    const queryResult = db.postings.delete({
      where: {
        id: param,
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
