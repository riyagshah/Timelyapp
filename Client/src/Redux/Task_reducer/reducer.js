import * as types from "./actiontypes";

const initialState = {
  project: [ 
],
  
};

export const reducer = (state = initialState, { type, payload }) => {
 
 
  //console.log(state.project)
  switch (type) {
case types.GET_TASK_PROJECT: return {state:payload}

    case types.ADD_NEW_PROJECT:
      let newprojectArr = [...state.project, payload];
      return { ...state, project: newprojectArr };

      case types.Delete_PROJECT:
      let delelteArray =state.project.filter((e)=> e.refNO!=payload)
      return { ...state, project: delelteArray };

      case types.EDIT_PROJECT:
        const {refNO,UpdatedTask} = payload
     console.log("reducer",refNO,UpdatedTask)
        let editedArray =state.project.map((e)=>  {
          if(e.refNO=== refNO){
            return UpdatedTask
          }
          else {
            return e
          }
        })
      //  console.log(editedArray)
        return { ...state, project: editedArray };
    default:
      return state;
  }
};
