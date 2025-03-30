import axios from 'axios'
import react, { useEffect, useState } from 'react'

// CUSTOM HOOKS
// starts with 'use'
// uses hooks internally

// custom hook to extract the data from the backend and store it in  a hook
function useTodos(){
    const [todos,setTodos]=useState([])
    const[loading,setLoading]=useState(true)
    useEffect(()=>{
      axios.get("https://sum-server.100xdevs.com/todos")
      .then((res)=>{
        setTodos(res.data.todos)
        setLoading(false)
      })
    },[])
    return {todos,loading}

}
// custom hook which fetches the todos after every n seconds
function useNewTodos(n){
  const [todos,setTodos]=useState([])
  const[loading,setLoading]=useState(true)
  useEffect(()=>{
    axios.get("https://sum-server.100xdevs.com/todos")
    .then((res)=>{
      setTodos(res.data.todos)
      setLoading(false)
    })
 

  const value=setInterval(()=>{
    axios.get("https://sum-server.100xdevs.com/todos")
    .then((res)=>{
      setTodos(res.data.todos)
      setLoading(false)
    })
  },n*1000)
  return ()=>{
    // used to stop the old clock when the new clock starts
    clearInterval(value)
  }
  return {todos,loading}
},[n])
}

function App() {

  // const {todos,loading}=useTodos()
  const {todos,loading}=useNewTodos(3)
  if(loading){
    return (
      <div>loading ...</div>
    )
  }
  return (
    
    <div>
       {todos}
    </div>
  );
}

export default App;
