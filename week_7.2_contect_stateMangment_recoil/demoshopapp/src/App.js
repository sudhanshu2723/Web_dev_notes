import { useState } from "react";
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom, evenSelector } from "./store/atoms/count";

// in Recoil it should be wrapped in RecoilRoot
// if we require the value then call useValue only , not the useSetReoilState , this leads to performance benefits
// recoil re-renders only those components whose props are changed. therefore more performant than contextAPI

function App(){
  
return <div>
  <RecoilRoot>
  <Count  />
  </RecoilRoot>

 
</div>
}

function Count(){
return (
  <div> 
   <CountRenderer />
   <Button  />
   <Button/>
  </div>
)
}
function CountRenderer(){
  // getting just the value
 const count=useRecoilValue(countAtom)
 const isOdd=useRecoilValue(evenSelector);
  return (
    <div>
      {isOdd ? ("it is odd") : ("it is even")}
      {count}
    </div>
  )
}

function Button(){
  // getting just the state
  const setCount=useSetRecoilState(countAtom)

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

function Book(){
  //getting both the state and the value
  const[count,setCount]=useRecoilState(countAtom);
  return (
    <div>
      <button onClick={()=>setCount(count+1)}>{count}</button>
    </div>
  )
}

export default App;
