
const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { userSchema } = require("../types/zodSchema");
const { User, Course } = require("../db");
const jwt=require("jsonwebtoken");
// User Routes
router.post('/signup', async(req, res) => {
    // Implement user signup logic
    const data=req.body;
    const {username,password}=data;
    const isValidSchema=userSchema.safeParse({
        username,password
    });
    if(!isValidSchema.success){
        return res.status(400).send({
            msg:"Invalid data type used"
        })
    }
    // check if the admin already exists in the db
    const isUserAreadyExisiting=await User.findOne({
        username,password
    });
    if(isUserAreadyExisiting){
        return res.status(202).send({
            msg:"User already exists"
        })
    }
    // if the user does not exists in the db create its value in db
    const user=await User.create({
        username,password 
    })
    if(user){
        return res.status(200).send({
            msg:"New User created Successfully"
        })
    }
    return res.status(500).send({
        msg:"Some error have occured while creating the user"
    })
});

router.post('/signin', async(req, res) => {
    // Implement user signup logic
    const {username,password}=req.body;
    const isValidUser=userSchema.safeParse({
        username,password
    });
    if(!isValidUser.success){
        return res.status(400).json({
            msg:"invalid data type of the admin"
        })
    }
    const user=await User.findOne({
        username,password
    })
    if(user){
        const token=jwt.sign({username},SECRET);
        res.userToken=token;
        console.log(token);
        return res.status(200).json({
            msg:"user signed in successfully" 
        })
    }
    return res.status(500).json({
        msg:"Sign up first"
    })
});


router.get('/courses', async(req, res) => {
    // Implement listing all courses logic
    const courses=await Course.find({});
    if(courses){
        return res.status(200).send({
            msg:"courses fetched successfully",
            courses:courses
        })
    }
    return res.status(500).send({
        msg:"Some error occured in fetching the course"
    })
});

router.post('/courses/:courseId', userMiddleware, async(req, res) => {
    // Implement course purchase logic
    const courseId=req.params.courseId;
    const {username,password}=req.headers;
    console.log(courseId)
    //  update the user entry in the db
    const upadteUser=await User.updateOne(
        {username,password},
        {$push:{
            Course:courseId
        }}
    )
    const user=await User.findOne({
        username,password
    })

    if(upadteUser){
        return res.status(200).send({
            msg:"course added successfully",
            user:upadteUser,
            user:user
        })
    }
    return res.status(500).send({
        msg:"some erorr occured in creating the course"
    }) 
});

router.get('/purchasedCourses', userMiddleware, async(req, res) => {
    // Implement fetching purchased courses logic
    const {username,password}=req.headers;
    const user=await User.findOne({
        username,password
    });
    const course=await Course.find({
        _id:user.Course
    })
    if(course){
        return res.status(200).send({
            msg:"purchased course fetched",
            course:course
        })
    }
    return res.status(500).send({
        msg:"purchased course fetched error ",
       
    })
});

module.exports = router