import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CalenderHeader from '../Components/calender/CalenderHeader'
import DayCalender from '../Components/calender/DayCalender'
 
import Calender from '../Components/calender/MonthCalender'
import WeekCalender from '../Components/calender/WeekCalender'

const AllCalender = () => {
  return (
    <div> 
      <CalenderHeader/>
      <Routes>
       <Route path='/day' element={<DayCalender/>}/>
      
       <Route path='/month' element={<Calender/>}/>
      </Routes>
    </div>
  )
}

export default AllCalender