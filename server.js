var express = require("express");
var bodyParser = require("body-parser");

var port = process.env.PORT || 3000;

var app = express();

var db = require("./models");

app.use(express.static(process.cwd() + "/public"));

app.use(bodyParser.urlencoded({ extended: false }));

require("./routes/html-routes.js")(app);
var data = require("./routes/api-routes.js")(app);

db.sequelize.sync().then(function() {
	app.listen(port);
});