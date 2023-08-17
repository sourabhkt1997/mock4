let express=require("express")
let destinationrouter=express.Router()
let {destinationModel}=require("../model/destinationmodel")


destinationrouter.post("/add",async(req,res)=>{
    try {
        let{name,email,destination, nooftravelers,
            budgetperperson}=req.body
        let data=new destinationModel({name,email,destination,nooftravelers,budgetperperson})
        await data.save()
        res.status(200).send("new destination added")
    } catch (error) {
        res.status(400).send(error.message)
    }
})


destinationrouter.get("/",async(req,res)=>{
    try {
        let data=await destinationModel.find()
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send(error.message)
    }
})


destinationrouter.delete("/delete/:id",async(req,res)=>{
    try {
        let {id}=req.params
         
        await destinationModel.findByIdAndDelete({_id:id})
        res.status(200).send("deleted")
        
    } catch (error) {
        res.status(400).send(error.message)
    }
})
destinationrouter.get("/filter",async(req,res)=>{
    try {
        let {destination}=req.query
        console.log(destination)
        let data=await destinationModel.find({destination:destination})
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send(error.message)
    }
})
// destinationrouter.get("/sort",async(req,res)=>{
//     try {
        
//     } catch (error) {
//         res.status(400).send(error.message)
//     }
// })


module.exports={destinationrouter}