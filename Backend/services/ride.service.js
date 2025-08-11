const rideModel = require('../models/ride.model')
const mapsService = require('../services/maps.service')
const crypto = require('crypto');


async function getFare(pickup, destination){
    if(!pickup || !destination){
        throw new Error('Pickup or destination not availabe');
    }

    try{
        var distanceTime = await mapsService.getDistanceAndTime(pickup, destination);
        if(!distanceTime || !distanceTime.distance || !distanceTime.duration){
            throw new Error('Unable to retrieve distance and time from getDistanceAndTime');
        }
        distanceTime = {
            distance: parseFloat(distanceTime.distance.replace(/[^0-9.]/g, '')), // Convert to number
            duration: parseFloat(distanceTime.duration.replace(/[^0-9.]/g, '')) // Convert to number    
        }
        console.log('Distance and time:', distanceTime);
        const baseFare = {
            auto: 30,
            car: 50,
            motorcycle: 20
        };
        const perKMRate = {
            auto: 10,
            car: 20,
            motorcycle: 8
        };
        const perMinuteRate = {
            auto: 4,
            car: 5,
            motorcycle: 2
        };
        const fare = {
            auto: baseFare.auto + ((perKMRate.auto)*(distanceTime.distance)) + (distanceTime.duration)*(perMinuteRate.auto),
            car: baseFare.car + ((perKMRate.car)*(distanceTime.distance)) + (distanceTime.duration)*(perMinuteRate.car),
            motorcycle: baseFare.motorcycle + ((perKMRate.motorcycle)*(distanceTime.distance)) + (distanceTime.duration)*(perMinuteRate.motorcycle)
        }
        console.log('Fare calculated:', fare);
        return fare;
    } catch(err){
        console.error('Error fetching distance and time:', err);
        throw err;
    }
}
module.exports.getFare = getFare;

async function generateOTP(num) {
     const otp = (await crypto.randomInt(Math.pow(10, num - 1), Math.pow(10, num))).toString() ;
     console.log('Generated OTP:', otp);
    return otp;
}

module.exports.createRide = async ({user, pickup, destination, vehicleType }) => {
    if(!user || !pickup || !destination ||!vehicleType){
        throw new Error('All feilds are require!');
    }

    const fare = await getFare(pickup, destination);
    const otp = await generateOTP(4);
    
    const ride = await rideModel.create({
        user: user,
        pickup,
        destination,
        fare: fare[vehicleType] ,
        otp
    })
    return ride;
}

