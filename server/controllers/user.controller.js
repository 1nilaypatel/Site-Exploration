import { errorHandler } from "../utils/error.js";
import bcryptjs from 'bcryptjs';
import User from '../models/user.model.js';


export const updateUser = async (req, res, next) => {
  if(req.user.id !== req.params.id){
    return next(errorHandler(401, "Unautharized to update others"));
  }
  try{
    if(req.body.password){
      req.body.password = bcryptjs.hashSync(req.body.password, 10);
    }
    const updateUser = await User.findByIdAndUpdate(
      req.params.id,{
        $set:{
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
          country: req.body.country,
          age: req.body.age,
        }
      },{new: true}
    );
    const {password: pass, ...rest} = updateUser._doc;
    res.status(200).json(rest);
  }catch(error){
    next(error);
  }
};

export const deleteUser = async (req, res, next) => {
  if(req.user.id !== req.params.id){
    return next(errorHandler(401, "Cannot delete other's account"));
  }
  try{
    await User.findByIdAndDelete(req.params.id);
    res.clearCookie("access_token");
    res.status(200).json("User account deleted");
  }catch(error){
    next(error);
  }
};

export const getUser = async (req, res, next) => {
  try{
    const user = await User.findById(req.params.id);
    if(!user){
      return next(errorHandler(404, "User not found!"));
    }
    const {password: pass, ...rest} = user._doc;
    res.status(200).json(rest);
  }catch(error){
    next(error);
  }
};

export const getUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    return res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};
