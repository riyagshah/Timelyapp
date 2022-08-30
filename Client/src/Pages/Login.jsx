import {
  Flex,
  Box,
  Heading,
  Text,
  Input,
  VStack,
  Image,
  useMediaQuery,
  Button,
  useDisclosure,
  AlertDialog,
  AlertDialogContent,
  AlertDialogOverlay,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { loginApi } from "../Redux/AuthReducer/action";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { getProjets } from "../Redux/AppReducer/action";

const Login = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const location = useLocation();
  const comingFrom = location.state?.from?.pathname || "/projects";

  const { isAuth, token } = useSelector((state) => state.AuthReducer);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  

  const onSubmit = async (data) => {
    
    dispatch(loginApi(data)).then((res)=>dispatch(getProjets()));
  };

  useEffect(() => {
    if (isAuth == true && token != undefined) {
      navigate(comingFrom, { replace: true });
    }
  }, [navigate, isAuth, token]);


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
            Log in to Timely
          </Heading>
          <br />

          <Text>Dont have an Account Signup</Text>
          <br />
          {/* <VStack spacing="25px">
        <FormControl isRequired>
          <Input placeholder="Email" />
        </FormControl>
        <FormControl isRequired>
          <Input placeholder="Password" />
        </FormControl>
      </VStack>
      <br />
      <br />
      <br />
      <Button size="lg" height="65px" width={isLargerThan768 ? "600px" : "350px"}>Login</Button> */}

          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <VStack spacing="25px">
              <Input
                type="email"
                placeholder="Email"
                name="email"
                {...register("email", { required: true })}
              ></Input>
              {errors.email && <Text color="red">Email is required.</Text>}
              <Input
                type="password"
                placeholder="Password"
                name="password"
                {...register("password", { required: true })}
              ></Input>
              {errors.password && (
                <Text color="red">Password is required.</Text>
              )}
              <Button
                type="submit"
                size="lg"
                height="65px"
                width={isLargerThan768 ? "600px" : "350px"}
                onClick={onOpen}
              >
                Login
              </Button>
            </VStack>
          </form>
        </Box>
      </Flex>
      {token && (
        <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <Alert status="success">
                <AlertIcon />
                Login Success
              </Alert>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      )}
    </Box>
  );
};

export default Login;
