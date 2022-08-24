const jwt = require("jsonwebtoken");

const authentication = (res,req,next)=>{
    if(!req.headers.authorization){
        return res.send("Please login again");
    }
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, 'shhhhh', function(err, decoded) {
        if(err){
            return res.send("Please login again");
        }
        console.log(decoded);
        req.body.email = decoded.email;
        req.body.userId = decoded.userId;
        next();
      });

}

module.exports = authentication;