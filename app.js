const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost:27017/sneaker-shop');

app.use(express.json());
app.use(express.urlencoded( {extended: true}));

const sneakerRouter = require('./routes/sneaker.router');

app.use('/sneakers', sneakerRouter);




app.listen(5000, () => {
    console.log('App listen 5000')
})
