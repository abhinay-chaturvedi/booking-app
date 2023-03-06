// importing the User model from models
import User from "../models/User.js";


// UPADATE THE User
export const updateUser=async(req,res,next)=>{
    try{
        const updatedUser=await User.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json(updatedUser)
    }catch(err){
        next(err);
    }
}
// DELETE THE PARTICULAR User
export const deleteUser=async(req,res,next)=>{
    try{
      await User.findByIdAndDelete(req.params.id)
        res.status(200).json("successfully deleted hotel")
    }catch(err){
   
        next(err);
    }
}
// GET SINGLE User
export const getUser=async(req,res,next)=>{
    try{
        const user=await User.findById(req.params.id);
        res.status(200).json(user);
    }catch(err){

        next(err);
    }
}
// GET ALL User
export const getAllUser=async(req,res,next)=>{
    try{
        const users=await User.find()
        res.status(200).json(users)
    }catch(err){
        next(err);
    }
}