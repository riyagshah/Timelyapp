const express = require("express");
const ProjectModel = require("../Models/Project.model");

const TaskModel = require("../Models/Task.model")

const taskController = express.Router();


taskController.post("/create", async (req, res) => {
   const project = await ProjectModel.findOne()
   //console.log(project)
   const projectId = project._id
   const projectname = project.projectname
    const {taskname,taskTime} = req.body;
    const new_task = new TaskModel({
        taskname,
        projectname,
        taskTime,
        projectId
    })
    await new_task.save()
    res.send({"message" : "Task has been created", new_task})
})

taskController.get("/", async (req, res) => {
   const project = await ProjectModel.findOne()
   const projectId = project._id
   const tasks = await TaskModel.find({projectId})
   res.send(tasks)
   console.log(tasks)
})


taskController.patch("/:taskId/edit", async (req, res) => {
     const {taskId} = req.params;
     //const {userId} = req.body;
     const project = await ProjectModel.findOne()
     console.log(project)
     const projectId = project._id
     const task = await TaskModel.findOne({_id : taskId})
    
     if(task.projectId == projectId){
        const new_task = await TaskModel.findOneAndUpdate({_id : taskId}, req.body, {new:true})
        return res.send({"message" : "Task has been updated successfully!", new_task})
        
     }
     else{
        return res.send("you are not authorised to do it")
     }
})

taskController.delete("/:taskId/delete", async (req, res) => {
    const {taskId} = req.params;
    //const {userId} = req.body;
    const project = await ProjectModel.findOne()
    const projectId = project._id
    const task = await TaskModel.findOne({_id : taskId})
   
    if(task.projectId == projectId){
       await TaskModel.findOneAndDelete({_id : taskId})
       return res.send({"message" : "Task has been deleted successfully!"})
    }
    else{
       return res.send("you are not authorised to do it")
    }
})



module.exports = taskController