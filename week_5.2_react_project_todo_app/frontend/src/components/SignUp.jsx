import { useState } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom";


export default function SignUp(){
    const[username,setUsername]=useState(null);
    const[password,setPassword]=useState(null);
    const[data,setData]=useState(null);
    const navigate = useNavigate();

    async function onHandleSubmit(e){
        e.preventDefault()
        const response=await axios.post("http://localhost:3000/signup",{
            username:username,
            password:password
        });
        console.log(response);
        console.log("user created successfully");
        navigate("/signin");
       
    }
    return (
        <div>
            SIGN UP to TodoApp 
            <form onSubmit={onHandleSubmit}> 
               Username: <input type="text" onChange={(e)=>setUsername(e.target.value)} placeholder="Enter your username"></input>
               <br/>
               Password: <input type="text" onChange={(e)=>setPassword(e.target.value)} placeholder="Enter your password"></input>
               <br/>
               <button type="submit">Sign In</button>
            </form>
            {/* {data.toString()} */}
        </div>
    )
}