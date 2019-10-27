// Dependencies
// =============================================================
let express = require("express"); 


// JavaScript Dependencies
// =============================================================

let apiRoutes = require("./apiRoutes.js")

let htmlRoutes = require("./htmlRoutes.js")


// Sets up the Express App
// =============================================================
let app = express();
let PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

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