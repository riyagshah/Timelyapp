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
} from "../../Redux/Task_reducer/action";

const TaskModel = ({ isOpen, onClose, time, title, project, refNO }) => {
  const dispatch = useDispatch();

  const [date, setDate] = useState(time);
  const [text, setText] = useState(title);
  const [selectProject, setSelectProject] = useState(project);
 
const [refId,setrefId] =  useState(refNO)
  const handleSubmit = () => {
    // console.log(refId)
    if (text) {
      const payload = {
        title: text,
        project: selectProject,
        date: date,
        refNO:refId 
      };
console.log("editbuttnon", refId)
      dispatch(editProject(refId, payload));
    }
  };
  const handleDelte = () => { 
    dispatch(deleteProject(refId));
    alert("Project Deleted");
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent pt={3}>
        <ModalHeader>
          <Input onChange={(e) => setText(e.target.value)} value={text} />
        </ModalHeader>

        <ModalBody pb={10}>
          <Select
            onChange={(e) => setSelectProject(e.target.value)}
            pb={3}
            placeholder="Select Project"
            value={project}
          >
            <option style={{ background: "red" }} value="option1">
              Option 1
            </option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
            <option value="option1">Option 1</option>
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
