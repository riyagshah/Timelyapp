import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  Input,
  Select,
} from "@chakra-ui/react";
import { useState } from "react";
import { useToast } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { deleteProject, editProject } from "../../Redux/Task_reducer/action";

const TaskModel = ({
  isOpen,
  onClose,
  time,
  title,
  project,
  refNO,
  projectArray,
  projectId,
  pColor,
}) => {
  const dispatch = useDispatch();
  const toast = useToast();
  const [date, setDate] = useState(time);
  const [text, setText] = useState(title);
  const [selectProject, setSelectProject] = useState(project);
  const [color, setColor] = useState(pColor);

  const [refId] = useState(refNO);
  const handleSubmit = () => {
    // console.log(refId)
    if (text) {
      const payload = {
        title: text,
        project: selectProject,
        date: date,
        refNO: refId,
        projectId,
        pColor: color,
      };
      // console.log("editbuttnon", refId)
      toast({
        title: ` ${payload.title} is Changed `,
        description: ` ${payload.project} assigned at ${payload.date} `,
        status: "warning",
        duration: 1000,
        isClosable: true,
        position: "top",
      });
      dispatch(editProject(refId, payload, projectId));
    }
  };
  const handleDelte = (text) => {
    toast({
      title: ` ${text} is deleted `,

      status: "error",
      duration: 1000,
      isClosable: true,
      position: "top",
    });
    dispatch(deleteProject(refId));
  };

  const handleChange = (e) => {
    const { value } = e.target;
    let [{ projectname, pColor }] = projectArray.filter(
      (e) => e.projectname === value
    );
    //  console.log(projectname)
    setSelectProject(projectname);
    setColor(pColor);
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
            onChange={handleChange}
            pb={3}
            placeholder="Select Project"
            defaultValue={project}
          >
            {projectArray.map((e) => {
              return (
                <option value={`${e.projectname}`}>{e.projectname}</option>
              );
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
          <Button onClick={() => handleDelte(text)} colorScheme="red">
            Delete
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default TaskModel;
