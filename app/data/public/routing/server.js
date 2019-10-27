// Dependencies
// =============================================================
const express = require("express"); 
const path = require("path");

// JavaScript Dependencies
// =============================================================

const apiRoutes = require("./apiRoutes.js")

const htmlRoutes = require("./htmlRoutes.js")


// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// HTML Routes for the server.js file
// =============================================================
htmlRoutes.defaultRoute(app);
htmlRoutes.home(app);
htmlRoutes.survey(app);




// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });