import userDataReducer from "./reducer";
import {combineReducers} from 'redux';
export default combineReducers({
    user:userDataReducer
})