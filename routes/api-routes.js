var db = require("../models");

module.exports = function(app){

	app.get("/api/data", function(req, res) {
		console.log("trying to get");
	    db.wheretoDataMaster.findOne({
	      where: {
	        id: 1
	      }
   		}).then(function(result) {
	        return res.json(result);
	    });
	});

};