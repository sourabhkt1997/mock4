let express=require("express")
let userrouter=express.Router()
let {userModel}=require("../model/usermodel")
let bcrypt=require("bcrypt")
let jwt=require("jsonwebtoken")
require("dotenv").config()

userrouter.post("/register",async(req,res)=>{
    try {
        let {name,email,password}=req.body
      let data=await userModel.findOne({email})
      if(data){
        res.status(401).send("already registered login please")
      }
      else{
        bcrypt.hash(password,5,async(err,hash)=>{
            if(hash){
                let newuser=new userModel({name,email,password:hash})
                await newuser.save()
            }
            res.status(200).send("registered successfully")
        })
      }
        
    } catch (error) {
        res.status(400).send(error.message)
    }
})


userrouter.post("/login",async(req,res)=>{
    try {

        let {email,password}=req.body
        let data=await userModel.findOne({email})
        if(data){
            bcrypt.compare(password,data.password,async(err,result)=>{
                if(result){
                    let accesstoken=jwt.sign({userid:data.userid},process.env.access)

                    res.status(200).send({"msg":"loginsuccessfull",
                "token":accesstoken})
                }
                else{
                    res.status(402).send("wrong password")
                }
            })
        }
        else{
            res.status(401).send("register please")
        }
        
    } catch (error) {
        res.status(400).send(error.message)
    }
})










module.exports={userrouter}