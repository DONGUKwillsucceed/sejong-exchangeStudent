import { v1 } from "uuid";
import { db } from "../db/db.js";
import { LogicalError, NotFoundError } from "../error/error.js";

export async function readAll() {
  try {
    const { id } = await db.boardtypes.findFirst({
      where: {
        type: "announcement",
      },
      select: {
        id: true,
      },
    });
    const queryResult = await db.postings.findMany({
      where: {
        boardtypes_id: id,
      },
      select: {
        id: true,
        title: true,
        author: true,
        createdAt: true,
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
      throw new NotFoundError("NotFoundError occured!!!!");
    }
    return queryResult;
  } catch (e) {
    throw new LogicalError("LogicalError occured!!!!");
  }
}

export async function postOne(body) {
  try {
    const { title, author, context, user_id, createdAt, updatedAt } = body;
    const id = v1();
    const queryResult = await db.postings.create({
      data: {
        id,
        title,
        boardtypes_id: "announcement",
        author,
        context,
        createdAt: new Date(createdAt),
        updatedAt: new Date(updatedAt),
        school_id: "null",
        user_id,
      },
    });

    if (!queryResult) {
      throw new NotFoundError("LogicalError occured!!!!");
    }
    return queryResult;
  } catch (e) {
    console.log(e);
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

export async function readFive() {
  try {
    const { id } = await db.boardtypes.findFirst({
      where: {
        type: "announcement",
      },
      select: {
        id: true,
      },
    });
    const queryResult = await db.postings.findMany({
      where: {
        boardtypes_id: id,
      },
      select: {
        id: true,
        title: true,
        author: true,
        createdAt: true,
      },
      orderBy: {
        createdAt: "desc",
      },
      take: 5,
    });

    if (!queryResult) {
      throw new NotFoundError("NotFoundError occured!!!!");
    }

    return queryResult;
  } catch (e) {
    throw new LogicalError("LogicalError occured!!!!");
  }
}
