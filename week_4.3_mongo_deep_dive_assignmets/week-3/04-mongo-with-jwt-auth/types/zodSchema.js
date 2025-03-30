const z=require("zod");

 const AdminSchema=z.object({
    username:z.string().min(2).max(15),
    password:z.string().min(2).max(12)
})

 const userSchema=z.object({
    username:z.string().min(2).max(15),
    password:z.string().min(2).max(12)
})

 const courseSchema=z.object({
    title:z.string().min(4).max(34),
    description:z.string().min(3).max(100),
    price:z.number().min(1),
    published:z.boolean()
})

module.exports={
    userSchema,AdminSchema,courseSchema
}



