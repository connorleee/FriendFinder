const express = require("express");
const router = express.Router()
const friends = require("../data/friends")

// define the home page route
router.get('/friends', function (req, res) {
    return res.json(friends)
})

module.exports = router
