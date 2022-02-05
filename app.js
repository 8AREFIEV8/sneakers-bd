const express = require('express');

const app = express();
app.use(express.json());
app.use(express.urlencoded( {extended: true}));

const sneakerRouter = require('./routes/sneaker.router');

app.use('/sneakers', sneakerRouter);




app.listen(5000, () => {
    console.log('App listen 5000')
})
