import {
  ADD_PROJECT_FAILURE,
  ADD_PROJECT_REQUEST,
  ADD_PROJECT_SUCCESS,
  GET_PROJECT_FAILURE,
  GET_PROJECT_REQUEST,
  GET_PROJECT_SUCCESS,
} from "./actionType";
import axios from "axios";

const addProjectRequest = (payload) => {
  return {
    type: ADD_PROJECT_REQUEST,
    payload,
  };
};

const addProjectSuccess = (payload) => {
  return {
    type: ADD_PROJECT_SUCCESS,
    payload,
  };
};

const addProjectFailure = (payload) => {
  return {
    type: ADD_PROJECT_FAILURE,
    payload,
  };
};

const getProjectRequest = (payload) => {
  return {
    type: GET_PROJECT_REQUEST,
    payload,
  };
};

const getProjectSuccess = (payload) => {
  return {
    type: GET_PROJECT_SUCCESS,
    payload,
  };
};

const getProjectFailure = (payload) => {
  return {
    type: GET_PROJECT_FAILURE,
    payload,
  };
};

const getProjets = (payload) => (dispatch) => {
  dispatch(getProjectRequest());

  axios
    .get("http://localhost:8080/project")
    .then((res) => dispatch(getProjectSuccess(res.data)))
    .catch((err) => dispatch(getProjectFailure(err)));
};

const addProjects = (payload) => (dispatch) => {
  console.log(payload);
  dispatch(addProjectRequest());
  axios
    .post("http://localhost:8080/project/create", payload)
    .then((res) => {
      dispatch(addProjectSuccess());
      console.log(res.data);
    })
    .catch((err) => dispatch(addProjectFailure()));
};

export { addProjects, getProjets };
