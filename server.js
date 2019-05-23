const express = require("express");
const router = express.Router();

const htmlRoutes = require("./app/routing/htmlRoutes");
const apiRoutes = require("./app/routing/apiRoutes");

const app = express();

const PORT = process.env.PORT || 8080;

app.use("/", htmlRoutes);
app.use("/api", apiRoutes);


app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT)
})