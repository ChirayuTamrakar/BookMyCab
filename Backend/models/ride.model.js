const mongoose = require('mongoose')

const rideSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    captain: {
        type: String,
        ref: 'Captain'
    },
    pickup: {
        type: String,
        required: true,   
    },
    destination: {
        type: String,
        required: true,   
    },
    fare:{
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'accepted', 'completed', 'cancelled','ongoing'],
        default: 'pending',
    },
    duration:{
        type: Number
    }, //IN Seconds
    distance: {
        type: Number
    }, // IN meters
    paymentID: {
        type: String
    },
    orderId:{
        type: String
    },
    signature: {
        type: String
    },
    otp:{
        type: String,
        select: false,
        required: true    
    }
})


module.exports = mongoose.model('ride', rideSchema );
{/* This line creates a Mongoose model named "ride" using the rideSchema you defined, and exports it for use in other files.
    mongoose.model('ride', rideSchema):
    Registers a model called "ride" in Mongoose, which will use the rideSchema structure and map to the "rides" collection in MongoDB.
    module.exports = ...:
    Makes this model available to import in other files (e.g., controllers, services).*/}