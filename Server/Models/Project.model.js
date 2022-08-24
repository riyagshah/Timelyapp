const mongoose = require("mongoose");

const projectSchema = mongoose.Schema({
  projectname: { type: String, required: true },
  clientname: { type: String, required: true },
  projectStatus: { type: String, required: true },
  startTime: { type: Date},
  userId: { type: String, required: true }
});

const ProjectModel = mongoose.model("project", projectSchema);

module.exports = ProjectModel;
