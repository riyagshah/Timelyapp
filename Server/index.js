const express = require("express");
const connection = require("./config/config");
const userController = require("./Controllers/user.controller");
var cors = require('cors')
const passport = require("./Config/google-outh")
const authentication = require("./Middlewares/Authentication");
const { session } = require("./Config/google-outh");


const app = express();

app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.send("Homepage");
})

app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile','email'] }));

app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login',session:false }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });



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