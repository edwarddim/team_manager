const Player = require("../controllers/team.controller")

module.exports = app => {
    app.get("/api/players", Player.allPlayers)
}