// import React from 'react'

// function App() {
//   return (
//     <React.Fragment>
//     <Header title={"sudhanshu"}/>
//     <Header title={"pandey"}/>
//     </React.Fragment>
//   );
// }

// const Header=({title})=>{
//   return (
//     <div>
//      The title is {title}
//     </div>
//   )
// }

// export default App;


//  import React, { useState } from 'react'

// function App() {
//   return (
//     <React.Fragment>
//        <Header/>
//       <div>my name is raman</div>
//     </React.Fragment>
//   );
// }

// function Header(){
//   const[name,setname]=useState('Harkirat');
//   function changeNameHandler(){
//     setname(Math.random)
//   }
//   return (
//    <>
//     <button onClick={changeNameHandler}>Click me to change the title</button>
//     <div>my name is {name}</div>
//    </>
//   )
// }



// export default App;


//  MEMO HOOK=-> lets you skip re-rendering a component when its props are unchanged.
// while re-rendering a componenet the whole <div> tag(which is prsent in HTML of console) also rerenders 
// import React, { useState } from 'react'


// function App() {
//   let cnt=0;
//   const [title,setTitle]=useState("my name is sudhanshu");
//   function updateTitle(){
//     setTitle("my name is harkirat"+cnt);
//     cnt++;
//   }
//   return (
//   <div>
//     <button onClick={updateTitle}>Update the title</button>
//     <Header title={title}></Header>
//     <Header title="harkirat1"></Header>
//     <Header title="harkirat2"></Header>
//     <Header title="harkirat3"></Header>
//     <Header title="harkirat4"></Header>
//   </div>
//   );
// }


// const Header=(({title})=>{
//   return (
//     <div>{title}</div>
//   )
// })

// export default App;


//import React, { useState } from 'react'


// keys 
// function App() {
//      const [title,setTitle]=useState('');
//      const [descritption,setdescription]=useState('');
//      const[todoArr,setTodoArr]=useState([
//       {
        
//         title:"todo1",
//         description:"go to gym"
//       },
//       {
//         title:"todo2",
//         description:"go to gym"
//       },
//       {
//         title:"todo3",
//         description:"go to gym"
//       }
//     ])

//     function addTodoHandler(){
//          setTodoArr(prevTodoArr=>[
//           ...prevTodoArr,
//           {
//             title:title,
//             description:descritption
//           }
//          ])
//          setTitle('');
//          setdescription('');
//     }

//     function changeTitleHandler(e){
//           setTitle(e.target.value)
          
//     }
//     function changeDescriptionHandler(e){
//       setdescription(e.target.value)
// }
//   return (
//   <div>
//     <input type='string' onChange={changeTitleHandler} value={title}></input>
//     <br/>
//     <input type='string' onChange={changeDescriptionHandler} value={descritption}></input>
//     <br/>
//     <button onClick={addTodoHandler}>Add Todo</button>
//      { todoArr.map((value)=>{
//       // keys are used to uniquely identify an element in an array
//       return <TodoDisplay key={value.title} title={value.title} description={value.description} />
//       })}
//   </div>
//   );
// }

// const TodoDisplay=React.memo(function TodoDisplay({title,description}){
//   return (
//    <>
//     <div>the title is {title}</div>
//     <div>The descritption is {description}</div>
//     <br/>
//    </>
//   )
// })

// export default App;


// import React, { useState } from 'react'

// function App(){
//   const[value,setValue]=useState(0);
 
//   return (
//   <div>
    
//    <CardWrapper innerComponent={<TextComponent/>}>
//    this is where children is placed
//    </CardWrapper>
//    <button onClick={()=>{setValue((value)=>value+1) }}>the value is {value}</button>
//   </div>
//   );
// }

// function TextComponent(){
//   return (
//     <div>
//       hi there
//     </div>
//   )
// }

// function CardWrapper({innerComponent,children}){
//   return (
//     <div>
//    {innerComponent}
//    {children}
//     </div>
//   )
// }

// export default App;


//USEEFFECT HOOK
import React, { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react'
async function getData(setValue) {
  const data =await  fetch("www.google.com");
   const response=data.json();
   setValue(JSON.stringify(response));
}

   // Memo is used to skip re-rendering a component if its props are unchanged
   // hete when the firstName canges then only the function gets re-rendered
   const Dummy=memo(({firstName})=>{
    return <div>
      hi there {firstName}
    </div>
   })

function App(){
  const[value,setValue]=useState(0);
   useEffect(()=>{
   setTimeout(()=>{
    getData(setValue)
   },3000)
   },[])
// useMemo is used to avoid any computations
//, this computation will taken place again only 
//when the state value in dependency array changes
   const solve=useMemo(()=>{
    return value*value;
   },[value])

// useCallback->it allows the function to be re-rendered only when the components inside the
// dependency array changes
// this function will only be rendered again when the state variable "value" changes
  const calculateCrytoReturns=useCallback(()=>{
    return value*value
  },[value])

  // useRef->used to handle dom manipulations
  const dievRef=useRef();

  useEffect(()=>{
    setTimeout(()=>{
      dievRef.current.innerHTML=10
    },3000)
  },[])

  return (
  <div>
    <div>the value is {value}</div>
    <Dummy firstName={"sudhanshu"}/>
    // reference to the useRef
    <div ref={dievRef}>hello there</div>
  </div>
  );
}



export default App;