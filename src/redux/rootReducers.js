import { combineReducers } from "redux";
import {
  authReducer,
  navigtionReducer,
  chatReducers
} from "./reducers";

export default combineReducers({
  auth: authReducer,
  nav: navigtionReducer,
  chat: chatReducers
});
