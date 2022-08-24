import React from 'react'
import {Routes, Route} from "react-router-dom"
import HomePage from './HomePage'
import Login from './Login'
import Signup from './Signup'
const MainRoutes = () => {
  return (
      <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/signup' element={<Signup></Signup>}></Route>
    </Routes>
  )
}

export default MainRoutes