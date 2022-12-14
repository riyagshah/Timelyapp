const express = require("express");

const ProjectModel = require("../Models/Project.model");
const taskModel = require("../Models/Task.model");

const projectController = express.Router();

let startTime = new Date();

const getRandomColor = () => {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

projectController.post("/create", async (req, res) => {
  let pColor = getRandomColor();
  const { projectname, clientname, projectStatus, userId } = req.body;
  // console.log(projectname, clientname, projectStatus, userId);
  const new_project = new ProjectModel({
    projectname,
    clientname,
    projectStatus,
    startTime,
    pColor,
    userId,
  });
  await new_project.save();
  res.send({ message: "Project has been created", new_project });
});

projectController.get("/", async (req, res) => {
  const { userId } = req.body;
  const projects = await ProjectModel.find({ userId });
  res.send(projects);
});

projectController.patch("/edit/:projectId", async (req, res) => {
  const { projectId } = req.params;
  // console.log(projectId)
  const { userId } = req.body;
  const project = await ProjectModel.findOne({ _id: projectId });

  if (project.userId === userId) {
    const new_project = await ProjectModel.findOneAndUpdate(
      { _id: projectId },
      req.body,
      { new: true }
    );
    return res.send({
      message: "Project has been updated successfully!",
      new_project,
    });
  } else {
    return res.send("you are not authorised to do it");
  }
});

projectController.delete("/delete/:projectId", async (req, res) => {
  const { projectId } = req.params;

  const { userId } = req.body;
  const project = await ProjectModel.findOne({ _id: projectId });

  if (project.userId === userId) {
    await ProjectModel.findOneAndDelete({ _id: projectId });
   await taskModel.deleteMany({projectId:projectId})
    return res.send({ message: "Project has been deleted successfully!" });
  } else {
    return res.send("you are not authorised to do it");
  }
});

module.exports = projectController;
