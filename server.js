const express = require('express');
const {MongoClient} = require('mongodb');
const Joi = require('joi');


const app = express();


app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})