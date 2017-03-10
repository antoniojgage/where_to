var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var port = process.env.PORT || 3000;

var app = express();

var db = require("./models");

app.use(express.static(process.cwd() + "/public"));

app.use(bodyParser.urlencoded({ extended: false }));

require("./controller/html-routes.js")(app);
var data = require("./controller/api-routes.js")(app);

db.sequelize.sync().then(function() {
	app.listen(port);
});