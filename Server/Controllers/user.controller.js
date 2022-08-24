const express = require("express");
const UserModel = require("../Models/User.model");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userController = express.Router();


userController.post("/signup",(req,res)=>{
    const {email,name,password} = req.body;
    bcrypt.hash(password, 10, async function(err, hash) {
        if(err){
            return res.send("Please try again");
        }
        const user = new UserModel({
            email,
            name,
            password : hash
        });
    
        await user.save();
        res.send("signup Success");
    });
  
})

userController.post("/login",async(req,res)=>{
    const {email,password} = req.body;
    const user = await UserModel.findOne({email});
    const hash = user.password;
    bcrypt.compare(password, hash, function(err, result) {
        if(result){
            var token = jwt.sign({email}, 'shhhhh');
            res.send({"message": "Login Success",token})
        }
        else{
            res.send("Invalid Credentials");
        }
    });

})







module.exports = userController;
