var db = require("../models");


// dbPets and dbPet still need to be defined//
module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {

    
    console.log(dbPet);
    db.Example.findAll({}).then(function(dbPets) {
      res.render("index", {
        msg: "Welcome!",
        pets: dbPets
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/pets/:id", function(req, res) {
    db.Pet.findOne({ where: { id: req.params.id } }).then(function(dbPet) {
      res.render("pets", {
       pet: dbPet
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
