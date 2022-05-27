const express = require ('express')
const app = express()
const mongoose = require ('mongoose')
app.use(express.json())
mongoose.connect("mongodb+srv://ramziramzi:ramzi@cluster0.ndasu.mongodb.net/checkpointMongose?retryWrites=true&w=majority",
(err)=>{
    if(err) throw err
    else console.log("database is connected")
});
app.use('/',require("./routes/userroute"))


const port = 5000
app.listen(port,() => console.log('listening in port 5000'))

