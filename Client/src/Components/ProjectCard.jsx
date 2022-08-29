import { Box, Flex,   Stack, Text } from "@chakra-ui/react";
import React  from "react";
import { Menu, MenuButton, MenuList } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import {
  deleteProjtes,
  editProject,
  getProjets,
} from "../Redux/AppReducer/action";
import { BsFillBagFill } from "react-icons/bs";
import { EditProjects } from "./EditProjects";
import { useToast } from "@chakra-ui/react";

const ProjectCard = ({ projects }) => {
   
  const dispatch = useDispatch();
  const toast = useToast();
  const handleDelete = (text,id) => {
    // console.log("delete:", id);
   
    dispatch(deleteProjtes(id)).then((res) => {
      dispatch(getProjets());
    });
    toast({
      title: ` ${text} is deleted `,
      description: `All Tasks will deleted   `,
      status: "error",
      duration: 1000,
      isClosable: true,
      position: "top",
    });
  };

  const handleStatus = (e, id) => {
    // console.log(e.target.checked, id);
    // console.log(e.target.defaultChecked);
    if (e.target.defaultChecked) {
      var payload = {
        id: id,
        body: {
          projectStatus: "Pending",
        },
      };
   }
    else {
         payload = {
         id: id,
         body: {
           projectStatus: "Complete",
         },
       };
    }
  
    
   
    dispatch(editProject(payload)).then((res) => dispatch(getProjets()))
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
            <p onClick={() => handleDelete(projects.projectname,projects._id)}>Delete</p>
          </Flex>
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default ProjectCard;
