


import React from 'react'
import {Routes, Route} from "react-router-dom"
import Dashboard from './Dashboard'
import HomePage from './Home'
import Login from './Login'
import Project from './Project'
import Signup from './Signup'
const MainRoutes = () => {
  return (
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects" element={<Project />} />
      <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
    </Routes>
  )
}


export default MainRoutes