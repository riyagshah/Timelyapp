import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS, LOGOUT_SUCCESS } from "./actionType";

import axios from "axios";

export const loginApi = (data) => (dispatch) => {
  dispatch({ type: LOGIN_LOADING });
  axios
    .post("https://whispering-thicket-24456.herokuapp.com/user/login", {
      email: data.email,
      password: data.password,
    })
    .then((res) => {
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    })
    .catch(() => {
      dispatch({ type: LOGIN_ERROR });
    });

};
// logoutAPI
export const logoutAPI = () => (dispatch) => {
  dispatch({ type: LOGOUT_SUCCESS });
};
