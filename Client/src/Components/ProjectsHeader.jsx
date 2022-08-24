import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import React from "react";

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
          <Box border="1px solid red" marginRight="16px">
            <Input fontWeight="500" placeholder="Client or Project" />
          </Box>
          <Button
            bg="
#3d73da"
            paddingLeft={10}
            paddingRight={10}
          >
            + New project
          </Button>
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
