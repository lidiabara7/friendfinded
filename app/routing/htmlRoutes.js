var path = require("path");

//exporting the html routes
module.exports = function(app){
// * A default, catch-all route that leads to `home.html` which displays the home page.
app.get("/", function(req, res){
res.sendFile(path.join(__dirname, "home.html"));
});

// A GET Route to `/survey` which displays the survey page.
app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "survey.html"))
})

// this to display all the possible friends
app.get("/api/friends",function (req, res) {
    return res.json(possibleFriends)
});

};