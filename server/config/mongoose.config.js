const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/team_manager",{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=> console.log("CONNECTED TO TEAM MANAGER DB"))
.catch(err => console.log("ERROR: ", err))