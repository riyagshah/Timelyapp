const express = require("express");
const connection = require("./config/config");
const userController = require("./Controllers/user.controller");
const authentication = require("./Middlewares/Authentication");


const app = express();

app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Homepage");
})


app.use(userController);
app.use(authentication);


app.listen(8080, async ()=>{
    try{
        await connection;
        console.log("Connected to db");
    }
    catch(err){
        console.log(err);
    }
    console.log("Something running at 8080");
})
