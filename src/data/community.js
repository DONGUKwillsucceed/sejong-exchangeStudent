import { v1 } from 'uuid';
import db from '../db/db.js';
import { LogicalError } from '../error/error.js';

export async function readAll(_country){
  try{
      const {id} = await db.boardtypes.findFirst({
          where:{
              country:_country,
              type:'community'
          },
          select:{
              id:true
          }
      });
      const queryResult = await db.postings.findMany({
          where:{
              boardtypes_id:id
          },
          select:{
              id:true,
              title:true,
              author:true,
              createdAt:true
          }
      });
      
      if(!queryResult){
          console.log('error');
          throw new LogicalError("LogicalError occured!!!!");
      }
  
      return queryResult;
  }catch(e){
      console.log(e);
  }
  
}

export async function readOne(param){
  try{
      const queryResult = db.postings.findUnique({
          where:{
              id:param
          },
          select:{
              title:true,
              author:true,
              createdAt:true,
              context:true
          }
      });
      
  
      if(!queryResult){
          throw new LogicalError("LogicalError occured!!!!");
      }
      return queryResult;
  }catch(e){
      console.log(e);
  }
}

export async function postOne(body,_country){
  try{
  const {title, author, context} = body;
  const {id:bId} = await db.boardtypes.findFirst({
      where:{
          country: _country,
          type: 'community'
      },
      select:{
          id:true
      }
  });      
  const {id:uId} = await db.users.findFirst({
    where:{
        type: 'nickName'
    },
    select:{
        id:true
    }
  });      
  const createdAt = new Date();
  const updatedAt = new Date();
  const id = v1();
  const queryResult = await db.postings.create({
      data:{
          id,
          title,
          boardtypes_id: bId,
          author,
          context,
          createdAt,
          updatedAt,
          school_id : null,
          user_id: uId
      }
  });

  return queryResult;
  }catch(e){
      console.log(e);
  }
}

export async function putOne(param, body){
  try{
      const {title, author, context} = body;
      const updatedAt = new Date();
      const {id:uId} = await db.users.findFirst({
        where:{
            type: 'nickName'
        },
        select:{
            id:true
        }
      });
      const queryResult = await db.postings.update({
          where:{
              id:param
          },
          data:{
              title,
              author,
              context,
              updatedAt,
              user_id: uId
          }
      });

      if(!queryResult){
          throw new LogicalError("LogicalError occured!!!!");
      }
      return queryResult;
  }catch(e){
      console.log(e);
  }
}

export async function removeOne(param){
  try{

      const queryResult = db.postings.delete({
          where:{
              id:param
          }
      })

      if(!queryResult){
          throw new LogicalError("LogicalError occured!!!!");
      }
      return queryResult;
  }catch(e){
      console.log(e);
  }
}