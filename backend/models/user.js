const mongoose = require('mongoose');
//this for creating schema for login
var userSchema = new mongoose.Schema({
    // username: {
    //     type: String,
    //     required: true
    // },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
})
var User = mongoose.model('user', userSchema)
module.exports = User;
