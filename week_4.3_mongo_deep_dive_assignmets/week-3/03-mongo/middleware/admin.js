// Middleware for handling auth

const { User, Admin } = require("../db");
const {   AdminSchema } = require("../types/zodSchema");


async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const username=req.headers.username;
    const password=req.headers.password;
    console.log(username)
    console.log(password)
    // zod authentication
    const isValidSchema=AdminSchema.safeParse({
        username,password
    });
    if(!isValidSchema.success){
        return res.status(400).send({
            msg:"Invalid Schema"
        })
    }
    // check if the admin exists in the db
    const user=await Admin.findOne({
        username,password
    })
    if(user){
        next();
    }else{
        return res.status(500).send({
            msg:"wrong username or password"
        }) 
    }

    
}

module.exports = adminMiddleware;