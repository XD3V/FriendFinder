// Dependencies
// =============================================================

let express = require('express');
let app = express();
let path = require('path');
let PORT = process.env.PORT || 8080;
// Routes
// =============================================================

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const defaultPath = (app) => {
  app.get("/", function(req, res) {
    if (err) {
      return res.status(500).end();
    }

    {
      res.sendFile(path.join(__dirname, "/Users/xdavi/Desktop/classhw/week13/FriendFinder/app/data/public/home.html"));
    }
  });
};

const homePath = (app) => {
  app.get("/home", function(req, res) {
    if (err) {
      return res.status(500).end();
    }

    {
      res.sendFile(path.join(__dirname, "/Users/xdavi/Desktop/classhw/week13/FriendFinder/app/data/public/home.html"));
    }
  });
};

const surveyPath = (app) => {
  app.get("/survey", function(req, res) {
    if (err) {
      return res.status(500).end();
    }
 
    {
    return res.sendFile("/Users/xdavi/Desktop/classhw/week13/FriendFinder/app/data/public/survey.html");
    }
  });
};


// // Starts the server to begin listening
// // =============================================================
// app.listen(PORT, function() {
//     console.log("App listening on PORT " + PORT);
//   });


module.exports = {
  defaultRoute : defaultPath,
  home : homePath,
  survey: surveyPath
};