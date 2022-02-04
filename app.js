const express = require('express');

const app = express();

app.get('/sneakers', (req, res) => {
    console.log(req)
    res.json('GET ALL SNEAKERS');
});


app.post('/sneakers', (req, res) => {
    console.log(req)
    res.json('CREATE SNEAKER');
});




app.listen(5000, () => {
    console.log('App listen 5000')
})
