import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS } from "./actionType";

const initialState = {
    loading: false,
    error: false,
    isAuth: false,
    token: ""
}
const reducer = (state=initialState, {type,payload}) => {
    switch (type){
        case LOGIN_LOADING :{
            return {...state,loading:true,error:false}
        }
        case LOGIN_SUCCESS:{
            return {...state,loading:false,error:false,isAuth:true,token:payload.token}
        }
        case LOGIN_ERROR:{
            return {...state,loading:false,error:true,isAuth:false};
        }
        default:
            return state;
    }
}

export  {reducer}