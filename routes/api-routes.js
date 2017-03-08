var db = require("../models");

module.exports = function (app) {

	/*app.get("/api/data", function(req, res) {
	    console.log("trying to get");
	    db.wheretoDataMaster.findOne({
	        where: {
	            id: 1
	        }
	    }).then(function(result) {
	        return res.json(result);
	    });
	});*/

	app.get("/api/whereto", function (req, res) {
		console.log("trying to find where to");
		db.wheretoDataMaster.findAll({
			order: "ID ASC",
		}).then(function (result) {
			return res.json(result);
		});
	});

	app.get("/api/cities", function (req, res) {
		console.log("trying to query cities");
		db.coordinates.findAll({
			  where: {
			    city: "Portland"
			  }
		}).then(function (result) {
			return res.json(result);
		});
	});

	app.get("/api/unemployments", function (req, res) {
		console.log("trying to query unemployments");

		db.unemployment.findAll({
			order: "employment_rank ASC"
			/*db.unemployment.findOne({
				where: {
					employment_rank: 1
				}*/
		}).then(function (result) {
			return res.json(result);
		});
	});

	// put route -> back to index
	app.get("/api/data/:cities", function (req, res) {

		var cities = req.params.cities
		var city = cities.split(",")[0];
		var state = cities.split(",")[1]
		console.log("City: " + city + " State: " + state);
		db.coordinates.findOne({
			where: {
				city: cities,
				stateInitial: state
			}
		}).then(function (result) {
			return res.json(result);
		});
	});

};