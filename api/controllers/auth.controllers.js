import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
import {errorHandler} from '../utils/error.js';
import jwt from 'jsonwebtoken';

export const signup = async(req,res,next) => {

    const{username,email,password} = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User ({username, email, password: hashedPassword});

    try {
        await newUser.save();
        res.status(200).json('User created succesfully');
        
    } catch (error) {
        next(error);

    }
};
export const signin = async(req,res,next) => {

    const{email, password} = req.body;
  try {
    
      const validUser = await User.findOne({email});
      if (!validUser)
        return next(errorHandler(404, "User not find"));
      const validPassword = bcryptjs.compareSync(password, validUser.password);
      if(!validPassword) return next(errorHandler(403, 'Wrong Credintials'));
      const token  = jwt.sign({id:validUser._id}, process.env.SECRET_KEY);
      const {password:pass, ...rest} = validUser._doc
      res
      .cookie('access token', token,{httpOnly:true})
    .status(200)
    .json(rest);
      
  } catch (error) {
    next(error);
  }
};