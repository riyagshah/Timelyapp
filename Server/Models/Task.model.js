const mongoose = require("mongoose");

const taskSchema = mongoose.Schema({
  taskname: { type: String, required: true },
  taskStatus: { type: String, required: true },
  projectId: { type: String, required: true },
  userId: { type: String, required: true },
});

const taskModel = mongoose.model("task", taskSchema);

module.exports = taskModel;
