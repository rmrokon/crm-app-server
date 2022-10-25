const mongoose = require('mongoose');

const leadSchema = mongoose.Schema({
    leadOwner: {
        type: String,
        trim: true
    },
    leadSource: {
        type: String,
        trim: true
    },
    leadStatus: {
        type: String,
        trim: true
    },
    rating: {
        type: String,
        trim: true
    },
    firstName: {
        type: String,
        trim: true
    },
    lastName: {
        type: String,
        trim: true
    },
    imageUrl: {
        type: String
    },
    leadName: {
        type: String,
        trim: true
    },
    company: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        trim: true
    },
    mobile: {
        type: Number,
        trim: true
    },
    address: {
        street: {
            type: String,
            trim: true
        },
        city: {
            type: String,
            trim: true
        },
        state: {
            type: String,
            trim: true
        },
        zipCode: {
            type: Number,
            trim: true
        },
        country: {
            type: String,
            trim: true
        },
    },
    emailOptOut: {
        type: String,
    },
    description: {
        type: String,
        trim: true
    }
})

const Lead = mongoose.model('Lead', leadSchema);

module.exports = Lead;