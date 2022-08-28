import { Box, Flex } from '@chakra-ui/react'
import React, { useContext, useEffect, useState } from 'react'
  import GlobalContext from "../../context/GlobalContext"
import {getMonth} from '../../utils/utils'
import ProjetcSideBar from '../ProjetcSideBar'
import CalenderHeader from './CalenderHeader'
 
import Month from './Month'
 



const Calender = () => {

  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex  } = useContext(GlobalContext);

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);


  console.table(currentMonth)
  return (
    <>
     <Flex>
     <ProjetcSideBar />
     <Box    w="90%" >

     <CalenderHeader/>
      <Month month={currentMonth}/>
     </Box>
      </Flex> 
 
    </>
  )
}

export default Calender