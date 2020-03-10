const {Player,Game} = require('../models/team.model')

module.exports.allPlayers = (req,res) =>{
    Player.find()
        .then(allPlayers => res.json(allPlayers))
        .catch(err => res.json(err))
}

module.exports.createPlayer = (req, res) =>{

    const game1 = Game.create({})
    const game2 = Game.create({})
    const game3 = Game.create({})

    Promise.all([game1,game2,game3])
        .then(games => {
            req.body.game_1 = games[0]
            req.body.game_2 = games[1]
            req.body.game_3 = games[2]
            Player.create(req.body)
                .then(player => res.json(player))
                .catch(err => res.status(400).json(err))
        })
        .catch(err => res.json(err))
}

module.exports.updatePlayer = (req,res) => {
    const {status, gameId} = req.body;
    const {id} = req.params;
    Player.findOne({_id:id})
        .then(player =>{
            player[gameId].status = status
            return player.save()
        })
        .then(savedResult => res.json(savedResult))
        .catch(err => res.json(err))
}

module.exports.deletePlayer = (req, res) =>{
    const {id} = req.params;
    Player.deleteOne({_id:id})
        .then(res => res.json(res))
        .catch(err => res.json(err))
}