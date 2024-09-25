import User from '../models/user.model.js';
import bcrypt from 'bcryptjs'
import { errHandler } from '../utils/error.js';
import jwt from 'jsonwebtoken';

export const signup = async (req, res, next) => {
    const { username, email, password, age, musicpreferences } = req.body;
    const hashedPassword = await bcrypt.hashSync(password, 10);
    const newUser = new User({ username, email, password: hashedPassword, age, musicpreferences  });
    try{
        await newUser.save()
        res.status(201).json({ message: 'User created' });
    }catch(err){
        next(err);
    }
};

export const login = async (req, res, next) => {
    const {email, password} = req.body;
    try{
        const validUser = await User.findOne({ email });
        if(!validUser) return next(errHandler(404, 'User not found'));
        const validPassword = await bcrypt.compareSync(password, validUser.password);
        if(!validPassword) return next(errHandler(401, 'Wrong Credentials'));
        const token = jwt.sign({id: validUser._id}, process.env.JWT_SECRET);
        const {password: hashedPassword, ...rest} = validUser._doc;
        res.cookie('access_token', token, {httpOnly: true}, {
            maxAge: 24 * 60 * 60 * 1000,
        }).status(200).json(rest);
    }catch(error){
        next(error);
    }
}

export const google = async (req, res, next) => {
    try{
        const user = await User.findOne({email: req.body.email});

        if(user){
            const token = jwt.sign({id: user._id}, process.env.JWT_SECRET);
            const {password: hashedPassword, ...rest} = user._doc;
            res.cookie('access_token', token, {httpOnly: true}, {
                maxAge: 24 * 60 * 60 * 1000,
            }).status(200).json(rest);
        }
        else{
            const generatedPassword = Math.random().toString(36).slice(-8) + Math.random().toString(36).slice(-8);
            const hashedPassword = await bcrypt.hashSync(generatedPassword, 10);
            const newUser = new User({username:
          req.body.name.split(' ').join('').toLowerCase() +
          Math.random().toString(36).slice(-8),
          email: req.body.email,
          password: hashedPassword,
          profilePicture: req.body.photo,});
            await newUser.save();
            const token = jwt.sign({id: newUser._id}, process.env.JWT_SECRET);
            const {password: hashedPassword2, ...rest} = newUser._doc;
            res.cookie('access_token', token, {httpOnly: true}, {
                maxAge: 24 * 60 * 60 * 1000,
            }).status(200).json(rest);

        }
    }catch(error){
        next(error);
    }
}

export const github = async (req, res, next) => {
    try{
        const user = await User.findOne({email: req.body.email});

        if(user){
            const token = jwt.sign({id: user._id}, process.env.JWT_SECRET);
            const {password: hashedPassword, ...rest} = user._doc;
            res.cookie('access_token', token, {httpOnly: true}, {
                maxAge: 24 * 60 * 60 * 1000,
            }).status(200).json(rest);
        }
        else{
            const generatedPassword = Math.random().toString(36).slice(-8) + Math.random().toString(36).slice(-8);
            const hashedPassword = await bcrypt.hashSync(generatedPassword, 10);
            const newUser = new User({username:
          req.body.name.split(' ').join('').toLowerCase() +
          Math.random().toString(36).slice(-8),
        email: req.body.email,
        password: hashedPassword,
        profilePicture: req.body.photo,});
            await newUser.save();
            const token = jwt.sign({id: newUser._id}, process.env.JWT_SECRET);
            const {password: hashedPassword2, ...rest} = newUser._doc;
            res.cookie('access_token', token, {httpOnly: true}, {
                maxAge: 24 * 60 * 60 * 1000,
            }).status(200).json(rest);

        }
    }catch(error){
        next(error);
    }
}

export const signout = async (req, res, next) => {
    res.clearCookie('access_token').status(200).json({message: 'Signout successfully'});
}