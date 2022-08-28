const mongoose = require("mongoose");

const taskSchema = mongoose.Schema({
  title: { type: String, required: true },
  project:{type:String},
  date:{type:String},
  projectId: { type: String},
  refNO:{type:String},
  pColor:{type:String},
  
});

const taskModel = mongoose.model("task", taskSchema);

module.exports = taskModel;
