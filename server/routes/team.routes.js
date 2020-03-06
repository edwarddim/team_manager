const Player = require("../controllers/team.controller")

module.exports = app => {
    app.get("/api/players", Player.allPlayers)
    app.post("/api/players", Player.createPlayer)
    app.delete("/api/players/:id",Player.deletePlayer)
}