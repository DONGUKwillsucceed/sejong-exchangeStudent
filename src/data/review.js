// import { v1 } from 'uuid';
import db from '../db/db.js';
import { LogicalError } from '../error/error.js';

export async function readAll(_country){
  try{
      const {id} = await db.boardtypes.findFirst({      // boardType이 맞으면 바꾸도록 하겠습니다.
          where:{
              country:_country,
              type:'review'
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