// import React, { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
  

//   return (
//     <>
//      {/* <Header title="todo1" description="this is a todo1"></Header>  */}
//      {/* <Header title="todo2" description="this is a todo2"></Header> */}
   
//      <div>My name is raman</div>
//      <ChangeName/>
//     </>
//   )
// }

// function ChangeName(){
//   const [name, setName] = useState("harkirat")
//   return (
//    <>
//     <button onClick={()=>setName(Math.random)}>Click me to change the title</button>
//     <div>My name is {name}</div>
//    </>
//   )
// }

// function Header({title,description}){
//     return (
//     <React.Fragment>
//         <div>{title}</div>
//         <div>{description}</div>
//     </React.Fragment>
//     )
// }

// export default App


// Not working
// React Memo : it lets you skip re-rendering a component when it props are unchanged

// import React, { memo, useState } from 'react'
// import './App.css'



// function App() {
  
//   const [name, setName] = useState("harkirat")
//   function updateName(){
//     setName(Math.random().toString())
//   }
//   return (
//     <>
//      <Header title="todo1" description="this is a todo1"></Header>  
//      <Header title="todo2" description="this is a todo2"></Header>  
//      <Header title="todo3" description="this is a todo3"></Header>  
//      <Header title="todo4" description="this is a todo4"></Header>  
//      <Header title={name} description="this is a todo2"></Header>
//      <button onClick={updateName}>Click me to change the title</button>
//      <div>My name is raman</div>
//     </>
//   )
// }


// const Header=memo(({title,description})=>{
//   return (
//     <React.Fragment>
//         <div>{title}</div>
//         <div>{description}</div>
//     </React.Fragment>
//     )
// })


// export default App


// KEYS in react
// import React, { memo, useState } from 'react'
// import './App.css'



// function App() {
//   const[title,setTitle]=useState('');
//   const[description,setDescription]=useState('');
  
//   const[id,setId]=useState(4);
//   const [allTodoData,setAllTodoData]=useState([
//     {id:1,title:"todo1",description:"this is todo 1"},
//     {id:2,title:"todo2",description:"this is todo 2"},
//     {id:3,title:"todo3",description:"this is todo 3"}
//   ])
//   function submitHandler(e){
//   e.preventDefault()
//    setAllTodoData(prev=>[...prev,{id:id,title:title,description:description}]);
//    console.log(allTodoData)
//    setId(id=>id+1)
//     setTitle('');
//     setDescription('')
//   }
//   function mapTodos(todo){
//    return <div>
//     {todo.title} {' '} {todo.description}
//    </div>
//   }
//   return (
//     <>
//     <form onSubmit={submitHandler}>
//     title:<input onChange={(e)=>setTitle(e.target.value)} value={title}></input>
//     <br/>
//     Description:<input onChange={(e)=>setDescription(e.target.value)} value={description}></input>
//     <button type='submit'>Submit</button>
//     </form>
//    { allTodoData.map((todo)=>{
//     return (
//       // USing keys to differenticate between todos
//     <div key={todo.id}>  <div>{todo.title}</div>
//       <div>{todo.description}</div>
//       </div>
//     )
//    })}
//     </>
//   )
// }




// export default App


// Wrapprer component in React
import React, { memo, useState } from 'react'
import './App.css'



function App() {

  return (
    <>
    <CardWrapper>
      card1
    </CardWrapper>
    <CardWrapper>
      card2
    </CardWrapper>
    <CardWrapper>
      card3
    </CardWrapper>
    </>
  )
}

function CardWrapper({children}){
  return (
    <div>
      this is card Wrapper component
      {children}
    </div>
  )
}




export default App