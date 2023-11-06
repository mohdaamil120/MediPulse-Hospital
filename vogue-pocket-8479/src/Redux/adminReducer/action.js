import axios from "axios"
import { DOCTORS_FAILURE, DOCTORS_REQUEST, GET_DOCTORS, GET_USERS, POST_USER } from "./actionTypes"

export const getDoctors = (dispatch)=>{
    
    dispatch({type:DOCTORS_REQUEST})
    axios.get(`https://vogue-pocket-data.onrender.com/doctors`)
    .then((res)=>{
        console.log(res.data)
        dispatch({type:GET_DOCTORS, payload:res.data})
    })
    dispatch({type:DOCTORS_FAILURE})
}


export const getUsers = (dispatch)=>{
    
    dispatch({type:DOCTORS_REQUEST})
    axios.get(`https://vogue-pocket-data.onrender.com/users`)
    .then((res)=>{
        console.log(res.data)
        dispatch({type:GET_USERS, payload:res.data})
    })
    dispatch({type:DOCTORS_FAILURE})
}



export const addNewUser = (data)=> (dispatch) => {
    // Send the newUserData to your API (you need to implement this)
    // After successfully adding the user, you can close the modal and update the user list
    dispatch({type:DOCTORS_REQUEST})
    axios.post(`https://vogue-pocket-data.onrender.com/users`,data)
    .then((res)=>{
        console.log(res.data)
        dispatch({type:POST_USER, payload:res.data})
    })
    dispatch({type:DOCTORS_FAILURE})
  };
  