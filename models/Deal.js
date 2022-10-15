const mongoose = require('mongoose');

// Schema Design
const dealSchema = mongoose.Schema({
    dealOwner: {
        type: String,
        trim: true
    },
    leadSource: {
        type: String,
        trim: true
    },
    accountName: {
        type: String,
        trim: true
    },
    type: {
        type: String,
        trim: true
    },
    stage: {
        type: String,
        trim: true
    },
    contactName: {
        type: String,
        trim: true
    },
    campaignSource: {
        type: String,
        trim: true
    },
    dealName: {
        type: String,
        trim: true,
        required: true
    },
    amount: {
        type: Number,
    },
    nextStep: {
        type: String,
    },
    probability: {
        type: Number,
    },
    expectedRevenue: {
        type: Number,
    },
    closingDate: {
        type: String,
    },
    description: {
        type: String,
    },
});

// Mongoose Middleware for saving data: pre/post

// dealSchema.pre('save', function (next) {
//     console.log('Before saving data!');
//     if (this.amount < 1000) {
//         this.stage = 'inactive';
//     }
//     next();
// })

// dealSchema.post('save', function (doc, next) {
//     console.log('After saving data!');
//     next();
// })

dealSchema.methods.logger = function () {
    console.log(`Data saved for ${this.dealName}`);
}

const Deal = mongoose.model('Deal', dealSchema);

module.exports = Deal;