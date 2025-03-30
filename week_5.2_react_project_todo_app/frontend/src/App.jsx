import { useState } from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"

import Home from './components/Home'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import Dashboard from './components/dashboard'

function App() {
  return (
   <BrowserRouter>
       <Routes>
          <Route path="signup" element={<SignUp/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="signin" element={<SignIn/>}/>
          <Route path="dashboard/:userId" element={<Dashboard/>}/>
       </Routes>
   </BrowserRouter>

  )
}

export default App
