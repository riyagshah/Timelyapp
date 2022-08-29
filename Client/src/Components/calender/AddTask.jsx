import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
  Select,
  Alert,
  AlertIcon,
  
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import {
  
  addNewProject,
  getTaskProject,
} from "../../Redux/Task_reducer/action";
import { v4 as uuid } from "uuid";
import { useToast } from '@chakra-ui/react'
import {  useDispatch } from "react-redux";
function AddTask({ time, projectArray,wid="11rem" }) {
  // console.log("time", projectArray);
  const [date, setDate] = useState(time);
  const [text, setText] = useState("");
  const [selectProject, setSelectProject] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
 
  const toast = useToast()
  const dispatch = useDispatch();
  const submitButton =  () => {
    if (text) {
      const payload = {
        title: text,
        project: selectProject,
        date: date,
        refNO: uuid(),
      };
        // console.log(payload)
      
      dispatch(addNewProject(payload)).then((res)=>{dispatch(getTaskProject())})
    
      toast({
        title: ` ${payload.title} is Created `,
        description: ` ${payload.project} assigned at ${payload.date} `,
        status: 'success',
        duration: 1000,
        isClosable: true,
        position: 'top',
      })
    }
    
  
  };

   
  return (
    <>
      <Button
        borderRadius={"10px"}
        fontSize={"20px"}
        h="3rem"
        alignItems={"center"}
        marginTop="10px"
        w =  {`${wid}`}
        bg={"SKYblue"}
        marginLeft="-2px"
        color="white"
         
        onClick={onOpen}
      >
        Add Entry
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent pt={5}>
          <ModalCloseButton />
          <ModalHeader>
            <Input
              onChange={(e) => setText(e.target.value)}
              placeholder="Add a note for this work" required
            />
          </ModalHeader>

          <ModalBody pb={10}>
            <Select
              onChange={(e) => setSelectProject(e.target.value)}
              pb={3}
              placeholder="Select Project" 
              required
            >
              {projectArray.map((e) => {
                return <option value={`${e.projectname}`}>{e.projectname}</option>;
              })}
            </Select>

            <Input
              type={"date"}
              value={date}
              onChange={(e) => {
                setDate(e.target.value);
              }}
              placeholder={time}
            />
          </ModalBody>

          <ModalFooter>
            <Button onClick={submitButton} colorScheme="blue" mr={3}>
              Submit
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default AddTask;
