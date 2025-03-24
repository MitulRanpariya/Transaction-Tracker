const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const Transaction = require('./models/transaction');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/transaction_tracker', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('MongoDB connection error:', error);
});

// Routes
app.post('/api/transactions', async (req, res) => {
    try {
        const transaction = new Transaction(req.body);
        await transaction.save();
        res.status(201).json(transaction);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

app.get('/api/transactions', async (req, res) => {
    try {
        const transactions = await Transaction.find();
        res.json(transactions);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/api/transactions/match/:matchId', async (req, res) => {
    try {
        const transactions = await Transaction.find({ matchId: req.params.matchId });
        res.json(transactions);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/api/transactions/date-range', async (req, res) => {
    try {
        const { startDate, endDate } = req.query;
        const transactions = await Transaction.find({
            transactionDate: {
                $gte: new Date(startDate),
                $lte: new Date(endDate)
            }
        });
        res.json(transactions);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.delete('/api/transactions/match/:matchId', async (req, res) => {
    try {
        await Transaction.deleteMany({ matchId: req.params.matchId });
        res.status(200).json({ message: 'Transactions deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.delete('/api/transactions', async (req, res) => {
    try {
        await Transaction.deleteMany({});
        res.status(200).json({ message: 'All transactions deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
}); 