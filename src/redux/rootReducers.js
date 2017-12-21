import { combineReducers } from "redux";
import {
  authReducer,
  navigtionReducer,
  friendsReducer,
  chatReducers
} from "./reducers";

export default combineReducers({
  auth: authReducer,
  nav: navigtionReducer,
  friends: friendsReducer,
  chat: chatReducers
});
