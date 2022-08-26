import axios from 'axios'
import * as types from './actiontypes'
 
 
export const addNewProject=( params)=>(dispatch)=>{
 
dispatch({type:types.ADD_NEW_PROJECT,payload:params})

}

export const editProject = (refNO,UpdatedTask) =>(dispatch)=>{
 // console.log("action",refNO)
 dispatch({type:types.EDIT_PROJECT,payload:{refNO,UpdatedTask}})
}

export const deleteProject = (refNO) =>(dispatch)=>{
 dispatch({type:types.Delete_PROJECT,payload:refNO})
}