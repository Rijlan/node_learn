var express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.send('this is the homepage');
});

app.get('/contact', (req, res) => {
    res.send('this is the contact page');
});

app.get('/profile/:name', (req, res) => {
    res.send('You requested to see a profile with the name of ' + req.params.name);
});

app.listen(3000);