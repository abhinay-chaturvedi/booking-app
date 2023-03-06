import User from "../models/User.js";
import bcrypt from  "bcrypt"
import { createError } from "../utils/error.js";
import jwt from "jsonwebtoken"

export const register=async (req,res,next)=>{
    // return next(err)
    try{
        const {password}=req.body;
        const salt=bcrypt.genSaltSync(10);
        const hash=bcrypt.hashSync(password,salt);
     const newUser=new User({...req.body,password:hash});
     const savedUser=await newUser.save();
     res.status(200).send("User has been successfully created");
    }catch(err){
        next(err);
    }
}
export const login=async (req,res,next)=>{
    // return next(err)
    try{
        const {username}=req.body;
       
     const user=await User.findOne({username});
     if(!user)return next(createError(404,"User does not exist"));
     const valid= await bcrypt.compare(req.body.password,user.password);
     if(!valid)return next(createError(400,"Invalid credentials"));
     const {password,isAdmin,...rest}=user._doc;
    //  console.log(user._doc);
    const token=jwt.sign({id:user._id,isAdmin:user.isAdmin},process.env.JWT_SECRET)
     res.cookie("access_token",token,{
        httpOnly:true
     }).status(200).json(rest);
    }catch(err){
        next(err);
    }
}