const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    matchId: {
        type: String,
        required: true
    },
    team1: {
        type: String,
        required: true
    },
    team2: {
        type: String,
        required: true
    },
    transactionDate: {
        type: Date,
        required: true
    },
    investedAmount: {
        type: Number,
        required: true
    },
    endingAmount: {
        type: Number,
        required: true
    },
    profitLoss: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        required: true,
        enum: ['bet', 'win']
    }
});

module.exports = mongoose.model('Transaction', transactionSchema); 