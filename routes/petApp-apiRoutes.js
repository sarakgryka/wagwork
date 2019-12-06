var db = require("../models");

module.exports = function (app) {

  // Get all examples
  app.get("/api/petapps", function (req, res) {
    db.PetApp
      .findAll({})
      .then(function (data) {
        res.json(data);
      });
  });

  // Create a new example
  app.post("/api/petapps", function (req, res) {
    db.PetApp
      .create(req.body)
      .then(function (data) {

        res.json(data);
      });
  });

  // Delete an example by id
  app.delete("/api/petapps/:id", function (req, res) {
    db.PetApp
      .destroy({ where: { id: req.params.id } })
      .then(function (data) {
        res.json(data);
      });
  });















}

