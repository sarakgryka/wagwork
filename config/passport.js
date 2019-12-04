const localStrategy = require("passport-local").Strategy;
const db = require("../models");

module.exports = function(passport) {
    passport.serializeUser(function(user, cb){
        cb(null, user.id);
    });

    passport.deserializeUser(function(id, cb){
        db.user.findOne({where: {id:id}}).then(function(date){
            cb(null, user.id);
        });
    });

    passport.use(
        "local-signup",
        new localStrategy(
            {
                usernameField: "email",
                passwordField: "password"
            },
            function(email, password, cb){
                db.user.findOne({where: {email: email}}).then(function(data){
                    if(data){
                        return cb(null, false, {
                            message: "Already Signed In!"
                        });
                    }else {
                        db.user
                        .create
                    }
                }
            
                   }
        )
    );





};