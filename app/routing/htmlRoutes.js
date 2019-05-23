const express = require("express");
const router = express.Router()
const path = require("path");

// define the home page route
router.get('/', function (req, res) {
    res.sendFile("home.html", {root: path.join(__dirname, "../public")})
})
// define the about route
router.get('/survey', function (req, res) {
    res.sendFile("survey.html", {root: path.join(__dirname, "../public")})  
})

module.exports = router
