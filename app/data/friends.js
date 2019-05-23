const express = require("express");

let friends = [
    // Example entry
    {
        "name": "Timmy",
        "photo": "https://vignette.wikia.nocookie.net/southpark/images/4/4b/Timmy.png/revision/latest?cb=20171014061716",
        "scores": [
            5,
            1,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1
        ]
    }
]

module.exports = friends

console.log("test")

// $("#submit-data").on("click", function(event){
//     console.log("test")
//     console.log($("#q1").val())
// })