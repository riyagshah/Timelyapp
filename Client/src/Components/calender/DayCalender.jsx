import React, { useContext, useEffect, useRef, useState } from "react";
import Day from "./Day";

import { SimpleGrid,  Box,  Flex ,Image} from "@chakra-ui/react";

import GlobalContext from "../../context/GlobalContext";
import { getMonth } from "../../utils/utils";
import dayjs from "dayjs";
import CalenderHeader from "./CalenderHeader";  
import ProjetcSideBar from "../ProjetcSideBar";

const DayCalender = () => {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex } = useContext(GlobalContext);
  const currentWeek = useRef();
  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  useState(() => {
    for (let i = 0; i < currentMonth.length; i++) {
      for (let j = 0; j < currentMonth[i].length; j++) {
        if (
          currentMonth[i][j].format("DD-MM-YY") === dayjs().format("DD-MM-YY")
        ) {
          // console.log(currentMonth[i][j].format("DD-MM-YY"));

          currentWeek.current = i;
        }
      }
    }
  }, []);
  // console.log("currentWeek", currentWeek);
  //  console.log(month)

  return (
    <>
    <Flex>
    <ProjetcSideBar />
      <Box    w="90%">

      <CalenderHeader />
      <Flex>

      <Box  w="35rem"   boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px;">
        <Box>
          {currentMonth.map((row, i) => {
            // console.log(row, i);
            if (i === currentWeek.current) {
              return (
                <SimpleGrid h="42rem" columns={7} key={i}>
                  {row.map((day, idx) => {
                    if (day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")) {
                      return (
                        <Day
                          color={"white"}
                          show={false}
                          boxShadow1={
                            "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
                          }
                         wid={"35rem"}
                         hei="100vh"
                          day={day}
                          key={idx}
                          />
                          );
                        } else {
                      return null;
                    }
                  })}
                </SimpleGrid>
              );
            } else {
              return null;
            }
          })}
        </Box>
      </Box>
      <Box>
       <Image   w="600px" h="670px"  src="https://i.postimg.cc/T18NpT6K/Screenshot-579.png"/>
      </Box>
          </Flex>
          </Box>
          </Flex>
    </>
  );
};
export default DayCalender;
