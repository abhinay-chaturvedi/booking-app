// importing the Hotel model from models
import Hotel from "../models/Hotel.js";

// CREATED IN NEW HOTEL
export const createHotel=async (req,res,next)=>{

    try{
        const newHotel=new Hotel(req.body);
        const hotel=await newHotel.save()
        res.status(200).json(hotel);
    }catch(err){
        next(err);
    }
}
// UPADATE THE HOTEL
export const updateHotel=async(req,res,next)=>{
    try{
        const updatedHotel=await Hotel.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json(updatedHotel)
    }catch(err){
        next(err);
    }
}
// DELETE THE PARTICULAR HOTEL
export const deleteHotel=async(req,res,next)=>{
    try{
      await Hotel.findByIdAndDelete(req.params.id)
        res.status(200).json("successfully deleted hotel")
    }catch(err){
   
        next(err);
    }
}
// GET SINGLE HOTEL
export const getHotel=async(req,res,next)=>{
    try{
        const hotel=await Hotel.findById(req.params.id);
        res.status(200).json(hotel);
    }catch(err){

        next(err);
    }
}
// GET ALL HOTEL
export const getAllHotel=async(req,res,next)=>{
    try{
        const hotels=await Hotel.find()
        res.status(200).json(hotels)
    }catch(err){
        next(err);
    }
}