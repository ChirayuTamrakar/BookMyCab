const mapServices = require('../services/maps.service');
const { validationResult } = require('express-validator');

module.exports.getCoordinates = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { address } = req.query;
        const coordinates = await mapServices.getAddressCoordinate(address);
        res.status(200).json({
            success: true,
            data: coordinates
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching coordinates',
            error: error.message
        });
    }
}

module.exports.getDistanceAndTime = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { origin, destination } = req.query;
        // Assuming you have a service method to get distance and time
        const distanceTime = await mapServices.getDistanceAndTime(origin, destination);
        res.status(200).json({
            success: true,
            data: distanceTime
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching distance and time',
            error: error.message
        });
    }
}

module.exports.getAutoCompleteSuggestions = async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() })
    }

    try{
        const { input } = req.query;
        const suggestions = await mapServices.getAutoSuggesstions(input);
        res.status(200).json({
            data: suggestions
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching autocomplete suggestions',
            error: error.message
        });
    }


}