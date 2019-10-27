// Dependencies
// =============================================================
const friends = require("./public/friends.js");


// Routes
// =============================================================


const takeFriends  = (app) => {
  app.get("/api/friends", function(req, res) {
    if (err) {
      return res.status(500).end();
    } 
  });
}

let createFriend = function appPostFriend() {
  // Create New Characters - takes in JSON input
  app.post("/api/friends", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    let newFriend = req.body;

    let newFriend = new friends(newFriend );

    console.log(newFriend);

    characters.push(newFriend);

    res.json(newFriend);
  });
};


module.exports = {
 grabFriends: takeFriends ,
  constructFriends: createFriend 
};