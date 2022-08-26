import React from 'react'
import { useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import CalenderHeader from '../Components/calender/CalenderHeader'
import DayCalender from '../Components/calender/DayCalender'
 
import Calender from '../Components/calender/MonthCalender'
import WeekCalender from '../Components/calender/WeekCalender'

const AllCalender = () => {
  const navigate = useNavigate()
  useEffect(()=>{
 
  },[])
  return (
    <div> 
    
      <Routes>
       <Route path='/day' element={<DayCalender/>}/>
       <Route path='/week' element={<WeekCalender/>}/>
       <Route path='/month' element={<Calender/>}/>
      </Routes>
    </div>
  )
}

export default AllCalender