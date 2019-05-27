const express = require("express");
const router = express.Router();
const friends = require("../data/friends");

// define the home page route
router.get('/friends', function (req, res) {
    return res.json(friends)
})

router.post('/friends', function (req, res) {
    // Post the survey results to the DB
    friends.push(req.body);
    
    // check data against rest of db to find closest match
    let comparisonArr = [];

    let userVal = [];
    let userData = req.body.values;
    for (let i = 0; i < userData.length; i++) {
        const el = userData[i];
        userVal.push(parseInt(el));
    }
    let userTotal = userVal.reduce(getSum);


    for (let i = 0; i < friends.length-1; i++) {
        const el = friends[i].values;
        let friendTotal = el.reduce(getSum);

        let totDiff = Math.abs(userTotal - friendTotal);
        comparisonArr.push(totDiff);
    }

    let indexBestFriend = Math.min(comparisonArr)

    let newBestFriend = friends[indexBestFriend];

    console.log(newBestFriend)

    // res.json(newBestFriend);
})

// used for array sum
function getSum(total, num) {
    return total + num;
}

module.exports = router
