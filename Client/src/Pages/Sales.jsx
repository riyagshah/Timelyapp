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
  Textarea,
} from "@chakra-ui/react";
import React from "react";
import emailjs from '@emailjs/browser';
import Navbar from "../Components/Navbar/Navbar.tsx"
import Footerlast from "../Components/Footer/Footerlast";
import Footer1 from "../Components/Footer/Footer1";
const Sales = () => {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  const sendEmail = (e)=>{
    e.preventDefault();
    emailjs.sendForm('service_smvpfhk', 'template_5gk0kw5', e.target, 'BH4aS8vM7zKyYE1Kn').then((result)=>{
      console.log(result.text);
    }).catch((error)=>{
      console.log(error.text);
    })
  }


  return (
    
    <Box>
      <Navbar/>
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
              src="https://ik.imagekit.io/5uw6vtpfr/6257f2528a399576498af388_Group_82_dm8kIBQbw.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1661586342791"
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
              src="https://ik.imagekit.io/5uw6vtpfr/6257f2528a39959abd8af3a2_Group_81_Hde1l_8mq.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1661586268137"
              boxSize="50px"
            ></Image>
            <Text fontSize="lg" color="#001141">
              Book a meeting
            </Text>
            <Button width="260px" height="40px" colorScheme="purple">
              Pick a time
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
              src="https://ik.imagekit.io/5uw6vtpfr/6257f2528a399562948af517_timely-webinars_2XsYNj4CjP.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1661586284063"
              boxSize="50px"
            ></Image>
            <Text fontSize="lg" color="#001141">
              Email us
            </Text>
            <Button width="260px" height="40px" colorScheme="purple">
              Fire away
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
          <Image src="https://ik.imagekit.io/5uw6vtpfr/6257f2528a399520928af3d3_badge-check_7iVxOja39.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1661586633560"></Image>
          <Text>Trusted by 5000+ businesses globally</Text>
        </HStack>
        <HStack marginLeft={isLargerThan768 ? "0px" : "100px"}>
          <Image src="https://ik.imagekit.io/5uw6vtpfr/6257f2528a39953ca28af3c5_thumb-up_HgcM9ONwN.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1661586758331"></Image>
          <Text>Free 14-day trial — No credit cards needed</Text>
        </HStack>
        <HStack marginLeft={isLargerThan768 ? "0px" : "100px"}>
          <Image src="https://ik.imagekit.io/5uw6vtpfr/6257f2528a399500338af3c8_bulb-prp__zNoRj-Gis.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1661586691829"></Image>
          <Text>Reduce time tracking admin by 75%</Text>
        </HStack>
      </Flex>
      <br />
      <Grid
        templateColumns={isLargerThan768 ? "repeat(7,1fr)" : "repeat(4,1fr)"}
        marginLeft="40px"
      >
        <GridItem>
          <Image src="https://ik.imagekit.io/5uw6vtpfr/62b3651fd96ad4e0c44915ed_TimeTracking_MostImplementable_Total_FM1ySZjFd.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1661586141774"></Image>
        </GridItem>
        <GridItem>
          <Image src="https://ik.imagekit.io/5uw6vtpfr/62b36657dfae2feee178fee9_TimeTracking_MomentumLeader_Leader_VHOibOHRX.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1661586911205"></Image>
        </GridItem>
        <GridItem>
          <Image src="https://ik.imagekit.io/5uw6vtpfr/62b3651fc9eb5ab5b7d8536c_TimeTracking_Leader_Leader_f63H83x1x.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1661586124740"></Image>
        </GridItem>
        <GridItem>
          <Image src="https://ik.imagekit.io/5uw6vtpfr/6257f2528a3995b0a08af4da_loveus_htKan3b52.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1661586232641"></Image>
        </GridItem>
        <GridItem>
          <Image src="https://ik.imagekit.io/5uw6vtpfr/62b3668136276388dc2815e8_TimeTracking_HighPerformer_Mid-Market_HighPerformer_z7IXNIXzk.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1661586218469"></Image>
        </GridItem>
        <GridItem>
          <Image src="https://ik.imagekit.io/5uw6vtpfr/62b3651fdb7877357a9300c3_TimeTracking_BestUsability_Total_Z_FwmRKXm.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1661586155002"></Image>
        </GridItem>
        <GridItem>
          <Image src="https://ik.imagekit.io/5uw6vtpfr/62b3651fdfae2ff62378f39f_TimeTracking_BestRelationship_Total_HM8V1q_3Lm.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1661586178691"></Image>
        </GridItem>
      </Grid>
      <br />
      <br />
      <br />
      <Center>
        <VStack
          height="900px"
          width="1000px"
          boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"
          borderRadius="10px"
          spacing="25px"
        >
          <Image
            src="https://ik.imagekit.io/5uw6vtpfr/6257f2528a39959abd8af3a2_Group_81_GBxoxXWnX.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1661584601300"
            boxSize="50px"
            marginTop="50px"
          ></Image>
          <Text fontSize="lg" fontWeight="bold" color="#001141">
            Book a meeting with a Timely expert
          </Text>
          <Image
            src="https://ik.imagekit.io/5uw6vtpfr/Timely_App_2x_aUoBzsVXQ.png?ik-sdk-version=javascript-1.4.3&updatedAt=1661584750805"
            borderRadius="50%"
          ></Image>
          <Heading noOfLines="2" color="#001141">
            Meet with a Timely expert
          </Heading>
          <Text noOfLines="2">
            Enter your work email address and we'll connect you with the right
            person.
          </Text>
          <Center>
            <FormControl>
              <FormLabel>Enter Email Address</FormLabel>
              <Input></Input>
            </FormControl>
          </Center>
          <Button colorScheme="purple">Start booking</Button>
        </VStack>
      </Center>
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
          <form action="" onSubmit={sendEmail}>
            <VStack>
              <Flex>
                <FormControl>
                  <FormLabel>First Name</FormLabel>
                  <Input type="text" name="name"></Input>
                </FormControl>
                <FormControl>
                  <FormLabel>Last Name</FormLabel>
                  <Input type="text" name="name"></Input>
                </FormControl>
              </Flex>
              <FormControl paddingLeft="50px">
                <FormLabel> Email</FormLabel>
                <Input type="email" name="email"></Input>
              </FormControl>
              <FormControl paddingLeft="50px">
                <FormLabel> Company</FormLabel>
                <Input type="text" name="Subject"></Input>
              </FormControl>
              <FormControl paddingLeft="50px">
                <FormLabel>Phone Number</FormLabel>
                <Input type="number" name="number"></Input>
              </FormControl>
              <FormControl paddingLeft="50px">
                <FormLabel>Message</FormLabel>
               <Textarea type="text" name="message"></Textarea>
              </FormControl>
            </VStack>
            <br />
            <br />
            <Button colorScheme="purple" type="submit">Submit</Button>
          </form>
        </Box>
      </Flex>
      <br />
      <br />
      <Box>
        <Center>
          <Image
            src="https://ik.imagekit.io/5uw6vtpfr/6257f2528a3995c3118af6e9_Type_Symbol__On-surface_Light__ktqTc59U.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1661587188635"
            boxSize="60px"
          ></Image>
        </Center>
        <Heading>Common questions and answers</Heading>
        <VStack spacing="25px">
          <Accordion defaultIndex={[0]} allowMultiple>
            <AccordionItem
              width={isLargerThan768 ? "900px" : "550px"}
              marginLeft={isLargerThan768 ? "0px" : "200px"}
            >
              <h2>
                <AccordionButton>
                  <Box
                    flex="1"
                    textAlign="left"
                    height="40px"
                    width="900px"
                    color="#001141;"
                    fontWeight="bold"
                    fontSize="lg"
                  >
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

            <AccordionItem
              width={isLargerThan768 ? "900px" : "550px"}
              marginLeft={isLargerThan768 ? "0px" : "200px"}
            >
              <h2>
                <AccordionButton>
                  <Box
                    flex="1"
                    textAlign="left"
                    height="40px"
                    width="900px"
                    color="#001141;"
                    fontWeight="bold"
                    fontSize="lg"
                  >
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
            <AccordionItem
              width={isLargerThan768 ? "900px" : "550px"}
              marginLeft={isLargerThan768 ? "0px" : "200px"}
            >
              <h2>
                <AccordionButton>
                  <Box
                    flex="1"
                    textAlign="left"
                    height="40px"
                    width="900px"
                    color="#001141;"
                    fontWeight="bold"
                    fontSize="lg"
                  >
                    Where do I subscribe to Timely?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                It takes a few seconds to subscribe to the a Timely plan. To get
                started: Log in to Timely Click the Settings icon on the
                left-hand navigation bar Choose Subscriptions and take it from
                there. If you have any questions, just reach out to us through
                support chat or email support@timelyapp.com and we’ll be right
                with you.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem
              width={isLargerThan768 ? "900px" : "550px"}
              marginLeft={isLargerThan768 ? "0px" : "200px"}
            >
              <h2>
                <AccordionButton>
                  <Box
                    flex="1"
                    textAlign="left"
                    height="40px"
                    width="900px"
                    color="#001141;"
                    fontWeight="bold"
                    fontSize="lg"
                  >
                    Do you offer discounts?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                We currently offer two types of discount: ‍ 1. Annual plan
                discount Get up to a 23% discount by signing up for a yearly
                subscription instead of a monthly one. ‍ 2. Student discounts
                Send us a note in our support chat or email
                support@timelyapp.com and we'll help you out. Please note, you
                must provide a valid student ID and valid student email to sign
                up.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem
              width={isLargerThan768 ? "900px" : "550px"}
              marginLeft={isLargerThan768 ? "0px" : "200px"}
            >
              <h2>
                <AccordionButton>
                  <Box
                    flex="1"
                    textAlign="left"
                    height="40px"
                    width="900px"
                    color="#001141;"
                    fontWeight="bold"
                    fontSize="lg"
                  >
                    None of your plans really fit my needs. Who can I talk to?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Drop us a line at sales@timelyapp.com, briefly answering these
                questions and we’ll be happy to help: ‍ Who are you and what do
                you do? How many folks will be tracking time? How did you hear
                about Timely? What was your motivation for finding a time
                tracking tool?
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem
              width={isLargerThan768 ? "900px" : "550px"}
              marginLeft={isLargerThan768 ? "0px" : "200px"}
            >
              <h2>
                <AccordionButton>
                  <Box
                    flex="1"
                    textAlign="left"
                    height="40px"
                    width="900px"
                    color="#001141;"
                    fontWeight="bold"
                    fontSize="lg"
                  >
                    Is automatic time tracking included on all plans?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Yes! We don’t believe anyone should have to wrestle with manual
                timers and note taking. You can see a full breakdown of what is
                included in each subscription by clicking on “learn more” on our
                pricing page.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem
              width={isLargerThan768 ? "900px" : "550px"}
              marginLeft={isLargerThan768 ? "0px" : "200px"}
            >
              <h2>
                <AccordionButton>
                  <Box
                    flex="1"
                    textAlign="left"
                    height="40px"
                    width="900px"
                    color="#001141;"
                    fontWeight="bold"
                    fontSize="lg"
                  >
                    Can I get a demo?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                To arrange a Timely Tour book a meeting with our team, or watch
                our on-demand webinar: A Timely Tour the Essentials.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem
              width={isLargerThan768 ? "900px" : "550px"}
              marginLeft={isLargerThan768 ? "0px" : "200px"}
            >
              <h2>
                <AccordionButton>
                  <Box
                    flex="1"
                    textAlign="left"
                    height="40px"
                    width="900px"
                    color="#001141;"
                    fontWeight="bold"
                    fontSize="lg"
                  >
                    What team support and training do you offer?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                In addition to accessing our Help Center, videos, and in-app
                onboarding, teams on our larger plans receive a dedicated
                success partner for the lifetime of their Timely subscription.
                This contact will provide bespoke training sessions and
                materials to engage every level of your business. Once your team
                is up and running, they will remain on-hand to support you with
                any questions or requests. We also offer customized pilots for
                larger teams looking to take Timely for a thorough test drive.
                In addition to regular email support, teams on our Unlimited
                plan have access to priority in-app support from our world-class
                customer success team.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem
              width={isLargerThan768 ? "900px" : "550px"}
              marginLeft={isLargerThan768 ? "0px" : "200px"}
            >
              <h2>
                <AccordionButton>
                  <Box
                    flex="1"
                    textAlign="left"
                    height="40px"
                    width="900px"
                    color="#001141;"
                    fontWeight="bold"
                    fontSize="lg"
                  >
                    Does Timely share automatically captured data?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Timely is not an employee monitoring software. Automatically
                captured work activities stay completely private to each
                individual—no boss, colleague or third party can ever access
                them. We will never support employee screenshots, keystroke
                monitoring or any other invasive surveillance tactics. See our
                Privacy Promise for a slice of our thinking.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem
              width={isLargerThan768 ? "900px" : "550px"}
              marginLeft={isLargerThan768 ? "0px" : "200px"}
            >
              <h2>
                <AccordionButton>
                  <Box
                    flex="1"
                    textAlign="left"
                    height="40px"
                    width="900px"
                    color="#001141;"
                    fontWeight="bold"
                    fontSize="lg"
                  >
                    Where and how do you store my data? Is it encrypted?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Your data is securely transferred and stored on ISO
                27001-certified Amazon Web Services (AWS) servers in Europe. All
                communication between the server and your browser, mobile or
                desktop, and across our internal system, is encrypted using
                SSL/TLS encryption (HTTPS), with an SSL certificate issued by
                Comodo. Our database is also completely encrypted. Only our
                Chief Data Protection Officer, Deputy Data Protection Officer
                (DPO) and Head of Growth can access the databases used to store
                information from Memory products. All data is protected by an
                internal auditing system (SQL audit logging) and DPO approval is
                required for database access (which is only granted as
                read-only).
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem
              width={isLargerThan768 ? "900px" : "550px"}
              marginLeft={isLargerThan768 ? "0px" : "200px"}
            >
              <h2>
                <AccordionButton>
                  <Box
                    flex="1"
                    textAlign="left"
                    height="40px"
                    width="900px"
                    color="#001141;"
                    fontWeight="bold"
                    fontSize="lg"
                  >
                    How can I integrate Timely with my tech stack?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Timely’s native integrations and open APIs let you easily
                connect data across you existing digital toolkit—from QuickBooks
                and Office 365, to Trello and Google Calendar. By enabling
                automatic tracking in Timely, your team can capture the time
                they spend in every web or desktop app they use at work without
                having to set up any further integrations.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box
                    flex="1"
                    textAlign="left"
                    height="40px"
                    width="900px"
                    color="#001141;"
                    fontWeight="bold"
                    fontSize="lg"
                  >
                    Can I import data from my current time tracking solution?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Toggl and Harvest users can effortlessly migrate project,
                client, tag and user data into Timely via our bespoke imports in
                a matter of seconds. If you use a different time tracking tool
                with your team, send us a message and we’ll see how we can help.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </VStack>
      </Box>
      <Footer1/>
      <Footerlast/>
    </Box>
  );
};

export default Sales;
