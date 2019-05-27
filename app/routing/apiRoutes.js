const express = require("express");
const router = express.Router();
const friends = require("../data/friends");

// define the home page route
router.get('/friends', function (req, res) {
    return res.json(friends)
})

router.post('/friends', function (req, res) {
    // change request values to integers
    valInt = []
    for (let i = 0; i < req.body.values.length; i++) {
        const el = req.body.values[i];
        valInt.push(parseInt(el))
    }
    console.log(valInt);

    friendObject = {
        name: req.body.name,
        photo: req.body.photo,
        values: valInt
    }

    // Post the survey results to the DB
    friends.push(friendObject);

    // check data against rest of db to find closest match
    // Arr of all total differences
    let comparisonArr = [];

    // arr for all user values to integers
    let userVal = [];
    let userData = req.body.values;
    for (let i = 0; i < userData.length; i++) {
        const el = userData[i];
        userVal.push(parseInt(el));
    }
    let userTotal = userVal.reduce(getSum);

    for (let i = 0; i < friends.length - 1; i++) {
        const el = friends[i].values;
        let friendTotal = el.reduce(getSum);

        console.log(friendTotal);

        let totDiff = Math.abs(userTotal - friendTotal);
        comparisonArr.push(totDiff);
    }

    let indexBestFriend = indexOfMin(comparisonArr)

    let newBestFriend = friends[indexBestFriend];

    res.send(newBestFriend);
})

// used for array sum
function getSum(total, num) {
    return total + num;
}

function indexOfMin(arr) {
    if (arr.length === 0) {
        return -1;
    }

    var min = arr[0];
    var minIndex = 0;

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            minIndex = i;
            min = arr[i];
        }
    }

    return minIndex;
}

module.exports = router
