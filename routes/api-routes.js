var db = require("../models");

module.exports = function(app) {

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

    app.get("/api/whereto", function(req, res) {
        console.log("trying to find where to");
        db.wheretoDataMaster.findAll({
           order: "ID ASC",
        }).then(function(result) {
            return res.json(result);
        });
    });

    app.get("/api/cities", function(req, res) {
        console.log("trying to query cities");
        db.coordinates.findAll({
            order: "rank ASC",
            /*db.coordinates.findOne({
              where: {
                rank: 1
              }*/
        }).then(function(result) {
            return res.json(result);
        });
    });

    app.get("/api/unemployments", function(req, res) {
        console.log("trying to query unemployments");

        db.unemployment.findAll({
            order: "employment_rank ASC"
            /*db.unemployment.findOne({
            	where: {
            		employment_rank: 1
            	}*/
        }).then(function(result) {
            return res.json(result);
        });
    });

};
