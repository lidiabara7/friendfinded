var path = require("path")
//importing the data from the possible friends array
var possibleFriends = require("../data/friends")
//can install nodemon to monitor so that i dont have go go back everytime i make a change to close the port and ope it again===================

//exporting the data from the routes
module.exports = function (app) {

    // * A GET route that will be used to display a JSON of all possible friends.
    app.get("/api/friends", function (req, res) {
        res.json(possibleFriends);
    });
//     //    * A POST routes `/api/friends`. This will be used to handle incoming survey results. =====This route will also be used to handle the compatibility logic.
    app.post("/api/friends", function (req, res) {
        //req.body is equals to the json post sent from the user
        var newFriend = req.body;
        var userResponses = newFriend.score

        //to find a friend match
        var matchName = '';
		var matchImage = '';
        var totalDifference = 10000; //this is big for comparison
        
        //looping through all the possible friend list
        for (var i=0; i < possibleFriends.length; i++){
            //to compare the diffences
            var diff = 0;
            // math.abs returns the asolute value of a number
            for (var j = 0; j< userResponses.length; j++){
                diff += Math.abs(possibleFriends[i].score[j] - userResponses[j])
            }

            if (diff < totalDifference){
                totalDifference = friends[i].name;
                matchName = possibleFriends[i].name;
                matchImage = possibleFriends[i].image;
            }
        }

        //this to remove the extra spaces
        newFriend.name.replace(/\s+/g, "").toLowerCase();
        console.log(newFriend);
        // to add the new user to the list of possible friends
        possibleFriends.push(newFriend);

        res.json(newFriend);
    });

};