require("dotenv").config();
var express = require("express");
var exphbs = require("express-handlebars");

var db = require("./models");

var app = express();
var PORT = process.env.PORT || 3000;
const passport = require("passport");

const flash = require("connect-flash");
const session = require("express-session");


//Flash
app.use (
    session({
        cookie: {maxAge: 86400000},
        secret: "wootwoot"
    })
);

app.use(flash());

//Passport
require("./config/passport")(passport);
app.use(passport.initialize());
app.use(passport.session());

//passport//

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

// Routes
require("./routes/htmlRoutes")(app);
require("./routes/pet-apiRoutes")(app);
require("./routes/petApp-apiRoutes")(app);

// require("./routes/auth-controller")(app);
const authRoutes = require("./routes/auth-controller");
app.use(authRoutes);

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  console.log("running test")
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;
