const express = require("express");
const router = express.Router();
const friends = require("../data/friends");

// define the home page route
router.get('/friends', function (req, res) {
    return res.json(friends)
})

router.post('/friends', function (req, res) {
    console.log(req.body);
    friends.push(req.body);
    res.send({ status: 'SUCCESS' });
})

module.exports = router
