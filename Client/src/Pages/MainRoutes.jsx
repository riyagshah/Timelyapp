import React from 'react'
import {Routes, Route} from "react-router-dom"
import HomePage from './HomePage'
import Project from './Project'
const MainRoutes = () => {
  return (
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects" element={<Project/>}/>
    </Routes>
  )
}

export default MainRoutes