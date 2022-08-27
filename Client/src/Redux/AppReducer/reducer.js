import {
  ADD_PROJECT_FAILURE,
  ADD_PROJECT_REQUEST,
  ADD_PROJECT_SUCCESS,
  DELETE_PROJECT_FAILURE,
  DELETE_PROJECT_REQUEST,
  DELETE_PROJECT_SUCCESS,
  GET_PROJECT_FAILURE,
  GET_PROJECT_REQUEST,
  GET_PROJECT_SUCCESS,
} from "./actionType";

const initialState = {
  projectName: [],
  isLoading: false,
  isError: false,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_PROJECT_REQUEST:
      return { ...state, isLoading: true, isError: false };
    case GET_PROJECT_SUCCESS:
      return {
        ...state,
        projectName: payload,
        isLoading: false,
        isError: false,
      };
    case GET_PROJECT_FAILURE:
      return { ...state, isError: true, isLoading: false };
    case ADD_PROJECT_REQUEST:
      return { ...state, isLoading: true };
    case ADD_PROJECT_SUCCESS:
      return { ...state, isLoading: false, isError: false };
    case ADD_PROJECT_FAILURE:
      return { ...state, isLoading: false, isError: true };
    case DELETE_PROJECT_REQUEST:
      return { ...state, isLoading: true };
    case DELETE_PROJECT_SUCCESS:
      return{
        ...state,isLoading:false,isError:true
      }
    case DELETE_PROJECT_FAILURE:
      return {
        ...state, isError:true, isLoading:false
      }
    default:
      return state;
  }
};

export { reducer };
