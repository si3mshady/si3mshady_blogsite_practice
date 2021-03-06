const mongoose = require('mongoose');

// create post schema 

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    }, 
    description: {
         type: String,
         required: true
       
        },

    photo: {
        type: String,
        required: false
    },
    username: {
        type: String,
        required: false
    },

    categories: {
        type: Array,
        required: false
    }



}, {timestamp: true})

module.exports = mongoose.model('Post', PostSchema)