const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

var app = express();
var router = express.Router();
var port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(express.static(path.join(__dirname, 'dist')));

const api = require('./server/routes/api')(app);

app.get('/', function(req, resp) {
    resp.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, function() {
    console.log(`Server started at ${port}`);
});