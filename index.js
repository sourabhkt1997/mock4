let express=require("express")

let app=express()
app.use(express.json())
let cors=require("cors")
app.use(cors())
require("dotenv").config
let {connection}=require("./db")
const { userrouter } = require("./controllers/userRouter")
const { destinationrouter } = require("./controllers/destinationRouter")

// app.get("/",async(req,res)=>{
//     try {
//         res.send("lhello")
//     } catch (error) {
//         res.send(error.message)
//     }
// })

app.use("/user",userrouter)
app.use("/destination",destinationrouter)


app.listen(process.env.port,async()=>{
    try {
        await connection
        console.log("connected to server")
    } catch (error) {
        console.log(error)
    }
})