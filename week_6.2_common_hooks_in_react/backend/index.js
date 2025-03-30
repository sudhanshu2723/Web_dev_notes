const express=require("express");
const cors=require("cors");


const app=express();
app.use(cors());

const data=[
    {id:1,title:"todo1",description:"this is todo1"},
    {id:2,title:"todo2",description:"this is todo2"},
    {id:3,title:"todo3",description:"this is todo3"}
]

app.get("/todos/:id",(req,res)=>{
  return res.json({
    data:data[req.params.id]
  })
})

app.listen(3000);