const express = require("express");
const router = express.Router()

// define the home page route
router.get('/', function (req, res) {
    res.send('home page')
})
// define the about route
router.get('/survey', function (req, res) {
    res.send('survey')
})

module.exports = router
