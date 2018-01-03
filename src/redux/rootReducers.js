import { combineReducers } from "redux";
import {
  authReducer,
  navigtionReducer,
  chatReducers,
  videoCallReducers
} from "./reducers";

export default combineReducers({
  auth: authReducer,
  nav: navigtionReducer,
  chat: chatReducers,
  video: videoCallReducers
});
