var db = require("../models");

module.exports = function (app) {
	// select * from whereto_data_master where OCC_TITLE ='Training and Development Managers';
	app.get("/api/whereto/:occupation", function (req, res) {
		var occupation = req.params.occupation
		console.log(occupation);
		console.log("Querying by occupation");
		db.jointTableThree.findAll({
			where: {
				occTitle: occupation
			}, 
			order: "bang4Yabuk ASC"
		// db.coordinates.findOne({
		// 	where: {
		// 		city: 'houston'
		// 	}
		}).then(function (result) {
			return res.json(result);
		});
	});
	//Model.findAll({ where: { age: { gt: 12 } } })
	// put route -> back to index
	app.get("/api/data/:cities", function (req, res) {
		var cities = req.params.cities
		var city = cities.split(",")[0];
		var state = cities.split(",")[1].trim();
		console.log("City: " + city + " State: " + state);
		db.tableWithEverything.findOne({
			where: {
				city: city,
				stateInitial: state
			}
		}).then(function (result) {
			return res.json(result);
		});
	});
};