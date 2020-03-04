const express = require('express')
const cors = require('cors')

const app = express()

require('./server/config/mongoose.config')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

require("./server/routes/team.routes")(app)

app.listen(8000 , ()=>{
    console.log("EXPRESS SERVER ON 8000")
})