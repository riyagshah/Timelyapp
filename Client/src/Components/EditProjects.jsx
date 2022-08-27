import React, { useState } from 'react'

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
import { useDispatch } from 'react-redux';
import { editProject, getProjets } from '../Redux/AppReducer/action';

function EditProjects({ project }) {
   
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef();
  const finalRef = React.useRef();
  
  const [projectName, setProjectName] = useState(project.projectname);  
    const [clientName, setClientName] = useState(project.clientname);
    const dispatch = useDispatch();

 const handleEdit = (id) => {
     const payload = {
       id:id,
    body:{ projectname: projectName,
     clientname: clientName,}
     };
     
     dispatch(editProject(payload)).then(res => {
         dispatch(getProjets()).then(res => {
             dispatch(getProjets());
         })
     })

}




  return (
    <>
      <p onClick={onOpen}>Edit</p>
    

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Info.</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Project name</FormLabel>
              <Input
                ref={initialRef}
                placeholder="Project name"
                onChange={(e) => setProjectName(e.target.value)}
                value={projectName}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Client name</FormLabel>
              <Input
                placeholder="Client name"
                onChange={(e) => setClientName(e.target.value)}
                value={clientName}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button variantColor="blue" mr={3} onClick={()=>handleEdit(project._id)} >
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}


export { EditProjects };