import React, { useContext, useState, useEffect } from "react";
import {
  Box,
  Grid,
  GridItem,
  Text,
  Flex,
  MenuButton,
  Menu,
  Button,
  Center,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import { AddIcon } from "@chakra-ui/icons";
import "./day.css";
 
 
 
import { useDispatch, useSelector } from "react-redux";
import DayProjects from "./DayTask";
import AddTask from "./AddTask";
import axios from "axios";
import { getTaskProject } from "../../Redux/Task_reducer/action";

const   Day = ({ day, rowIdx,color,boxShadow1,wid }) => {
const dispatch = useDispatch()
  const [projectArray,setProjectArray] = useState([])
  useEffect(()=>{

    
      axios.get("http://localhost:8080/project")
      .then((res)=>  setProjectArray(res.data))
      .catch((err)=>console.log(err))
   

  },[])
  
  console.log("projectArrayof main",projectArray)

  function getCurrentDayClass() {
    return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
      ? color  || "#f8f9f4"
      : "";
  }
 
  const data = useSelector((state) => state.Task_reducer.project);
  console.log("data comming",  data)

  const dayTask = data.filter((e) => e.date === day.format("YYYY-MM-DD"));
 // console.log(dayTask);
  return (
    <Box 
    
      className="myDIV"
      p="10px"
      border={"1px solid lightgrey"}
      w= "167"
      minH="200px"
      textAlign="start"
      bgColor={`${getCurrentDayClass()}`}
     
    >
      {rowIdx === 0   && (
       <Text  fontSize='lg' color={"grey"}  >{day.format("dddd").toUpperCase()}</Text>
      )}

 
      <Flex color={"grey"} justifyContent="space-between">
        <Text>{day.format("MMM-DD")}</Text>

      
      </Flex>
      <Box>
        {dayTask.map((e) => (
           <DayProjects key={e.refNO}   {...e} time={`${day.format("YYYY-MM-DD")}`} />
        ))} 
         
      </Box>
      <Box  className="hide" onClick={() => {
                  // console.log(day.format("MMM-DD"))
                  // setDayschdule(`${day.format("DD-MMMM-YYYY")}`);
                }}>   <AddTask projectArray={projectArray} time={`${day.format("YYYY-MM-DD")}`} />
     
      </Box>
    
    </Box>
  );
};

export default Day;
