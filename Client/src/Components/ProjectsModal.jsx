import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import {useDispatch} from "react-redux"
import { addProjects } from "../Redux/AppReducer/action";

function ProjectsModal() {
    
  const [projectName, setProjectName] = useState("");
  const [clientName, setClientName] = useState("");

  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
    const dispatch = useDispatch();
    
    const handleClick = () => {
        const payload = {
            projectname: projectName,
            clientname:clientName,
        }
        dispatch(addProjects(payload));
    }
    
 
    
    
    
    
  return (
    <>
      <Button bg="#3d73da" paddingLeft={10} paddingRight={10} onClick={onOpen}>
        {" "}
        + New project
      </Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Enter Project Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Project name</FormLabel>

              <Input
                ref={initialRef}
                placeholder="Project name"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Client name</FormLabel>
              <Input
                placeholder="Client name"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleClick}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export { ProjectsModal };
