let mongoose=require("mongoose")

userschema=mongoose.Schema({
   
    name:String,
    email:String,
    password:String,
})

userModel=mongoose.model("user",userschema)

module.exports={userModel}