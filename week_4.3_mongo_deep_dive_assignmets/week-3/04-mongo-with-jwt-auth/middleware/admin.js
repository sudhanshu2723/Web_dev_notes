// Middleware for handling auth

const jwt=require('jsonwebtoken');
const { SECRET } = require('../secret_keys/secret');



function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const token=req.headers.authorization;
    if(!token){
        return res.status(500).json({
            msg:"Please signup or signin"
        })
    }
    try{
        const isValid=jwt.verify(token,SECRET);
        next();
    }
    catch(err){
        return res.status(500).json({
            msg:"invlaid token"
        })
    }
}

module.exports = adminMiddleware;