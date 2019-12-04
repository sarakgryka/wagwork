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

  // // Render 404 page for any unmatched route

  app.get("/joblistings", function (req, res) {

    res.render("joblisting", {


    })
  })


  app.get("/postjob", function (req, res) {
    res.render("postjob", {


    })

  })

  app.get("*", function (req, res) {
    res.render("404");
  });
}

