const express = require("express");

const ProjectModel = require("../models/Project.model");

const projectController = express.Router();

let startTime = new Date();

projectController.post("/create", async (req, res) => {
  const { projectname, clientname, projectStatus, userId } = req.body;
   console.log(projectname,clientname,projectStatus,userId)
  const new_project = new ProjectModel({
    projectname,
    clientname,
    projectStatus,
    startTime,
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

projectController.patch("/:projectId/edit", async (req, res) => {
  const { projectId } = req.params;
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

projectController.delete("/:projectId/delete", async (req, res) => {
  const { projectId } = req.params;
  const { userId } = req.body;
  const project = await ProjectModel.findOne({ _id: projectId });

  if (project.userId === userId) {
    await ProjectModel.findOneAndDelete({ _id: projectId });
    return res.send({ message: "Project has been deleted successfully!" });
  } else {
    return res.send("you are not authorised to do it");
  }
});

module.exports = projectController;
