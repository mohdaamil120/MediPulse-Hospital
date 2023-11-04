
import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import {reducer as doctorReducer} from "../Redux/doctorReducer/reducer"


const rootReducer = combineReducers({
doctorReducer
})

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))
