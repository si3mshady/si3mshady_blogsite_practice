const mongoose = require('mongoose');

// create category schema 

const CategorySchema = new mongoose({
    name: {
        type: String,
        required: true,
        unique: true
    }

}, {timestamp: true})

module.exports = mongoose.model('Category', CategorySchema)