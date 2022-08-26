import React, { useContext, useEffect, useRef, useState } from "react";
import Day from "./Day";

import { SimpleGrid, Container, Box, Text  } from "@chakra-ui/react";

import GlobalContext from "../../context/GlobalContext";
import { getMonth } from "../../utils/utils";
import dayjs from "dayjs";
const WeekCalender = () => {

  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex, showEventModal } = useContext(GlobalContext);
const currentWeek = useRef()
  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);


  
  useState(() => {
    for (let i = 0; i < currentMonth.length; i++) {
      for (let j = 0; j < currentMonth[i].length; j++) {
        if (
          currentMonth[i][j].format("DD-MM-YY") === dayjs().format("DD-MM-YY")
        ) {
          // console.log( currentMonth[i][j].format("DD-MM-YY"))
        //  console.log(i);
          currentWeek.current = i;
        }
      }
    }
  }, []);
  console.log(   "currentWeek" ,currentWeek);
  //  console.log(month)

  return (
    <Box w="98%" m="auto" boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px;">
      <Box>
        {currentMonth.map((row, i) => {
          // console.log(row, i);
          if (i ==   currentWeek.current) {
            return (
              <SimpleGrid h="42rem"    columns={7} key={i}>
                {row.map((day, idx) => (
                 
 
                  <Day  day={day} key={idx} rowIdx={currentWeek.current} />
                     
                ))}
              </SimpleGrid>
            );
          } else {
            return null;
          }
        })}
      </Box>
    </Box>
  );
};
export default WeekCalender;