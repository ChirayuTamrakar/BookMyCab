const express = require('express');
const router = express.Router();
const mapController = require('../controllers/maps.controller');
const authMiddleware = require('../MIddlewares/auth.middleware');
const { query} = require('express-validator');

router.get('/get-coordinates',
        query('address').isString().isLength({ min: 1 }).withMessage('Address is required')
    , authMiddleware.authUser, mapController.getCoordinates)

router.get('/get-distance-time',
        query('origin').isString().withMessage('Origin is required'),
        query('destination').isString().withMessage('Destination is required')
    , authMiddleware.authUser, mapController.getDistanceAndTime);

router.get('/get-suggestions',
        query('input').isString().withMessage('Input is required')
    , mapController.getAutoCompleteSuggestions);

module.exports = router;