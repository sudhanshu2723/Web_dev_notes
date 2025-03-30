const mongoose=require("mongoose");

mongoose.connect('mongodb+srv://kirags123:8qPEa8KTKBEh2bss@cluster0.f3qlbuo.mongodb.net/courses_ka_app');


const userSchema=new mongoose.Schema({
    username:String,
    password:String,
    todos:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Todo'
    }]
})

const todoSchema=new mongoose.Schema({
    title:String,
    description:String 
})

const User=mongoose.model('User',userSchema);
const Todo=mongoose.model('Todo',todoSchema);

module.exports={
    User,Todo
}