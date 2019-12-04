var db = require("../models");

module.exports = function(app) {

 // Get all examples
 app.get("/api/petapps", function(req, res) {
    db.Pet.findAll({}).then(function(dbPetApps) {
      res.json(dbPetApps);
    });
  });

  // Create a new example
  app.post("/api/petapps", function(req, res) {
    db.Pet.create(req.body).then(function(dbPetApps) {
      
      res.json(dbPetApps);
    });
  });

  // Delete an example by id
  app.delete("/api/petapps/:id", function(req, res) {
    db.Pet.destroy({ where: { id: req.params.id } }).then(function(dbPetApp) {
      res.json(dbPetApp);
    });
  });















}

