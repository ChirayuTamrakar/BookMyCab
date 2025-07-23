const axios =  require('axios'); 

module.exports.getAddressCoordinate = async (address) =>  {
    const apikey = process.env.GOOGLE_MAPS_API;   //somewhere 
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apikey}`;

    try{
        const response = await axios.get(url);
        if(response.data.status === 'OK'){
            const location = response.data.results[0].geometry.location;
            return{
                ltd: location.lat,
                lng: location.lng
            };
        } else {
            throw new Error ('Unable to fetch coordinates');
        }

    } catch(err){   
        console.error(err);
        throw err;
    }
};

module.exports.getDistanceAndTime = async (origin, destination) => {
    const apikey = process.env.GOOGLE_MAPS_API;   //somewhere 
    const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${encodeURIComponent(origin)}&destinations=${encodeURIComponent(destination)}&key=${apikey}`;

    try {
        const response = await axios.get(url);
        if (response.data.status === 'OK') {
            const element = response.data.rows[0].elements[0];
            if (element.status === 'OK') {
                return {
                    distance: element.distance.text,
                    duration: element.duration.text
                };
            } else {
                throw new Error('Unable to fetch distance and time');
            }
        } else {
            throw new Error('Error fetching data from Google Maps API');
        }
    } catch (err) {
        console.error(err);
        throw err;
    }
}

module.exports.getAutoSuggesstions = async (input) => {
    if(!input){
        throw new Error('input is required');
    }

    const apiKey = process.env.GOOGLE_MAPS_API;
    const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(input)}&key=${apiKey}`;
   
    try {
        const response = await axios.get(url);
        if (response.data.status == 'OK'){
            return response.data.predictions;
        } else {
            throw new Error('unable to fetch suggestions');
        }
    } catch (err){
        console.error(err);
        throw err;
    }
}


