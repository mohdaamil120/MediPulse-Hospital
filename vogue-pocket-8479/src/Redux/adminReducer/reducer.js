import { DOCTORS_FAILURE, DOCTORS_REQUEST, GET_DOCTORS, GET_USERS, POST_USER } from "./actionTypes"

const initialState = {
    isLoading:false,
    isError:false,
    doctors:[],
    users:[]
}

export const reducer = (state=initialState,{type,payload})=>{
    switch(type){
        case DOCTORS_REQUEST:
            return {...state, isLoading:true}
        case DOCTORS_FAILURE:
            return {...state, isLoading:false, isError:true} 
        case GET_DOCTORS:
            return {...state, isError:false, isLoading:false, doctors:payload}
        case GET_USERS:
            return {...state, isError:false, isLoading:false, users:payload}
        case POST_USER:
            return {...state, isLoading:false, isError:false, users:payload}    
        default:
           return state
    }
}