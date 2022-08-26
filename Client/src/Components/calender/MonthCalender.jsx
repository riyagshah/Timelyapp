import React, { useContext, useEffect, useState } from 'react'
  import GlobalContext from "../../context/GlobalContext"
import {getMonth} from '../../utils/utils'
import CalenderHeader from './CalenderHeader'
 
import Month from './Month'
 



const Calender = () => {

  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex, showEventModal } = useContext(GlobalContext);

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);


  console.table(currentMonth)
  return (
    <> 
     <CalenderHeader/>
      <Month month={currentMonth}/>
 
    </>
  )
}

export default Calender