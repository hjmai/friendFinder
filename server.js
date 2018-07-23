var express = require('express');
var app = express();
var friends = require('./app/data/friends');
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);

app.listen(3000, function () {
    console.log('Listening on port 3000!');
})