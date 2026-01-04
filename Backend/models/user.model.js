 const mongoose = require('mongoose');
 const bcrypt = require('bcrypt');
 const jwt = require('jsonwebtoken');   //ALL this package and lib. is stored in node_module.

 const userSchema = new mongoose.Schema({
    fullname: {
        firstname: {
            type: String,
            required: true,
            minlength: [3, 'Firstname must be 3 char long']
        },
        lastname: {
            type: String,
            required:true,
            minlength: [3, 'Lastname must be 3 char long']
        }
    },
    email: {
            type: String,
            required: true,
            minlength: [6, 'email must be 6 char long']
    },
    password: {
            type: String,
            required: true,
            minlength: [6, 'Password must be 6 char long'],
            select: false,
    },
    socketId: {       //user for live tracking...
        type: String,
    }
 })

// methods → Lets you add custom functions to each document made from this schema.
// generateAuthToken → Name of
// the function you’re creating.
userSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({_id: this._id}, process.env.JWT_SECRET, {expiresIn: '24h'})
    return token;
}
userSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password, this.password)
}
userSchema.statics.hashPassword = async function (password){
    return await bcrypt.hash(password, 10);
}

const userModel = mongoose.model('user', userSchema);

module.exports= userModel;
{/*
Simple Rule to Classify:
📌 Use methods:
    When you need to work with data from a single document instance.
    When your function depends on this referring to the document's own fields.
    Use it when you need values like this._id, this.email, this.name, etc. from a specific user or record.

📌 Use statics
    When you need a utility/helper function for the entire model class.
    When your function doesn’t need any specific document’s data.
    Use it for tasks like hashing a password, finding users by a role, or custom model-wide queries.
*/}