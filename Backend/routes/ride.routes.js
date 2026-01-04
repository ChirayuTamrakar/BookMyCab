const express = require('express');
const router = express.Router();
const rideController = require('../controllers/ride.controller');
const {body, query} = require('express-validator');
const authMiddleware = require('../MIddlewares/auth.middleware');


router.post('/create', 
    authMiddleware.authUser,
    [   
        body('pickup').isString().isLength({min:3}).withMessage('Invalid pickUp Address'),
        body('destination').isString().isLength({min:3}).withMessage('Invalid pickUp Address'),
        body('vehicleType').isString().isIn(['auto', 'car', 'motorcycle']).withMessage('Invalid vehicle type'),
    ],
    rideController.createRide);

router.get('/get-fare',
    authMiddleware.authUser,
    [
        query('pickup').isString().isLength({min:3}).withMessage('Invalid pickUp Address'),
        query('destination').isString().isLength({min:3}).withMessage('Invalid destination Address'),
    ],
    rideController.getFare);

router.post('/confirm',
    authMiddleware.authCaptain,
    body('rideId').isMongoId().withMessage('Invalid ride id'),
    rideController.confirmRide
)

router.get('/start-ride',
    authMiddleware.authCaptain,
    query('rideId').isMongoId().withMessage('Invalid ride id'),
    query('otp').isString().isLength({ min: 6, max: 6 }).withMessage('Invalid OTP'),
    rideController.startRide
)

router.post('/end-ride',
    authMiddleware.authCaptain,
    body('rideId').isMongoId().withMessage('Invalid ride id'),
    rideController.endRide
)



module.exports = router;