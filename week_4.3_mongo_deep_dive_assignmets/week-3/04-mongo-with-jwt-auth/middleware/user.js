const jwt=require('jsonwebtoken')

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
     const token=req.userToken;
     console.log(token);
        if(!token){
            return res.status(500).json({
                msg:"Please signup or signin"
            })
        }
        try{
            const isValid=jwt.verify(token,secret);
            next();
        }
        catch(err){
            return res.status(500).json({
                msg:"invlaid token"
            })
        }
}

module.exports = userMiddleware;