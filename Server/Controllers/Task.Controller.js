const express = require("express");
const ProjectModel = require("../Models/Project.model");

const TaskModel = require("../Models/Task.model");

const taskController = express.Router();

taskController.post("/create", async (req, res) => {
  const { title, date, refNO, project } = req.body;
  const Mainproject = await ProjectModel.findOne({ projectname: project });
  const projectId = Mainproject._id;
  const pColor= Mainproject.pColor
  const userId = Mainproject.userId
  const new_task = new TaskModel({
    title,
    project,
    date,
    projectId,
    refNO,
    pColor,
   
  });
  await new_task.save();
  res.send({ message: "Task has been created", new_task });
});

taskController.get("/", async (req, res) => {
  const { userId } = req.body;
  const tasks = await TaskModel.find({userId});
  res.send(tasks);
});

taskController.patch("/edit", async (req, res) => {
  const { refNO } = req.body;

  const new_task = await TaskModel.updateOne({ refNO: refNO }, req.body);

  return res.send({ message: "Task has been updated successfully!", new_task });
});

taskController.delete("/:refNO/delete", async (req, res) => {
  const { refNO } = req.params;

  await TaskModel.deleteOne({ refNO: refNO });
  return res.send({ message: "Task has been deleted successfully!" });
});

module.exports = taskController;
