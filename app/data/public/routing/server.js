// Dependencies
// =============================================================
const express = require("express");
const path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Pretend Friends (DATA)
// =============================================================

let friends = [
    {
    "name": "George clooney",
    "photo":"https://akns-images.eonline.com/eol_images/Entire_Site/2019414/rs_634x1024-190514063109-634-George-Clooney-Batman-LT-051419-GettyImages-607408286.jpg?fit=inside|900:auto&output-quality=90",
    "score":[
        "1",
        "2",
        "3",
        "4",
        "5",
        "1",
        "2",
        "3",
        "4",
        "5"
    ]
    },
    
]

// Routes
// =============================================================
