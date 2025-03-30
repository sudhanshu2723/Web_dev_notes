const z=require("zod");


const todoSchema=z.object({
    title:z.string(),
    description:z.string()
})


const userSchema=z.object({
    username:z.string(),
    password:z.string()
})

module.exports={
    todoSchema,userSchema
}