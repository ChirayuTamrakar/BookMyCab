const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const captainSchema =  new mongoose.Schema({
    fullname:{
        firstname: {
            type: String,
            required: true,
        },
        lastname: {
            type: String,
            required: true,
        }
    },
    email:{
        type: String,
        required:true,
        unique:true,
        lowercase:true,
        minlength:[6,'must be minimum 6 character long'],
        match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Please fill a valid email address'],
    },
    password:{
        type:String,
        required:true,
        select: false,
    },
    socketId: {
        type: String,
    },
    status:{
        type: String,
        enum: ['active', 'inactive', 'busy'],
        default: 'inactive',
    },
    vehicle: {
        color:{
            type: String,
            required: true,
            minlength: [3, 'Color must be minimum 3 character long'],
        },
        plate:{
            type: String,
            required: true,
            minlength: [3, 'Plate must be minimum 3 character long'],
            unique: true,
        },
        capacity:{
            type: Number,
            required:true,
            min: [1, 'Capicity must be minimum 1']   //Number use min not minlength.....
        },
        vehicleType: {
            type: String,
            required: true,
            enum: ['car', 'bike', 'auto'],
        }  
    },
    location:{
            lat:{
                type:Number
            },
            lng:{
                type:Number
            }
    }
})
captainSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({_id: this._id}, process.env.JWT_SECRET, { expiresIn: '24h' });
    return token;
}
captainSchema.methods.comparePassword = async function(password) {
    return await bcrypt.compare(password,this.password);
}

captainSchema.statics.hashPassword = async function(password) {
    return await bcrypt.hash(password, 10);
}

const captainModel = mongoose.model('captain', captainSchema);
module.exports = captainModel; 