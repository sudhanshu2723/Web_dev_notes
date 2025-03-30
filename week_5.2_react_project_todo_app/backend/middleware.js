const { secret } = require("./secret");
const jwt=require("jsonwebtoken")

 function todoMiddleware(req,res,next){
    const token=req.headers.authorization;
   console.log("going to todoMiddleware "+token)
    try{
        const verified=jwt.verify(token,secret);
        console.log("token verified")
        next();
    }
    catch(err){
       console.log("erro")
        return res.status(400).json({
            msg:"sign in "
        })
    }
}

module.exports={
    todoMiddleware
}
