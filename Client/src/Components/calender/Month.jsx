import React from 'react'
import Day from './Day'
 
import { SimpleGrid,Container,Box,Text} from '@chakra-ui/react'
 

const Month = ({month}) => {
//  console.log(month)
  return (
    <Box    w="100%" m="auto" boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px;" >
    
   < Box >
   {month.map((row, i) => (
     <SimpleGrid  columns={7}    key={i}>
       {row.map((day, idx) => 
        {
    
 
      return   <Day day={day} key={idx} rowIdx={i} />
        
        })}
     </SimpleGrid    >
   ))}
 </ Box>
   </Box>
  )
}

export default Month