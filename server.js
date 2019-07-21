var express = required("express");
var path = required("path");

//============== setting up the express app
var app = express();
var PORT = process.env.PORT || 3000;

//setting up express to handdle parsing
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//Starting the server to be ready for requests
app.listen(PORT, function(){
    console.log("app listening on PORT" + PORT)
})