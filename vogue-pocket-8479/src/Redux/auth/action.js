import { AUTH_REQ, AUTH_REQ_SUCCESS, AUTH_REQ_FAILURE } from "./actionTypes"

export const authRequest = () => {
  return { type: AUTH_REQ }
}

export const authRequestSuccess = (token) => {
  return { type: AUTH_REQ_SUCCESS, payload: token }
}

export const authRequestFailure = () => {
  return { type: AUTH_REQ_FAILURE }
}
// export const authLogout=()=>{
//     localStorage.setItem("isAuth",false);
    
//     return {type:isLog}
// }