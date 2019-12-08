const localStrategy = require("passport-local").Strategy;
const db = require("../models");
const bcrypt = require("bcrypt");

module.exports = function (passport) {
    passport.serializeUser(function (user, cb) {
        cb(null, user.id);
    });

    passport.deserializeUser(function (id, cb) {
        db.user.findOne({ where: { id: id } }).then(function (data) {
            cb(null, data);
        });
    });

    passport.use(
        "local-signup",
        new localStrategy(
            {
                usernameField: "email",
                passwordField: "password"
            },
            function (email, password, cb) {
                db.user.findOne({ where: { email: email } }).then(function (data) {
                    if (data) {
                        return cb(null, false, {
                            message: "Already Signed In!"
                        });
                    } else {
                        db.user
                            .create({
                                email: email,
                                password: db.user.generateHash(password)
                            })
                            .then(function (data) {
                                return cb(null, data);
                            });
                    }
                });

            }
        )
    );

    passport.use(
        "local-login",
        new localStrategy(
            {
                usernameField: "email",
                passwordField: "password"
            },
            function (email, password, cb) {
                db.user.findOne({ where: { email: email } }).then(function (data) {
                    if (!data) {
                        return cb(null, false, { message: "No Email Found!" });
                    }
                    if (!db.user.validPassword(password, data.password)) {
                        return cb(null, false, { message: "Wrong Password" });
                    }
                    return cb(null, data);
                });
    
            }
        )
    );
};