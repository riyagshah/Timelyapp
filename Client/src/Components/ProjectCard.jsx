import { Box, Flex, Input, Stack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import {
  deleteProjtes,
  editProject,
  getProjets,
} from "../Redux/AppReducer/action";
import { BsFillBagFill } from "react-icons/bs";
import { EditProjects } from "./EditProjects";

const ProjectCard = ({ projects }) => {
  const [status, setStatus] = useState("");
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    console.log("delete:", id);
    dispatch(deleteProjtes(id)).then((res) => {
      dispatch(getProjets());
    });
  };

  const handleStatus = (e, id) => {
    console.log(e.target.checked, id);
    console.log(e.target.defaultChecked);
    if (e.target.defaultChecked) {
      var payload = {
        id: id,
        body: {
          projectStatus: "Pending",
        },
      };
   }
    else {
       var payload = {
         id: id,
         body: {
           projectStatus: "Complete",
         },
       };
    }
  
    
   
    dispatch(editProject(payload)).then((res) => {
      dispatch(getProjets());
    })
  };
  // console.log(projects)

  return (
    <Flex
      w="90%"
      justifyContent="space-between"
      margin="auto"
      alignItems="center"
    >
      <Flex alignItems="center" gap="16px">
        <BsFillBagFill fontSize="35px" color={projects.pColor} />
        <Stack gap="-50px">
          <Text marginBottom="-10px">{projects.projectname}</Text>
          <Text color="gray">{projects.clientname}</Text>
        </Stack>
      </Flex>

      <Menu w="400px">
        <MenuButton>....</MenuButton>
        <MenuList>
          <Flex
            direction="column"
            justifyContent="flex-start"
            textAlign="start"
            marginLeft="16px"
          >
            <Box>
              <input
                type="checkbox"
                value={projects.projectStatus}
                defaultChecked={projects.projectStatus === "Complete"}
                onChange={(e) => handleStatus(e, projects._id)}
              />
              {"  "}
              <label>{projects.projectStatus}</label>
            </Box>

            <p>
              <EditProjects project={projects} />
            </p>
            <p onClick={() => handleDelete(projects._id)}>Delete</p>
          </Flex>
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default ProjectCard;
