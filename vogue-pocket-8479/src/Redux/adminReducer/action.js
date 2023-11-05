import axios from "axios"
import { DOCTORS_FAILURE, DOCTORS_REQUEST, GET_DOCTORS, GET_USERS } from "./actionTypes"

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
