const path = require('path');
const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('index');
});

app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});