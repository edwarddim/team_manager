const Player = require('../models/team.model')

module.exports.allPlayers = (req,res) =>{
    Player.find()
        .then(allPlayers => res.json(allPlayers))
        .catch(err => res.json(err))
}

module.exports.createPlayer = (req, res) =>{
    Player.create(req.body)
        .then(player => res.json(player))
        .catch(err => res.status(400).json(err))
}