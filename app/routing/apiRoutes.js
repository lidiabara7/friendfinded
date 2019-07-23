//importing the data from the possible friends array
var possibleFriends = require("../data/friends")
//can install nodemon to monitor so that i dont have go go back everytime i make a change to close the port and ope it again===================

//exporting the data from the routes
module.exports = function (app) {

    // * A GET route that will be used to display a JSON of all possible friends.
    app.get("/api/friends", function (req, res) {
        return res.json(possibleFriends);
    });
//     //    * A POST routes `/api/friends`. This will be used to handle incoming survey results. =====This route will also be used to handle the compatibility logic.
    app.post("/api/friends", function (req, res) {
        //req.body is equals to the json post sent from the user
        var newFriend = req.body;
        //this to remove the extra spaces
        newFriend.name.replace(/\s+/g, "").toLowerCase();
        console.log(newFriend);
        // to add the new user to the list of possible friends
        possibleFriends.push(newFriend);

        res.json(newFriend);
    });

};