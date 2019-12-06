var db = require("../models");
const passport = require("passport");
const express = require("express");
const router = express.Router();


// dbPets and dbPet still need to be defined//

// Load index page
module.exports = function (app) {
  app.get("/", function (req, res) {


    res.render("index", {
      msg: "Welcome!",

    });

  });

  // Load example page and pass in an example by id
  app.get("/login", function (req, res) {
    res.render("login", {


    });
  });

  // Load example page and pass in an example by id
  app.get("/signup", function (req, res) {
    res.render("signup", {


    });
  });

  // // Render 404 page for any unmatched route

  app.get("/joblistings", function (req, res) {
db.Pet.findAll({})
.then(function(data){
  console.log(data)
    res.render("joblisting", {
joblistings:data

    })
  })
  })

  app.get("/postjob", function (req, res) {
    res.render("postjob", {


    })

  })

  app.get("/thankyou", function (req, res) {
    res.render("thankyou", {


    });
  });

  app.get("/apply", function (req, res) {
    res.render("applyjob", {


    });
  });

  app.get("/apply/:id", function (req, res) {
    console.log(req.params.id)

    res.render("applyjob", {


    });
  });
  app.get("*", function (req, res) {
    res.render("404");
  });
}

