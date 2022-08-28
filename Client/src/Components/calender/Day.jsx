import React, {  useState, useEffect } from "react";
import {
  Box,
  
  Text,
  Flex,
  
} from "@chakra-ui/react";
 
import dayjs from "dayjs";
 
import "./day.css";
 
 
 
import { useDispatch, useSelector } from "react-redux";
import DayProjects from "./DayTask";
import AddTask from "./AddTask";
import axios from "axios";
import { getTaskProject } from "../../Redux/Task_reducer/action";

const   Day = ({ day, rowIdx,color,boxShadow1,show=true,wid="167",hei="200px" }) => {
const dispatch = useDispatch()
  const [projectArray,setProjectArray] = useState([])
  useEffect(()=>{

    
      axios.get("https://whispering-thicket-24456.herokuapp.com/project")
      .then((res)=>  setProjectArray(res.data))
      .catch((err)=>console.log(err))
   

  },[])

 
  
  // console.log("projectArrayof main",projectArray)

 
  useEffect(()=>{
    // console.log("getTask useEffect")
dispatch(getTaskProject())
  },[])

  function getCurrentDayClass() {
    return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
      ? color  || "#f8f9f4"
      : "";
  }
 
  const data = useSelector((state) => state.Task_reducer.project);
  // console.log("data comming",  data)

  const dayTask = data.filter((e) => e.date === day.format("YYYY-MM-DD"));
//  console.log(dayTask);
  return (
    <Box 
    
      className="myDIV"
      p="10px"
      border={"1px solid lightgrey"}
      w =  {`${wid}`}
      minH={`${hei}`}
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
           <DayProjects key={e.refNO} projectArray={projectArray}  {...e} time={`${day.format("YYYY-MM-DD")}`} />
        ))} 
         
      </Box>
    {
      show?  <Box  className="hide"  onClick={() => {
        // console.log(day.format("MMM-DD"))
        // setDayschdule(`${day.format("DD-MMMM-YYYY")}`);
      }}>   <AddTask projectArray={projectArray} time={`${day.format("YYYY-MM-DD")}`} />

</Box>:  <Box    onClick={() => {
        // console.log(day.format("MMM-DD"))
        // setDayschdule(`${day.format("DD-MMMM-YYYY")}`);
      }}>   <AddTask wid={"34rem"} projectArray={projectArray} time={`${day.format("YYYY-MM-DD")}`} />

</Box>
    } 
    
    </Box>
  );
};

export default Day;
