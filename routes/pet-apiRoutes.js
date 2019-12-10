var db = require("../models");
const passport = require("passport");
const express = require("express");
const router = express.Router();

module.exports = function (app) {
  // Get all examples
  app.get("/api/pets", function (req, res) {
    console.log(req.body)
    console.log(req.user)

   req.body.userId = req.user.userId;

    db.Pet
      .findAll({
        // include: [db.user]
      })
      .then(function (data) {
        res.json(data);
      });
  });

  app.get("/api/users", function (req, res) {
    db.Pet
      .findAll({
        where: {
          id: req.user.id
        }
      })
      .then(function (data) {
        res.json(data);
      });
  });

  // app.get("/api/pets/true", function (req, res) {
  //   db.Pet
  //     .findOne({
  //       where: {
  //         serviceQualification: true
  //       }
  //     })
  //     .then(function (data) {
  //       console.log(data)
  //       res.render("joblisting", {
  //         joblistings: data

  //       })
        
  //     });
  // });


  // Create a new example
  app.post("/api/pets", function (req, res) {
    console.log(req.body)
    console.log(req.user)

    req.body.userId = req.user.userId;
  
    db.Pet
      .create(req.body)
      .then(function (data) {
        res.json(data)
       
      });
  });

  //change an existing job listing
  app.put("/api/pets/:id", function (req, res) {

    db.Pet
      .update(req.body, {
        where: {
          id: req.params.id
        // }, 
        // include: [db.user]
      }})
      .then(function (data) {
        res.json(data)
      })
  })

  // Delete an example by id
  app.delete("/api/pets/:id", function (req, res) {
    db.Pet.destroy({ where: { id: req.params.id } }).then(function (dbPet) {
      res.json(dbPet);
    });
  });
};
