import React, { useContext } from "react";
import { Box, Text, Avatar, Flex, Heading } from "@chakra-ui/react";

import "./day.css";

import { useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import TaskModel from "./EditTask";
const DayProjects = ({ title, refNO, date, time }) => {
 
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
          <Text>project name</Text>
        </Box>
      </Box>
      <TaskModel
   
        refNO={refNO}
        title={title}
        project={""}
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
