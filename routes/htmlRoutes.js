var db = require("../models");
const passport = require("passport");
const express = require("express");
const router = express.Router();




// dbPets and dbPet still need to be defined//

// Load index page
module.exports = function (app) {
  app.get("/", function (req, res) {


    res.render("login", {
      msg: "Welcome!",

    });

  });
  app.get("/home", function (req, res) {

console.log(req.user)
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
      .then(function (data) {
        console.log(data)
        res.render("joblisting", {
          joblistings: data

        })
      })
  })

  app.get("/joblistings/true", function (req, res) {
    db.Pet.findAll({})
      .then(function (data) {
        console.log(data)
        res.render("joblistingTrue", {
          joblistings: data

        })
      })
  })
  app.get("/joblistings/false", function (req, res) {
    db.Pet.findAll({})
      .then(function (data) {
        console.log(data)
        res.render("joblistingFalse", {
          joblistings: data

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

  app.get("/userposts", function(req,res){
    req.body.userId = req.user.id;
    // var query = {};
    // if (req.query.user.id) {
    //   query.userId = req.query.user.id
    // }


    db.Pet.findAll({
      where: {
        userId: req.user.id
      }
    })
      .then(function (data) {
        console.log(data)
        res.render("userinfo", {
          posts: data

        })
      })

    // res.render("userinfo", {


    // })
  })

  app.get("/apply", function (req, res) {


    res.render("applyjob", {

    });
  });
  app.get("/apply/:id", function (req, res) {



    res.render("applyjob", {



      // })
    });
  });

  app.get("*", function (req, res) {
    res.render("404");
  });
}

