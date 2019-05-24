const express = require("express");
const path = require("path");

const htmlRoutes = require("./app/routing/htmlRoutes");
const apiRoutes = require("./app/routing/apiRoutes");
const friends = require("./app/data/friends")

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static("public"));
app.use("/", htmlRoutes);
app.use("/api", apiRoutes);
// app.use(path.join(__dirname, "/style"));

app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT)
})