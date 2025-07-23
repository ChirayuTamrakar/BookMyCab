const captainModel = require('../models/captain.model');
const userModel = require('../models/user.model');
const jwt = require('jsonwebtoken');
const blacklistTokenModel = require('../models/blackistToken.model');

// Middleware to authenticate user -> Check if token exist
//                                 -> is token blacklisted
//                                 -> Find user form the token and return user.
module.exports.authUser = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1]; //IMP ?  - 
    console.log('Token from cookie or header:', token);
    // Check if token exists
    if (!token){                     
        return res.status(401).json({ message: 'Unauthorized ' });
    }

    const isBlacklisted = await blacklistTokenModel.findOne({ token: token });
   
    if(isBlacklisted){
        return res.status(401).json({ message: 'Token is blacklisted' });
    }

    //This decoded part goes in try and catch block:-
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await userModel.findById(decoded._id);
        req.user = user;
        return next();
    }catch(err){
        return res.status(402).json({message: 'Token expired '})
    }
}

module.exports.authCaptain = async (req, res,next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    if (!token){                     
        return res.status(403).json({ message: 'Unauthorized ' });
    }
    const isBlacklisted = await blacklistTokenModel.findOne({ token: token });
   
    if(isBlacklisted){
        return res.status(404).json({ message: 'Token is blacklisted you captain' });
    }

    //This decoded part goes in try and catch block:-
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const captain = await captainModel.findById(decoded._id);
        req.captain = captain;
        return next();
        console.log('see the captain------>',captain);
    }catch(err){
        return res.status(405).json({message: 'Token expired '})
    }
    
}

