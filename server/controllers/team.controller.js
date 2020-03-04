const Player = require('../models/team.model')

module.exports.allPlayers = (req,res) =>{
    Player.find()
        .then(allPlayers => res.json(allPlayers))
        .catch(err => res.json(err))
}