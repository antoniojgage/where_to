var path = require("path");


module.exports = function(app) {

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname + "/../views/index.html"));
  });

    app.get("/about", function(req, res) {
    res.sendFile(path.join(__dirname + "/../views/about.html"));
  });

  app.get("/contact", function(req, res) {
    res.sendFile(path.join(__dirname + "/../views/contact.html"));
  });


};
