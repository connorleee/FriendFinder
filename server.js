const express = require("express");

const htmlRoutes = require("./app/routing/htmlRoutes");
const apiRoutes = require("./app/routing/apiRoutes");

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use(express.static("app/public"));
app.use("/", htmlRoutes);
app.use("/api", apiRoutes);

app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT)
})