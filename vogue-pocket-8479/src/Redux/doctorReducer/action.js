import { GET_FAILURE, GET_REQUEST, GET_SUCCESS } from "./actionTypes"
import axios from "axios"

export const getList= (paramsObj)=>(dispatch)=>{
dispatch({type:GET_REQUEST});
return axios.get(`https://vogue-pocket-data.onrender.com/doctors`,paramsObj)
.then((res)=> dispatch({type:GET_SUCCESS,payload:res.data}))
.catch(()=>dispatch({type:GET_FAILURE}))
}