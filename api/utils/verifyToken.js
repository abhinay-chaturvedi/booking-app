import jwt, { verify }  from "jsonwebtoken";
import { createError } from "./error.js";

export const verifyToken= (req,res,next)=>{
    console.log("verifyToken")
try{
    
    const token=req.cookies.access_token;
    if(!token){
        return next(createError(403,"You are not authenticated"));
    }
    jwt.verify(token,process.env.JWT_SECRET,(err,user)=>{
        if(err)return next(createError(403,"Token in not valid"));
        // console.log(user)
        req.user=user;
        next();
    });
    // const verified=jwt.verify(token,process.env.JWT_SECRET);
    // if(!verified)return next(createError(403,"Token in not valid"));
    //     req.user=verified;
    //     returnext();
  
}catch(err){
    console.log("catch block runs");
     return next(err);
}
}
export const verifyUser=(req,res,next)=>{
    try{
        verifyToken(req,res,()=>{
            // console.log("verifyUser");
            // console.log(e.message);
            if(req.user.id===req.params.id || req.user.iSAdmin){
             
                next();
            }else{
                return next(createError(403,"You are not authorized"));
            }
        })

    }catch(err){
        // console.log(req.user)
        return next(err);
    }
}
export const verifyAdmin=(req,res,next)=>{
    try{
        verifyToken(req,res,()=>{
            
            if(req.user.iSAdmin){
                next();
            }else{
                return next(createError(403,"You are not authorized"));
            }
        })

    }catch(err){
     
        return next(err);
    }
}