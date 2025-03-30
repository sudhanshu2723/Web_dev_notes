// import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
// import Dashboard from "./components/Dashboard";
// import { Suspense } from "react";
// import {React} from 'react'
// // lazy loading->reders the pages as it is required
// const Landing = React.lazy(()=>import("./components/Landing"));
//      // using suspense api for lazy loading
// function App() {
//   const navigate=useNavigate();
//   return (
//    <div>
//       this is navbar 
//       {/* window.location.href does hard reload on the paage, that is renders the page again
//       // to handle this issue we use useNavigate->prevents re-render of the page 
//       // useNavigate can only be used inside BrowserRouter->so we will put the browserRouter in index.js
//       */}
//       <button onClick={()=>{
//         // window.location.href='/dashboard'
//         navigate('/dashboard')
//       }}>
//       Dashboard
//       </button>
//       <button onClick={()=>{
//         // window.location.href='/Landing'
//         navigate('/landing')
//       }}>
//         Landing
//         </button>

import { useContext, useState } from "react";
import { CountContext } from "./context";

      
//       <Routes>
//         <Route path="/dashboard" element={ <Dashboard/>}/>
//         // using suspense api
//         <Route path="/landing" element={<Suspense fallback={"loading..."}> <Landing/></Suspense>}/>
//       </Routes>
   
//    </div>
//   );
// }

// export default App;

// read about reducer and useReducer hook

// pop drillling

function App(){
  const[count,setCount]=useState(0);
return <div>
  <Count count={count} />

 
</div>
}

function Count({count,setCount}){
return (
  <div>
    {/*  if we want to use CountContext then wrap them in that lowest common ancestor */}
    <CountContext.Provider value={{count,setCount}}>
   <CountRenderer />
   <Button  setCount={setCount}/>
   </CountContext.Provider>
  </div>
)
}
function CountRenderer(){
  const[count,setCount]=useContext(CountContext);
  return (
    <div>
      {count}
    </div>
  )
}

function Button(){
  const[count,setCount]=useContext(CountContext);
  return (
    <div>
   <button onClick={()=>{
    setCount(count=>count+1)
   }}>Increase</button>
    <button onClick={()=>{
    setCount(count=>count-1)
   }}>Decrease </button>
    </div>
  )
}

export default App;


// contect api->helps to pass the component down the line with doing prop drilling
// context api ->re-renders all the components in which it is wrapper irrespective of that component is using the context or not ->so it is inefficient therefore we use recoil

// context api makes rendering slow, it just gets rid of pop drilling



