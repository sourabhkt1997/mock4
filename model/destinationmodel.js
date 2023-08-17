
let mongoose=require("mongoose")

detinationschema=mongoose.Schema({
   
    name:String,
    email:String,
    destination:String,
    nooftravelers:Number,
    budgetperperson:Number
})

destinationModel=mongoose.model("destination",detinationschema)

module.exports={destinationModel}