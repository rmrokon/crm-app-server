const mongoose = require('mongoose');

const accountSchema = mongoose.Schema({
    accountOwner: {
        type: String,
        trim: true
    },
    ownership: {
        type: String,
        trim: true
    },
    industry: {
        type: String,
        trim: true
    },
    accountType: {
        type: String,
        trim: true
    },
    rating: {
        type: String,
        trim: true
    },
    accountName: {
        type: String,
        trim: true,
        required: true
    },
    firstName: {
        type: String,
        trim: true
    },
    lastName: {
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
    website: {
        type: String,
        trim: true
    },
    skype: {
        type: String,
        trim: true
    },
    phone: {
        type: Number,
        trim: true
    },
    mobile: {
        type: Number,
        trim: true
    },
    fax: {
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

accountSchema.methods.logger = function () {
    console.log(`Data saved for ${this.accountName}`);
};

const Account = mongoose.model('Account', accountSchema);

module.exports = Account;