const { Admin } = require("../db");
const { userSchema } = require("../types/zodSchema");

async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const username=req.headers.username;
    const password=req.headers.password;

    // zod authentication
    const isValidSchema=userSchema.safeParse({
        username,password
    });
    if(!isValidSchema.success){
        return res.status(400).send({
            msg:"Invalid Schema"
        })
    }
    // check if the admin exists in the db
    const admin=await Admin.findOne({
        username,password
    })
    if(admin){
        next();
    }else{
        return res.status(500).send({
            msg:"wrong username or password"
        }) 
    }

}

module.exports = userMiddleware;