const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const about = new Schema({

    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
    },
    number: {
        type: Number,
    },    
    intrest: {
        type: String,
    },
    date: {
        type: String,
    },

}, {
        timestamps: { createdAt: 'createdAt', updatedAt: 'lastUpdate' }
    })


var About  = mongoose.model('About', about)
module.exports = About;