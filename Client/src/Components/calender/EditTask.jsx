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
import { useState, useContext, useRef } from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  deleteProject,
  editProject,
  addNewProject,
  getTaskProject,
} from "../../Redux/Task_reducer/action";

const TaskModel = ({ isOpen, onClose, time, title, project, refNO ,projectArray,projectId,pColor}) => {
  const dispatch = useDispatch();

  const [date, setDate] = useState(time);
  const [text, setText] = useState(title);
  const [selectProject, setSelectProject] = useState(project);
  const [color,setColor] = useState(pColor)
 
const [refId,setrefId] =  useState(refNO)
  const handleSubmit = () => {
    // console.log(refId)
    if (text) {
      const payload = {
        title: text,
        project: selectProject,
        date: date,
        refNO:refId,
        projectId,
        pColor:color
      };
// console.log("editbuttnon", refId)
      dispatch(editProject(refId, payload,projectId)) 
    }
  };
  const handleDelte = () => { 
    dispatch(deleteProject(refId));
    alert("Project Deleted");
  };

  const handleChange=(e)=>{
 const {value}=e.target
  let [{projectname,pColor}] = projectArray.filter((e)=>e.projectname === value)
//  console.log(projectname)
 setSelectProject(projectname)
 setColor(pColor)
 

  }
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent pt={3}>
        <ModalHeader>
          <Input onChange={(e) => setText(e.target.value)} value={text} />
        </ModalHeader>

        <ModalBody pb={10}>
        <Select
              onChange={ handleChange }
              pb={3}
              placeholder="Select Project"
             defaultValue={project}
         
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
          <Button onClick={handleSubmit} colorScheme="blue" mr={3}>
            Edit
          </Button>
          <Button onClick={onClose}>Cancel</Button>
          <Button onClick={handleDelte} colorScheme="red">
            Delete
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default TaskModel;
