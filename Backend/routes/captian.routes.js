const express = require('express');
const router = express.Router();
const {body} = require('express-validator')
const captainController = require('../controllers/captain.controller');
const authMiddleware = require('../MIddlewares/auth.middleware');


// res of this error will generate form controller
router.post('/register',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min: 3}).withMessage('Password must be atleast 3 char long'),
    body('password').isLength({min: 6}).withMessage('Password must be atleast 3 char long'),
    body('vehicle.color').isLength({min: 3}).withMessage('Color must be atleast 3 char long'),
    body('vehicle.plate').isLength({min: 3}).withMessage('Plate must be atleast 3 char long'),
    body('vehicle.capacity').isNumeric().withMessage('Capacity must be a number'),  
    body('vehicle.vehicleType').isIn(['car', 'bike', 'auto']).withMessage('Vehicle type must be car, bike or auto'),
],
    captainController.registerCaptain
)

router.post('/login',[
    body('email').isEmail().withMessage('Invalid Message'),
    body('password').isLength({min:6}).withMessage('Password Must be atleast 6 character long')
],
    captainController.loginCaptain
)

router.get('/profile', authMiddleware.authCaptain, captainController.getCaptainProfile);

router.get('/logout', authMiddleware.authCaptain, captainController.logoutCaptain)



module.exports = router;