const express=require("express");
const z=require("zod");
const { Todo, User } = require("./db");
const jwt=require("jsonwebtoken");
const { todoSchema, userSchema } = require("./types");
const { secret } = require("./secret");
const { todoMiddleware } = require("./middleware");
const app=express();
const cors=require('cors')
app.use(express.json());
app.use(cors());

app.post('/signup',async(req,res)=>{
    const {username,password}=req.body;
    console.log(username);
    console.log(password)
    const isValidSchema=userSchema.safeParse({
        username,password
    });
    if(!isValidSchema.success){
        return res.status(400).json({
            msg:"some error occured in creating the user"
        })
    }
    // create user
    const user=await User.create({
        username,password 
    });
   
    if(user){
        console.log("user created successfully")
        return res.status(200).json({
            user:user,
            msg:"user created successfully"
        })
    }
    return res.status(400).json({
        msg:"some error occured in creating user" 
    })


})

app.post('/signin',async(req,res)=>{
    const {username,password}=req.body;
    const isValidSchema=userSchema.safeParse({
        username,password
    });
    if(!isValidSchema.success){
        return res.status(400).json({
            msg:"some error occured in creating the user"
        })
    }
    // create user
    const user=await User.findOne({
        username,password 
    });
    const token=jwt.sign(username,secret)
    console.log("signed in successfully");
    console.log(user)
   
    if(user){
        return res.status(200).json({
            msg:"Signed In Successfully",
            token:token,
            user:user._id
        })
    }


    return res.status(201).json({
        msg:"some error occured in signing user" 
    })



})

app.post("/todo",todoMiddleware, async(req,res)=>{
    const data=req.body;
    const {title,description}=data;
    const token=req.headers.authorization;
    const username=jwt.decode(token);
    console.log("adding todo")
    const isValid=todoSchema.safeParse({title,description});
    if(!isValid.success){
        return res.status(400).json({
            msg:"Invlid type of post"
        })
    }
    const createTodo=await Todo.create({
        title,description
    });
    if(!createTodo){
        return res.status(400).json({
            msg:"Unable to add todo"
    })
}
 console.log(createTodo)
    const updateUser=await User.updateOne({
        username
    },{
        $push:{
            todos:createTodo._id
        }
    })
    const user=await User.find({username});
    console.log("todo created")
    if(updateUser){
        return res.status(200).json({
            msg:"todo updated",
            updateUser:updateUser,
            username:user
        })
    }
    return res.status(500).json({
        msg:"Some error occured in updating todos"
    })


})

app.get("/todos",async(req,res)=>{
    const token=req.headers.authorization
    const username=jwt.decode(token);
    console.log(jwt.decode(token));
    const user=await User.findOne({username});
    console.log("the user is")
    console.log(user)
    const todos=await Todo.find({
        _id:user.todos
    });
    console.log(todos)
    return res.status(200).json({
        msg:"todos recieved",
        data: todos
     })
})

app.put("/updateTodos/:todoId",async(req,res)=>{
    console.log("updating the todos")
    const token=req.headers.authorization;
    const username=jwt.decode(token);
    const user=await User.findOne({username});
    const todoId=req.params.todoId;
    const {title,description}=req.body; 
    console.log("ttile"+title);
    console.log("description"+description);
    console.log("id is"+todoId)
    const todos=await Todo.findOneAndUpdate({
        _id:todoId 
    },{
        title,description 
    });
    if(todos){
        return res.status(200).json({
            msg:"Todos updated successfully"
        })
    }
    return res.status(400).json({
        msg:"Some error occured"
    })
})



app.listen(3000,()=>{
    console.log("listening to port 3000");
})