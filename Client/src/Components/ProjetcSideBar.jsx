import { Box, Stack, TagLabel } from "@chakra-ui/react";
import React from "react";
import {
  BsBagFill,
  BsFillBagCheckFill,
  BsClockFill,
  BsPeopleFill,
  BsBarChartLineFill,
} from "react-icons/bs";
const ProjetcSideBar = () => {
  return (
    <Stack
      w="100px"
      border="1px solid red"
      color="white"
      h="100vh"
      bg="#44505e"
      gap="40px"
      alignItems="center"
    >
      <Stack alignItems="center" gap="0px">
        <BsClockFill fontSize="25px" />
        <label>Hours</label>
      </Stack>
      <Stack alignItems="center">
        <BsFillBagCheckFill fontSize="25px" />
        <label>Task</label>
      </Stack>
      <Stack alignItems="center">
        <BsBagFill fontSize="25px" />
        <label>Projects</label>
      </Stack>
      <Stack alignItems="center">
        <BsPeopleFill fontSize="25px" />
        <label>People</label>
      </Stack>
      <Stack alignItems="center">
        <BsBarChartLineFill fontSize="25px" />
        <label>Reports</label>
      </Stack>
    </Stack>
  );
};

export default ProjetcSideBar;
