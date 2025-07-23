const express = require('express');
const router = express.Router();
const { body } = require("express-validator")
const userController = require('../controllers/user.controller');
const authMiddleware = require('../MIddlewares/auth.middleware');



// res of this error will generate form controller
router.post('/register',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min:3}).withMessage('Firstname must be at least 3 character long'),
    body('password').isLength({ min:6 }).withMessage('Password must be at least 6 character long')
],
    userController.registerUser
)

router.post('/login',[
    body('email').isEmail().withMessage('Invalid Message'),
    body('password').isLength({min:6}).withMessage('Password Must be atleast 6 character long')
],
    userController.loginUser
)

router.get('/profile', authMiddleware.authUser, userController.getUserProfile);

router.get('/logout', authMiddleware.authUser, userController.logoutUser)





module.exports = router;