var db = require("../models");

module.exports = function (app) {
// select * from whereto_data_master where OCC_TITLE ='Training and Development Managers';
	app.get("/api/whereto/:occupation", function (req, res) {
		var occupation = req.params.occupation
		console.log("Querying by occupation");
		db.coordinates.findAll({
			where: {
				OCC_TITLE: occupation
			}
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
// EVERY ROW THAT HAS THAT OCCUPATION 
// ALL CITIES - get coordinates

	//DONT USE YET

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

	// app.get("/api/whereto", function (req, res) {
	// 	console.log("trying to find where to");
	// 	db.wheretoDataMaster.findAll({
	// 		order: "ID ASC",
	// 	}).then(function (result) {
	// 		return res.json(result);
	// 	});
	// });

	// app.get("/api/unemployments", function (req, res) {
	// 	console.log("trying to query unemployments");

	// 	db.unemployment.findAll({
	// 		order: "employment_rank ASC"
	// 		/*db.unemployment.findOne({
	// 			where: {
	// 				employment_rank: 1
	// 			}*/
	// 	}).then(function (result) {
	// 		return res.json(result);
	// 	});
	// });

};

//queries
//