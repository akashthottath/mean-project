const users=require('../models/userSchema')

const jwt=require('jsonwebtoken')

const jwtSecret=process.env.JWTSECRET

// register

exports.registerController=async(req,res)=>{
    
   const{username,email,password}=req.body

   try{

    const userDetails=await users.findOne({email})

    if(userDetails){

        res.status(406).json("user already exist please login")

    }else{
        const newUser=new users({
            username,email,password
        })
        await newUser.save()
        res.status(200).json(newUser)
    }

   }
   catch(err){
    res.status(401).json(err)
   }
}

// login
 exports.loginController=async(req,res)=>{

   const{email,password}=req.body

   try{
    const existingUser=await users.findOne({email,password})

    if(existingUser){

            const token=jwt.sign({userId:existingUser._id},jwtSecret)

            res.status(200).json({existingUser,token})

    }

   }
   catch(err){
    res.status(401).json(err)
   }
    
 }

