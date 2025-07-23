const express = require('express');
const router = express.Router();
const rideController = require('../controllers/ride.controller');
const {body} = require('express-validator');
const authMiddleware = require('../MIddlewares/auth.middleware');


router.post('/create', 
    authMiddleware.authUser,
    [   
        body('pickup').isString().isLength({min:3}).withMessage('Invalid pickUp Address'),
        body('destination').isString().isLength({min:3}).withMessage('Invalid pickUp Address'),
        body('vehicleType').isString().isIn(['auto', 'car', 'motorcycle']).withMessage('Invalid vehicle type'),
    ],
    rideController.createRide);

module.exports = router;