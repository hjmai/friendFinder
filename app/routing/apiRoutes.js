var friends = require('../data/friends');

module.exports = function(app) {
    app.get('/api/friends', function (req, res) {
        res.json(friends);
    });

    app.post('/api/friends', function (req, res) {
        var userData = req.body;
        var userScore = userData.scores;
        var bestMatch = {
            name: "",
            photo: "",
            difference : Infinity
        }
        
        for(var i = 0; i < friends.length; i++) {
            var currentFriendScore = friends[i].scores;
            var totalDifference = 0;
            for(var j = 0; j < currentFriendScore.length; j++) {
                totalDifference += Math.abs(parseInt(currentFriendScore[j]) - parseInt(userScore[j]));
            }
            if(bestMatch.difference >= totalDifference) {
                bestMatch.name = friends[i].name;
                bestMatch.photo = friends[i].photo;
                bestMatch.difference = totalDifference;
            }
        }
        res.json(bestMatch);
        friends.push(userData);
    });
}