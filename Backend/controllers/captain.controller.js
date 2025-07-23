const captainModel = require('../models/captain.model')
const captainService = require('../services/captain.service');
const { validationResult } = require('express-validator');
const blackListTokenModel = require('../models/blackistToken.model');


module.exports.registerCaptain = async (req, res, next) => {
    const errors = validationResult(req);
    
    if(!errors.isEmpty()){
        alert("Input data is not valid ! ---check console" );
        console.log(errors.array());
        return res.status(400).json({ errors: errors.array() });
    }
    const { fullname, email, password, vehicle } = req.body;

    //Duplication verification of email and plateNumber
    const isCaptainAlreadyExist = await captainModel.findOne({email});
    if(isCaptainAlreadyExist){
        console.log("Captain Already Exist");
        alert("Captain Already Exist");
        return res.status(400).json({message: "Captain Already Exist!"})
    }
    const plateNoAlreadyExist = await captainModel.findOne({ "vehicle.plate": vehicle.plate });

    if(plateNoAlreadyExist){
        console.log("Plate No. Already Exist");
        alert("Plate No. Already Exist");
        return res.status(400).json({message: "Plate Number Already Exist!"});
    }

    const hashedPassword = await captainModel.hashPassword(password);
    
    const captain = await captainService.createCaptain({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email:email,
        password: hashedPassword,
        color: vehicle.color,
        plate: vehicle.plate,
        capacity: vehicle.capacity,
        vehicleType: vehicle.vehicleType
    })

    const token = captain.generateAuthToken();
    res.cookie('token', token);
    await res.status(201).json({token, captain});
}

module.exports.loginCaptain = async (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    const captain = await captainModel.findOne({email}).select('+password');
    if(!captain){
        return res.status(401).json({message: "Invalid Email!"})
    }
    const isMatch = await captain.comparePassword(password);
    if(!isMatch){
        return res.status(401).json({ message: 'Invalid password' });
    }
    //Problem: If isMatch is false, you return, but if true, you don't set the cookie before responding. (This is minor, but your code is correct here.)
    const token = captain.generateAuthToken();  //IMP why not userModel.gener...    because it is methord not static   
    res.cookie('token', token);
    res.status(200).json({token, captain});
}

module.exports.getCaptainProfile = async (req, res, next)=>{
    res.status(200).json({captain: req.captain});
}

module.exports.logoutCaptain = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    await blackListTokenModel.create({token});
    res.clearCookie('token'); //This command removes the cookie named token from the client’s browser  //IMP:- Clearing the cookie is in response it does not affct the request. 
    res.status(200).json({ message: 'Logged out successfully' });
}  