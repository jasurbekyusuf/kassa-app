import {logger} from "redux-logger/src";
import kassaReducer from './reducers/kassaReducer'
import {applyMiddleware, combineReducers, createStore} from "redux";
import userReducer from "./reducers/userReducer";
import kirimReducer from "./reducers/kirimReducer";
import chiqimReducer from "./reducers/chiqimReducer";

export default  createStore(combineReducers({
    kassaReducer,
    userReducer,
    kirimReducer,
    chiqimReducer
}), applyMiddleware(logger))