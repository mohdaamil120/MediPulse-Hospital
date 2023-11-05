
import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import {reducer as AdminReducer} from "./adminReducer/reducer"
import {reducer as doctorReducer} from "../Redux/doctorReducer/reducer"
import { reducer as AuthReducer } from "./auth/reducer";

const rootReducer = combineReducers({
    AdminReducer,
    AuthReducer,
    doctorReducer,
})

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))

