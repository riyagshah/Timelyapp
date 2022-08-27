import { Stack, Image } from "@chakra-ui/react";
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
      color="white"
      h="100vh"
      bg="#44505e"
      gap="40px"
      alignItems="center"

      position="Relative"

    >
      <Link to="/">
        <Stack marginTop="50px">
          <Image src="https://ik.imagekit.io/5uw6vtpfr/6257f2528a3995c3118af6e9_Type_Symbol__On-surface_Light__ktqTc59U.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1661587188635" />
        </Stack>
      </Link>
      <Link to="/day">
        <Stack alignItems="center" gap="0px">
          <BsClockFill fontSize="25px" />
          <label>Hours</label>
        </Stack>
      </Link>
      <Stack alignItems="center">
        <BsFillBagCheckFill fontSize="25px" />
        <label>Task</label>
      </Stack>
      <Link to="/projects">
        <Stack alignItems="center">
          <BsBagFill fontSize="25px" />
          <label>Projects</label>
        </Stack>
      </Link>
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
