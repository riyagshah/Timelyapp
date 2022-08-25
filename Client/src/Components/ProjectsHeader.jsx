import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import React from "react";
import { ProjectsModal } from "./ProjectsModal";

function ProjectsHeader() {
  return (
    <Box
      bg="#eef1f2"
      w="100%"
      p={4}
      height="120px"
      color="white"
      paddingRight="10%"
      paddingLeft="10%"
    >
      <Flex justifyContent="space-between">
        <Text
          color="#44505e"
          fontSize="45px"
          fontWeight="600"
          fontFamily="Circular, -apple-system, BlinkMacSystemFont, system, sans-serif"
        >
          Projects
        </Text>
        <Flex w="" alignItems="center">
          <Box marginRight="16px" color="#303134">
            <Input
              border="1px solid blue"
              type="text"
              fontWeight="500"
              placeholder="Client or Project"
            />
          </Box>
          <ProjectsModal />
        </Flex>
      </Flex>
      <Box w="max-content" color="black" display="flex" gap="16px">
        <Button bg="white">Dashboard</Button>
        <Button bg="white">All Projects</Button>
      </Box>
    </Box>
  );
}

export default ProjectsHeader;
