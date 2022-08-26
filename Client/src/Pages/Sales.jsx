import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  Input,
  Text,
  useMediaQuery,
  VStack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import React from "react";

const Sales = () => {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
  return (
    <Box>
      <VStack spacing="10px">
        <Heading as="h1" size="3xl" color="#001141;">
          Talk to our Sales team
        </Heading>
        <Text fontSize="2xl" color="rgba(56,49,68,.6)">
          Wondering how Timely will work for your unique set-up?
        </Text>
      </VStack>
      <br />
      <br />
      <Flex
        justifyContent={isLargerThan768 ? "space-around" : "center"}
        direction={isLargerThan768 ? "row" : "column"}
      >
        <Box
          w="350px"
          height="250px"
          boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"
          borderRadius="10px"
          marginLeft={isLargerThan768 ? "0px" : "100px"}
        >
          <VStack spacing="20px" marginTop="40px">
            <Image
              src="https://assets-global.website-files.com/6257f2528a39952d4e8af286/6257f2528a399576498af388_Group%2082.svg"
              boxSize="50px"
            ></Image>
            <Text fontSize="lg" color="#001141">
              Chat with the team
            </Text>
            <Button width="260px" height="40px" colorScheme="purple">
              Lets Chat
            </Button>
          </VStack>
        </Box>
        <Box
          w="350px"
          height="250px"
          boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"
          borderRadius="10px"
          marginLeft={isLargerThan768 ? "0px" : "100px"}
        >
          <VStack spacing="20px" marginTop="40px">
            <Image
              src="https://assets-global.website-files.com/6257f2528a39952d4e8af286/6257f2528a399576498af388_Group%2082.svg"
              boxSize="50px"
            ></Image>
            <Text fontSize="lg" color="#001141">
              Chat with the team
            </Text>
            <Button width="260px" height="40px" colorScheme="purple">
              Lets Chat
            </Button>
          </VStack>
        </Box>
        <Box
          w="350px"
          height="250px"
          boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"
          borderRadius="10px"
          marginLeft={isLargerThan768 ? "0px" : "100px"}
        >
          <VStack spacing="20px" marginTop="40px">
            <Image
              src="https://assets-global.website-files.com/6257f2528a39952d4e8af286/6257f2528a399576498af388_Group%2082.svg"
              boxSize="50px"
            ></Image>
            <Text fontSize="lg" color="#001141">
              Chat with the team
            </Text>
            <Button width="260px" height="40px" colorScheme="purple">
              Lets Chat
            </Button>
          </VStack>
        </Box>
      </Flex>
      <br />
      <Flex
        justifyContent="space-evenly"
        direction={isLargerThan768 ? "row" : "column"}
      >
        <HStack marginLeft={isLargerThan768 ? "0px" : "100px"}>
          <Image src="https://assets-global.website-files.com/6257f2528a39952d4e8af286/6257f2528a399520928af3d3_badge-check.svg"></Image>
          <Text>Trusted by 5000+ businesses globally</Text>
        </HStack>
        <HStack marginLeft={isLargerThan768 ? "0px" : "100px"}>
          <Image src="https://assets-global.website-files.com/6257f2528a39952d4e8af286/6257f2528a39953ca28af3c5_thumb-up.svg"></Image>
          <Text>Free 14-day trial — No credit cards needed</Text>
        </HStack>
        <HStack marginLeft={isLargerThan768 ? "0px" : "100px"}>
          <Image src="https://assets-global.website-files.com/6257f2528a39952d4e8af286/6257f2528a399500338af3c8_bulb-prp.svg"></Image>
          <Text>Reduce time tracking admin by 75%</Text>
        </HStack>
      </Flex>
      <br />
      <Grid
        templateColumns={isLargerThan768 ? "repeat(7,1fr)" : "repeat(4,1fr)"}
        marginLeft="40px"
      >
        <GridItem>
          <Image src="https://assets-global.website-files.com/6257f2528a39952d4e8af286/62b3651fd96ad4e0c44915ed_TimeTracking_MostImplementable_Total.svg"></Image>
        </GridItem>
        <GridItem>
          <Image src="https://assets-global.website-files.com/6257f2528a39952d4e8af286/62b3651fd96ad4e0c44915ed_TimeTracking_MostImplementable_Total.svg"></Image>
        </GridItem>
        <GridItem>
          <Image src="https://assets-global.website-files.com/6257f2528a39952d4e8af286/62b3651fd96ad4e0c44915ed_TimeTracking_MostImplementable_Total.svg"></Image>
        </GridItem>
        <GridItem>
          <Image src="https://assets-global.website-files.com/6257f2528a39952d4e8af286/62b3651fd96ad4e0c44915ed_TimeTracking_MostImplementable_Total.svg"></Image>
        </GridItem>
        <GridItem>
          <Image src="https://assets-global.website-files.com/6257f2528a39952d4e8af286/62b3651fd96ad4e0c44915ed_TimeTracking_MostImplementable_Total.svg"></Image>
        </GridItem>
        <GridItem>
          <Image src="https://assets-global.website-files.com/6257f2528a39952d4e8af286/62b3651fd96ad4e0c44915ed_TimeTracking_MostImplementable_Total.svg"></Image>
        </GridItem>
        <GridItem>
          <Image src="https://assets-global.website-files.com/6257f2528a39952d4e8af286/62b3651fd96ad4e0c44915ed_TimeTracking_MostImplementable_Total.svg"></Image>
        </GridItem>
      </Grid>
      <br />
      <br />
      <br />
      <Flex flexDirection={isLargerThan768 ? "row" : "column"}>
        <Box>
          <VStack spacing="20px">
            <iframe
              src="https://www.youtube.com/embed/1_Mt4gYQMHk"
              frameborder="0"
              width="560"
              height="315"
            ></iframe>
            <Text fontSize="lg" color="rgba(56,49,68,.6)">
              “Timely fit our way of thinking perfectly. We hire people for
              their skills; not to track time ”
            </Text>
            <Text>Christopher Schwarz</Text>
          </VStack>
        </Box>
        <Box
          w="600px"
          height="700px"
          boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"
        >
          <br />
          <br />
          <Heading as="h1" size="2xl" color="#001141;">
            Send us a message and we'll be in touch
          </Heading>
          <form action="">
            <VStack>
              <Flex>
                <FormControl>
                  <FormLabel>First Name</FormLabel>
                  <Input></Input>
                </FormControl>
                <FormControl>
                  <FormLabel>Last Name</FormLabel>
                  <Input></Input>
                </FormControl>
              </Flex>
              <FormControl paddingLeft="50px">
                <FormLabel> Email</FormLabel>
                <Input></Input>
              </FormControl>
              <FormControl paddingLeft="50px">
                <FormLabel> Company</FormLabel>
                <Input></Input>
              </FormControl>
              <FormControl paddingLeft="50px">
                <FormLabel>Phone Number</FormLabel>
                <Input></Input>
              </FormControl>
              <FormControl paddingLeft="50px">
                <FormLabel>Message</FormLabel>
                <Input></Input>
              </FormControl>
            </VStack>
            <br />
            <br />
            <Button colorScheme="purple">Submit</Button>
          </form>
        </Box>
      </Flex>
      <br />
      <br />
      <Box>
        <Center>
          <Image
            src="https://assets-global.website-files.com/6257f2528a39952d4e8af286/6257f2528a3995c3118af6e9_Type%3DSymbol%2C%20On-surface%3DLight.svg"
            boxSize="60px"
          ></Image>
        </Center>
        <Heading>Common questions and answers</Heading>
        <VStack spacing="25px">
          <Accordion defaultIndex={[0]} allowMultiple>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left" height="40px" width="900px" border="1px solid black" color="#001141;" fontWeight="bold" fontSize="lg">
                    Which subscription is right for me?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                We don't want you to pay for what you don't need. It's exactly
                why we offer different pricing plans for different
                businesses—whether you're a large company, small team or
                moonlighting freelancer. Before choosing a subscription, you
                cantrial Timely free for 14 days. During your trial, you have
                unlimited access to all of Timely’s features, so you can work
                out which features give you the most value. Click “Learn more”
                on our pricing page for a full breakdown of what is included in
                each subscription.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left" height="40px" width="900px" border="1px solid black" color="#001141;" fontWeight="bold" fontSize="lg">
                    What happens when my trial ends?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Once your trial period ends, everything you've tracked in Timely
                will be saved, so there's no need to rush into a decision. If
                you do choose to subscribe, everything—all your logged hours,
                projects, users, reports and memories—will be there as you left
                it. ‍ If you don't know how much time you have left in your
                trial, head to Settings Subscriptions and check your trial
                counter in the top-right corner. Once your trial expires, you
                will need to purchase a subscription to continue using Timely.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left" height="40px" width="900px" border="1px solid black" color="#001141;" fontWeight="bold" fontSize="lg">
                    What happens when my trial ends?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Once your trial period ends, everything you've tracked in Timely
                will be saved, so there's no need to rush into a decision. If
                you do choose to subscribe, everything—all your logged hours,
                projects, users, reports and memories—will be there as you left
                it. ‍ If you don't know how much time you have left in your
                trial, head to Settings Subscriptions and check your trial
                counter in the top-right corner. Once your trial expires, you
                will need to purchase a subscription to continue using Timely.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left" height="40px" width="900px" border="1px solid black" color="#001141;" fontWeight="bold" fontSize="lg">
                    What happens when my trial ends?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Once your trial period ends, everything you've tracked in Timely
                will be saved, so there's no need to rush into a decision. If
                you do choose to subscribe, everything—all your logged hours,
                projects, users, reports and memories—will be there as you left
                it. ‍ If you don't know how much time you have left in your
                trial, head to Settings Subscriptions and check your trial
                counter in the top-right corner. Once your trial expires, you
                will need to purchase a subscription to continue using Timely.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left" height="40px" width="900px" border="1px solid black" color="#001141;" fontWeight="bold" fontSize="lg">
                    What happens when my trial ends?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Once your trial period ends, everything you've tracked in Timely
                will be saved, so there's no need to rush into a decision. If
                you do choose to subscribe, everything—all your logged hours,
                projects, users, reports and memories—will be there as you left
                it. ‍ If you don't know how much time you have left in your
                trial, head to Settings Subscriptions and check your trial
                counter in the top-right corner. Once your trial expires, you
                will need to purchase a subscription to continue using Timely.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left" height="40px" width="900px" border="1px solid black" color="#001141;" fontWeight="bold" fontSize="lg">
                    What happens when my trial ends?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Once your trial period ends, everything you've tracked in Timely
                will be saved, so there's no need to rush into a decision. If
                you do choose to subscribe, everything—all your logged hours,
                projects, users, reports and memories—will be there as you left
                it. ‍ If you don't know how much time you have left in your
                trial, head to Settings Subscriptions and check your trial
                counter in the top-right corner. Once your trial expires, you
                will need to purchase a subscription to continue using Timely.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left" height="40px" width="900px" border="1px solid black" color="#001141;" fontWeight="bold" fontSize="lg">
                    What happens when my trial ends?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Once your trial period ends, everything you've tracked in Timely
                will be saved, so there's no need to rush into a decision. If
                you do choose to subscribe, everything—all your logged hours,
                projects, users, reports and memories—will be there as you left
                it. ‍ If you don't know how much time you have left in your
                trial, head to Settings Subscriptions and check your trial
                counter in the top-right corner. Once your trial expires, you
                will need to purchase a subscription to continue using Timely.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left" height="40px" width="900px" border="1px solid black" color="#001141;" fontWeight="bold" fontSize="lg">
                    What happens when my trial ends?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Once your trial period ends, everything you've tracked in Timely
                will be saved, so there's no need to rush into a decision. If
                you do choose to subscribe, everything—all your logged hours,
                projects, users, reports and memories—will be there as you left
                it. ‍ If you don't know how much time you have left in your
                trial, head to Settings Subscriptions and check your trial
                counter in the top-right corner. Once your trial expires, you
                will need to purchase a subscription to continue using Timely.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left" height="40px" width="900px" border="1px solid black" color="#001141;" fontWeight="bold" fontSize="lg">
                    What happens when my trial ends?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Once your trial period ends, everything you've tracked in Timely
                will be saved, so there's no need to rush into a decision. If
                you do choose to subscribe, everything—all your logged hours,
                projects, users, reports and memories—will be there as you left
                it. ‍ If you don't know how much time you have left in your
                trial, head to Settings Subscriptions and check your trial
                counter in the top-right corner. Once your trial expires, you
                will need to purchase a subscription to continue using Timely.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left" height="40px" width="900px" border="1px solid black" color="#001141;" fontWeight="bold" fontSize="lg">
                    What happens when my trial ends?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Once your trial period ends, everything you've tracked in Timely
                will be saved, so there's no need to rush into a decision. If
                you do choose to subscribe, everything—all your logged hours,
                projects, users, reports and memories—will be there as you left
                it. ‍ If you don't know how much time you have left in your
                trial, head to Settings Subscriptions and check your trial
                counter in the top-right corner. Once your trial expires, you
                will need to purchase a subscription to continue using Timely.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left" height="40px" width="900px" border="1px solid black" color="#001141;" fontWeight="bold" fontSize="lg">
                    What happens when my trial ends?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Once your trial period ends, everything you've tracked in Timely
                will be saved, so there's no need to rush into a decision. If
                you do choose to subscribe, everything—all your logged hours,
                projects, users, reports and memories—will be there as you left
                it. ‍ If you don't know how much time you have left in your
                trial, head to Settings Subscriptions and check your trial
                counter in the top-right corner. Once your trial expires, you
                will need to purchase a subscription to continue using Timely.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left" height="40px" width="900px" border="1px solid black" color="#001141;" fontWeight="bold" fontSize="lg">
                    What happens when my trial ends?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Once your trial period ends, everything you've tracked in Timely
                will be saved, so there's no need to rush into a decision. If
                you do choose to subscribe, everything—all your logged hours,
                projects, users, reports and memories—will be there as you left
                it. ‍ If you don't know how much time you have left in your
                trial, head to Settings Subscriptions and check your trial
                counter in the top-right corner. Once your trial expires, you
                will need to purchase a subscription to continue using Timely.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </VStack>
      </Box>
    </Box>
  );
};

export default Sales;
