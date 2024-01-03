import jwt from 'jsonwebtoken';
import { errHandler } from './error.js';

export const verifyToken = (req, res, next) => {
    const token = req.cookies.access_token;

    if (!token) return next(errHandler(401, 'You are not authenticated!'));

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return next(errHandler(403, 'Token is not valid!'));

        req.user = user;
        next();
    });


}