import bcrypt, { hash } from "bcrypt";
import { v1 } from "uuid";
import { config } from "../../config.js";
import { db } from "../db/db.js";
import { LogicalError } from "../error/error.js";

export async function readAll() {
  try {
    const queryResult = db.users.findMany();

    if (!queryResult) {
      throw new LogicalError("LogicalError occured!!!!");
    }
    return queryResult;
  } catch (e) {
    throw new LogicalError("LogicalError occured!!!!");
  }
}

export async function readOne(param) {
  try {
    const queryResult = await db.users.findUnique({
      where: {
        id: param,
      },
      select: {
        id: true,
        userID: true,
        nickName: true,
        isAuth: true,
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

export async function postOne(body) {
  try {
    const { userID, password, userName, nickName, isAuth } = body;
    const id = v1();
    const hashnum = parseInt(config.hash.rounds);
    const salt = await bcrypt.genSalt(hashnum);
    const hashed = await bcrypt.hash(password, salt);
    const queryResult = await db.users.create({
      data: {
        id,
        userID,
        password: hashed,
        userName,
        nickName,
        isAuth,
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

export async function putOne(param, body) {
  try {
    const { userID, password, userName, nickName, isAuth } = body;
    const queryResult = await db.users.update({
      where: {
        id: param,
      },
      data: {
        userID,
        password,
        userName,
        nickName,
        isAuth,
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

export async function removeOne(param) {
  try {
    const queryResult = await db.users.delete({
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

export async function checkOut(userID, password) {
  try {
    const queryResult = await db.users.findFirst({
      where: {
        userID,
      },
      select: {
        id: true,
        nickName: true,
        userID: true,
        password: true,
        isAuth: true,
      },
    });
    const hashed = queryResult.password;
    const result = await bcrypt.compare(password, hashed);
    if (result) {
      const { nickName, userID, id, isAuth } = queryResult;
      return { nickName, userID, id, isAuth };
    } else {
      return;
    }
  } catch (e) {
    throw new LogicalError("LogicalError occured!!!!");
  }
}

export async function isUser(userID) {
  try {
    const queryResult = await db.users.findFirst({
      where: {
        userID,
      },
    });
    if (queryResult) {
      return queryResult;
    } else {
      return;
    }
  } catch (e) {
    throw new LogicalError("LogicalError occured!!!!");
  }
}

export async function readMyPostings(userID) {
  try {
    const queryResult = await db.postings.findMany({
      where: {
        user_id: userID,
      },
      select: {
        id: true,
        title: true,
        author: true,
        createdAt: true,
      },
    });
    if (queryResult) {
      return queryResult;
    } else {
      return;
    }
  } catch (e) {
    throw new LogicalError("LogicalError occured!!!!");
  }
}
