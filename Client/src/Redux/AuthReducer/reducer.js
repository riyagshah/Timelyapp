

import { getLocalData, handlelogout, logout, saveLocalData } from "../../utils/LocalStorage";
import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS } from "./actionType";


const initialState = {
    loading: false,
    error: false,
    isAuth: getLocalData("token")? true : false,
    token: getLocalData("token") || ""
}
const reducer = (state=initialState, {type,payload}) => {
    switch (type) {
      case LOGIN_LOADING: {
        return { ...state, loading: true, error: false };
      }
      case LOGIN_SUCCESS: {
        saveLocalData("token", payload.token);
        return {
          ...state,
          loading: false,
          error: false,
          isAuth: true,
          token: payload.token,
        };
      }
      case LOGIN_ERROR: {
        return { ...state, loading: false, error: true, isAuth: false };
      }
      case "LOGOUT": {
            console.log("logout");
            logout(payload, "");
             return { ...state, loading: true, isAuth: false, error: false };
      }

      default:
            return state;
        
    }
}

export  {reducer}