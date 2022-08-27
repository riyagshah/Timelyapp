import { Box, Stack, TagLabel } from "@chakra-ui/react";
import React from "react";
import {
  BsBagFill,
  BsFillBagCheckFill,
  BsClockFill,
  BsPeopleFill,
  BsBarChartLineFill,
} from "react-icons/bs";

import { Link } from "react-router-dom";
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
          <Link to='/day'>
        <BsClockFill fontSize="25px" />
        <label>

          Hours
          </label>
          </Link>
      </Stack>
      <Stack alignItems="center">
        <BsFillBagCheckFill fontSize="25px" />
        <label>Task</label>
      </Stack>
      <Stack alignItems="center">
          <Link to='/projects'>
        <BsBagFill fontSize="25px" />

        <label>

          Projects
          </label>
          </Link>
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
