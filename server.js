var express = require("express");
var path = require("path");

//setting up the express app
var app = express();
var PORT = process.env.PORT || 3000;

//setting up express to handdle parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//adding the application routes
require(path.join(__dirname, "./app/routing/apiRoutes"))(app);
require(path.join(__dirname, "./app/routing/htmlRoutes"))(app);

//Starting the server to be ready for requests
app.listen(PORT, function(){
    console.log("app listening on PORT" + PORT)
})

