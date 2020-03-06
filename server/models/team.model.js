const mongoose = require("mongoose")

const PlayerSchema = mongoose.Schema({
    name:{
        type:String,
        minlength:[2, "Name must be longer than 2 chars"]
    },
    preferred_position:{
        type:String,
        required:[true, "Preferred Position must be inputed"]
    },
    game_1:{
        type:String,
        default:"UNDECIDED"
    },
    game_2:{
        type:String,
        default:"UNDECIDED"
    },
    game_3:{
        type:String,
        default:"UNDECIDED"
    },
},{timestamps:true})

const Player = mongoose.model("Player", PlayerSchema)
module.exports = Player
