const mongoose = require("mongoose");

const projectSchema = mongoose.Schema({
  projectname: { type: String, required: true },
  clientname: { type: String, required: true },
  projectStatus: { type: String, default:"Pending" },
  startTime: { type: Date},
  pColor:{type:String},
   userId: { type: String}
});

const ProjectModel = mongoose.model("project", projectSchema);

module.exports = ProjectModel;
