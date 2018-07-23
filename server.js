var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);

app.listen(PORT, function () {
    console.log('Listening on port ' + PORT);
})