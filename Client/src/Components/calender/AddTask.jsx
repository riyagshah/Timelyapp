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
  Text,
  Spacer,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import {  useState,useContext } from "react";
import { deleteProject, editProject,addNewProject } from "../../Redux/Task_reducer/action";
import { v4 as uuid } from "uuid";
 
import { useSelector ,useDispatch} from 'react-redux'
function AddTask({time}) {
//  console.log(time)
 const [date,setDate] = useState(time)
 const [text, setText] = useState("");
 const [selectProject, setSelectProject] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
 
  
  const dispatch = useDispatch()
  const submitButton = () => {
   if(text){

     const payload = {
       title: text,
       project:selectProject,
       date : date,
       refNO: uuid(),
     };
    //   console.log(payload)
        
     dispatch(addNewProject(payload))
    }
   }

  return (
    <>
      <Button 
        borderRadius={"10px"}
        fontSize={"20px"}
        h="3rem"
        alignItems={"center"}
        marginTop="10px"
        w="12rem"
        bg={"SKYblue"}
        marginLeft="-2px"
        color="white"
        onClick={onOpen}
      >
        Add Entry
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent pt={5} > 
        <ModalCloseButton />
          <ModalHeader  >
           <Input onChange={(e)=>setText(e.target.value)} placeholder="Add a note for this work"/>
          </ModalHeader>
           
          <ModalBody pb={10}>
          <Select onChange={(e)=>setSelectProject(e.target.value)} pb={3} placeholder='Select Project'>
  <option style={{"background" :"red"}} value='option1'>Option 1</option>
  <option value='option2'>Option 2</option>
  <option value='option3'>Option 3</option>
  <option value='option1'>Option 1</option>
   
</Select >
 
 <Input type={"date"}    value={date} onChange={(e)=>{
  setDate(e.target.value)
  
  
 }} placeholder={time}/>
          </ModalBody>

          <ModalFooter>
            <Button onClick={submitButton}   colorScheme="blue" mr={3}>
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