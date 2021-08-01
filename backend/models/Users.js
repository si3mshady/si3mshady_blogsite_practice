const mongoose = require('mongoose');

// create users schema 

const UserSchema = new mongoose({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
         type: String,
         required: true,
         unique: true,        
        },

    password: {
        type: String,
        required: true     
    },
    profilePic: {
        type: String,
        default: ''
    }
}, {timestamp: true})

module.exports = mongoose.model('User', UserSchema)