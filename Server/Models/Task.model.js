const mongoose = require("mongoose");

const taskSchema = mongoose.Schema({
  taskname: { type: String, required: true },
  projectname:{type:String},
  taskTime:{type:String},
  projectId: { type: String},
});

const taskModel = mongoose.model("task", taskSchema);

module.exports = taskModel;
  