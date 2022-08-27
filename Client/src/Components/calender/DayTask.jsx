import React, { useContext, useEffect } from "react";
import { Box, Text, Avatar, Flex, Heading } from "@chakra-ui/react";

import "./day.css";

import { useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import TaskModel from "./EditTask";
import axios from "axios";
 
const DayProjects = ({ title, refNO, date, time,projectArray,project,projectId }) => {


  const [isdate, setDate] = useState(date);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      <Box
        boxShadow="rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"
        borderRadius="10px"
        h="auto"
        w="160"
        className="pro"
        fontSize={"20px"}
        alignItems={"center"}
        marginTop="10px"
        bg="red"
        marginLeft="-2px"
        color="white"
        onClick={onOpen}
      >
        <Box borderRadius="10px" h="auto" p="10px" fontSize={"20px"}>
          <Heading fontSize={"25px"}>{title}</Heading>
          <Text>{project}</Text>
        </Box>
      </Box>
      <TaskModel
      key={refNO}
   projectArray={projectArray}
        refNO={refNO}
        title={title}
        project={project}
        projectId={projectId}
        time={time}
        date={isdate}
        setDate={setDate}
        isOpen={isOpen}
        onClose={onClose}
      />
    </Box>
  );
};

export default DayProjects;
