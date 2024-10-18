const express = require('express');
const mongoose = require('mongoose');
const {config} = require('./config');
const User = require('./models');

const app = express();
app.use(express.json());

app.get('/api/users', async (req, res) => {
    try {
        const users = await User.find({});

        if (users.length === 0) {
            res.status(404).json({message: 'No users found'});
            return;
        }

        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
})

app.get('/api/users/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            res.status(404).json({message: 'User not found'});
            return;
        }
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
})

app.post('/api/users', async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json(user);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
})

app.put('/api/users/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if (!user) {
            res.status(404).json({message: 'User not found'});
            return;
        }
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
})

app.delete('/api/users/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            res.status(404).json({message: 'User not found'});
            return;
        }
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
})


mongoose.connect(config.MONGODB_URL).
then(() => {
    console.log('Connected to MongoDB');
    app.listen(config.PORT, () => {
        console.log(`Server is running on port ${config.PORT}`);
    })
}).
catch((err) => console.log(err));

//  1. Write README.md guide to environment variables setup