const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { AdminSchema, courseSchema } = require("../types/zodSchema");
const { Admin, User, Course } = require("../db");
const router = Router();

// Admin Routes
router.post('/signup', async(req, res) => {
    // Implement admin signup logic
    const data=req.body;
    const {username,password}=data;
    console.log(username);
    console.log(password)
    const isValidSchema=AdminSchema.safeParse({
        username,password
    });
    if(!isValidSchema.success){
        return res.status(400).send({
            msg:"Invalid data type used"
        })
    }
    // check if the admin already exists in the db
    const isUserAreadyExisiting=await Admin.findOne({
        username,password
    });
    if(isUserAreadyExisiting){
        return res.status(202).send({
            msg:"Admin already exists"
        })
    }
    // if the user does not exists in the db create its value in db
    const admin=await Admin.create({
        username,password 
    })
    if(admin){
        return res.status(200).send({
            msg:"New Admin created Successfully"
        })
    }
    return res.status(500).send({
        msg:"Some error have occured while creating the Admin"
    })
});

router.post('/courses', adminMiddleware, async(req, res) => {
    // Implement course creation logic
    const data=req.body;
    const {username,password}=req.headers;
    const {title,description,price,published}=data;
    console.log(username)
    console.log(password)
    
    const isValidCourseSchema=courseSchema.safeParse({
        title,description,price,published
    });
    if(!isValidCourseSchema.success){
        return res.status(400).send({
            msg:"Invlid schema used in creating course"
        })
    }
    // creating the course
    const course=await Course.create({
      title,description,price,imageLink:"https://linktoimage.com"     
    })
    // add the course to admin
    const addingCourse=await Admin.updateOne(
        {username,password},
      {$push:{
        Course:course._id 
      }}    
    
    )
    console.log(addingCourse);
   const admin=await Admin.find({username,password})
    if(course){
        return res.status(200).send({
            msg:"Course created Successfully",
            course:course,
            addingCourse:addingCourse,
            admin:admin 
        })
    }
    return res.status(500).send({
        msg:"Some error occured in creating course"
    })
});

router.get('/courses', adminMiddleware, async(req, res) => {
    // Implement fetching all courses logic
    const {username,password}=req.headers;
    const user=await Admin.findOne({
        username,password
    })
    console.log(user)
    const course=await Course.find({
        _id:user.Course
    })
    if(course){
        return res.status(200).send({
            msg:"courses fetched succesfully",
            data:course
        })
    }
    return res.status(500).send({
        msg:"Some error occured in creating the course"
    })
});

module.exports = router;