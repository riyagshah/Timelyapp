import {
  Flex,
  Box,
  Heading,
  Text,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Spacer,
  Image,
  useMediaQuery,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [form, setForm] = useState({
    email: "",
    name: "",
    password: "",
  });

  const handleChange = (e) => {
    let { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/user/signup",form)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(form)
  };

  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
  return (
    <Box>
      <br />
      <br />
      <Flex justifyContent="space-around">
        <Image src="https://ik.imagekit.io/5uw6vtpfr/memory_logo-2b0e14e1b9caec121a1ba0e1fc28d171afe00a656378f9bb2b6ff43d6273e8b3_e532PKupX.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1661322712290"></Image>
        <Image
          src="https://ik.imagekit.io/5uw6vtpfr/timely_icon_with_bg-fff8d0307178d5b60fec3a9eda6e91f90d873f80680991fc1dde04e5be6d27bb_WC2EVD8G9.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1661322817472"
          boxSize="50px"
          objectFit="cover"
          borderRadius="15px"
          marginRight={isLargerThan768 ? "558px" : "150px"}
        ></Image>
      </Flex>
      <br />
      <br />
      <br />
      <Flex
        direction={isLargerThan768 ? "row" : "column-reverse"}
        justifyContent="space-around"
      >
        <Box>
          <Heading as="h1" size="md">
            Top rated time tracking
          </Heading>
          <br />
          <Flex justifyContent="center">
            <Image
              src="https://ik.imagekit.io/5uw6vtpfr/g2_badge_leader_2022-bbf17b5daa62a554f0d55c4af7e835f9896cf15fdd80e72261c40a8744894fb3_Z9Y5bM2wd.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1661321918930"
              boxSize="150px"
              objectFit="cover"
            ></Image>
            <Image
              src="https://ik.imagekit.io/5uw6vtpfr/g2_badge_users_love_us-4fca521cb6d80c30d02e3df6bd0013f5395fb3ae22e81b3e3608e258d8feba63_wy_TY8UQl.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1661321856355"
              boxSize="150px"
              objectFit="cover"
            ></Image>
            <Image
              src="https://ik.imagekit.io/5uw6vtpfr/g2_badge_usability_2022-f0f22abd17173b279e3d0568aa55411971f2b3f5840cc89ae913be4aebee42a7_TvpcRka6a.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1661321903864"
              boxSize="150px"
              objectFit="cover"
            ></Image>
          </Flex>
          <br />
          <Heading as="h1" size="md">
            “The best way to measure exactly where your time goes.”
          </Heading>
          <Text>Brian, Accountant</Text>
          <br />
          <Heading as="h1" size="md">
            “Timely takes a load off my brain.”
          </Heading>
          <Text>Erik, Digital Designer</Text>
          <br />
          <Heading as="h1" size="md">
            “Easy to use and I love the project level summaries.”
          </Heading>
          <Text>Jonathan, Software Engineer</Text>
        </Box>
        <Box>
          <Heading as="h1" size="3xl">
            Sign up to Timely
          </Heading>
          <br />

          <Text>Already have an Account</Text>
          <br />
          {/* <VStack spacing="25px">
            <form>
            <Input placeholder="Work Email" size="lg"/>
           
            <Input placeholder="Work Email" size="lg"/>
         
            <Input placeholder="Work Email" size="lg"/>
           
            </form>
          </VStack> */}
          <form onSubmit={handleSubmit}>
              <VStack spacing="25px">
              <Input
                placeholder="Work Email"
                size="lg"
                type="text"
                name="email"
                value={form.email}
                onChange={handleChange}
              />
              <Input
                placeholder="Full name"
                size="lg"
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
              />
              <Input
                placeholder="Password"
                size="lg"
                type="text"
                name="password"
                value={form.password}
                onChange={handleChange}
              />
              <Text>By signing up you agree to the Terms of Service.</Text>
              <Button
                type="submit"
                size="lg"
                height="65px"
                width={isLargerThan768 ? "600px" : "350px"}
              >
                Start free 14 day trail
              </Button>
              </VStack>
          </form>
        </Box>
      </Flex>
    </Box>
  );
};

export default Signup;
