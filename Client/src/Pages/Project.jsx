import { Box, Center, Flex, Wrap, WrapItem } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProjectCard from "../Components/ProjectCard";
import ProjectsHeader from "../Components/ProjectsHeader";
import { getProjets } from "../Redux/AppReducer/action";
import { v4 as uuid } from "uuid";

const Project = () => {
  const projects = useSelector((store) => store.AppReducer.projectName);
  console.log(projects);
  const dispatch = useDispatch();

  useEffect(() => {
    if (projects.length === 0) {
      dispatch(getProjets());
    }
  }, [projects.length]);

  return (
    <>
      <ProjectsHeader />

      <Wrap
        spacing="40px"
        w="80%"
        margin="auto"
        paddingTop="46px"
       
      >
        {projects.length > 0 &&
          projects.map((item) => {
            return (
              <Box key={uuid()} margin="auto">
                <Flex
                  w={[320, 260, 260]}
                  h="80px"
                  bg="#ffffff"
                  boxShadow="rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px"
                  color="#202020"
                  fontWeight="500"
                  alignContent="center"
                >
                  <ProjectCard projects={item} />
                </Flex>
              </Box>
            );
          })}
      </Wrap>
    </>
  );
};

export default Project;

//  rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px box-shadow:box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
//box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;