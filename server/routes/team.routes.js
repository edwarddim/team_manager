const Player = require("../controllers/team.controller")

module.exports = app => {
    app.get("/api/players", Player.allPlayers)
    app.post("/api/players", Player.createPlayer)
    app.put("/api/players/:id", Player.updatePlayer)
    app.delete("/api/players/:id",Player.deletePlayer)
}