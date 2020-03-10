const mongoose = require("mongoose")

// 0:UNDECIDED
// 1:PLAYING
// 2:NOT PLAYING

const GameSchema = mongoose.Schema({
    game_number:{
        type:Number,
    },
    status:{
        type:Number,
        default: 0
    }
})

const PlayerSchema = mongoose.Schema({
    name:{
        type:String,
        minlength:[2, "Name must be longer than 2 chars"]
    },
    preferred_position:{
        type:String,
        required:[true, "Preferred Position must be inputed"]
    },
    game_1:GameSchema,
    game_2:GameSchema,
    game_3:GameSchema
},{timestamps:true})

const Player = mongoose.model("Player", PlayerSchema)
const Game = mongoose.model("Game", GameSchema)
module.exports = {
    Player:Player,
    Game:Game
}
