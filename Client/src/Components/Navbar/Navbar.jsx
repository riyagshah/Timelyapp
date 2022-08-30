import React, { ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
import { useDispatch, useSelector} from "react-redux";
import {handlelogout} from "../../utils/LocalStorage.jsx";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  ArrowRightIcon,
  StarIcon,
} from "@chakra-ui/icons";
import { Image } from "@chakra-ui/react";


export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();
  const navigate = useNavigate();
  const dispatch=useDispatch();
  const auth = useSelector((state) => state.AuthReducer.isAuth);
  console.log(auth)
  const handle=()=>{
    if(!auth)
    navigate("/login")
    }
    const handlelogout=()=>{
// dispatch(logoutAPI());
navigate("/login")
    }
  return (

    <Box>
     
      <Flex
        bg={useColorModeValue("#722FD3", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"70px"}
        py={{ base: 2 }}
        px={"5%"}
        borderBottom={0}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? (
                <CloseIcon w={3} h={3} color={"white"} />
              ) : (
                <HamburgerIcon w={5} h={5} color={"white"} />
              )
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Image
            width={{ md: 40 }}
            w={"84px"}
            h={"55px"}
            onClick={() => navigate("/")}
            src="https://assets-global.website-files.com/6257f2528a39952d4e8af286/6257f2528a39955aef8af720_timely-new-logo.svg"
          />

          <Image
            mt={"35px"}
            ml={"5px"}
            border="1px"
            borderColor="gray.200"
            w={"18px"}
            h={"10px"}
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAKlBMVEX+8gAAfMIBfML/9gCTu1wAdNH78wAFf8UBfb8IgsgAd9X/8QMEgMKUvV5IqyaYAAABtUlEQVR4nO3cOa7bQBBAQdIb/Rff/7q2YAiw+nXgTAqqIoaDB/RMRzzeLh69HdcXHl3HdZ7PPsRLOc9bk2ef4sVoUvcmJ39pUpqUJqVJaVKalCalSWlSmpQmpUlpUpqUJqVJaVKalCalSWlSmpQmpUlpUpqUJqVJaVKalCalSWlSmpQmpUlpUpqUJqVJaVKalCalSWlSmpQmpUlpUpqUJqVJaVKalCalSWlSmpQmpUlpUpqUJqVJaVKalCalSWlSmpQmpUlpUpqUJqVJaVKalCalSWlS9ya3D+7O23/Ln32Il3Mdnz959Hm8f+fR+/GN4dfxlen4wXR8fBz8608QSSZFNqpMZqc0KU1KkY0qkyIbVSZFNqpMimxUmexspUlpUopsVJkU2agyKbJRZVJko8qkyEaVyW5fimxUmRTZqDIpslFlUmSjymRnK01KkY0qk9kpRTaqTIpsVJkU2agyeYtLk1Jko8pkdkqRjSqTIhtVJkU2qkze4tKkFNmoMimyUWVyx5YiG1UmRTaqTO7Y0qQU2agyKbJRZXLHliIbVSZFNqpMimxUmRTZqDLZ2TaaTIrwX34D/hyTR+If/QUAAAAASUVORK5CYII="
          />
          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
         
          </Flex>
        </Flex>
        <Button
          mr={"20px"}
          bg={"white"}
          height="40px"
          width="230px"
          as={"a"}
          fontSize={"sm"}
          color={"black"}
          fontWeight={500}
          variant={"solid"}
          onClick={() => navigate("/signup")}
        >
          Start 14-day free trial
        </Button>
        {/* <Stack
          mt={"15px"}
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={4}
        > */}
        <Image
          height="40px"
          width="100px"
          src="https://assets-global.website-files.com/6257f2528a39952d4e8af286/6257f2528a399514908af72d_made-by-white.svg"
        />
        {/* </Stack> */}
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("white", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");
  const auth = useSelector((state) => state.AuthReducer.isAuth);
  const handle=()=>{
    if(!auth)
    navigate("/login")

    }
    

  const navigate = useNavigate();
  return (
    <Stack
      direction={"row"}
      w={"750px"}
      h={"40px"}
      spacing={4}
      ml={"80px"}
      mt={"25px"}
    >
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                p={2}
                // href={navItem.href ?? "#"}
                fontSize={"md"}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
                {navItem.children ? <ChevronDownIcon /> : null}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                w="250px"
                // bg='gray'
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                // minW={"sm"}
                maxH={"320"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
      <Button
        pb={"15px"}
        height="40px"
        width="80px"
        as={"a"}
        fontSize={"sm"}
        color={"white"}
        fontWeight={500}
        variant={"link"}
        onClick={() => navigate("/sales")}
      >
        <ArrowRightIcon h={"11px"} mr={"3px"} />
        Talk to sales
      </Button>
      {!auth?<Button
        pb={"15px"}
        height="40px"
        width="80px"
        as={"a"}
        fontSize={"sm"}
        color={"white"}
        fontWeight={500}
        variant={"link"}
        onClick={handle}
      >
        <ArrowRightIcon h={"11px"} mr={"3px"} />
        Log in
      </Button>:<Button
        pb={"15px"}
        height="40px"
        width="80px"
        as={"a"}
        fontSize={"sm"}
        color={"white"}
        fontWeight={500}
        variant={"link"}
        onClick={()=>handlelogout("token")}
      >
        <ArrowRightIcon h={"11px"} mr={"3px"} />
        Log Out
      </Button>}

    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("#722FD3.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "#722FD3" }}
            fontWeight={500}
          >
            <StarIcon />
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"#722FD3"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ lg: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};



const NAV_ITEMS = [
  {
    label: "Features ",
    children: [
      {
        label: "Track time",
        href: "https://timelyapp.com/features/automatic-time-tracking",
      },
      {
        label: "Track projects",
        href: "#",
      },
      {
        label: "Track teams",
        href: "#",
      },
      {
        label: "Track plans",
        href: "#",
      },
      {
        label: "Integrations",
        href: "#",
      },
      {
        label: "Our privacy promise",
        href: "#",
      },
    ],
  },
  {
    label: "Solutions",
    children: [
      {
        label: "Consulting firms",
        href: "#",
      },
      {
        label: "Software companies",
        href: "#",
      },
      {
        label: "Agencies",
        href: "#",
      },
      {
        label: "Designers & creatives",
        href: "#",
      },
      {
        label: "Lawyers",
        href: "#",
      },
      {
        label: "Accountants",
        href: "#",
      },
    ],
    //   children: [
    //   {
    //     label: "Teams",
    //     href: "#",
    //   },{
    //     label: "Freelancers",
    //     href: "#",
    //   },{
    //     label: "Employees",
    //     href: "#",
    //   },{
    //     label: "Project managers",
    //     href: "#",
    //   },{
    //     label: "Remote workers",
    //     href: "#",
    //   },
    // ],
  },
  {
    label: "Pricing",
    href: "#",
  },
  {
    label: "Resources",
    children: [
      {
        label: "Blog",
        href: "#",
      },
      {
        label: "Cast studies",
        href: "#",
      },
      {
        label: "Books",
        href: "#",
      },
      {
        label: "Webinars",
        href: "#",
      },
      {
        label: "Time tracking guide",
        href: "#",
      },
      {
        label: "Support",
        href: "#",
      },
    ],
  },
  // {
  //   label: "Log in",
  //   href: "#",
  // },
];
