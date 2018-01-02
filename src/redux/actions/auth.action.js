import RNQuicklox from "../../QuickbloxManager";
import store from '../store';

export const LOGIN = "LOGIN";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";

export const REGISTER = "REGISTER";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_ERROR = "REGISTER_ERROR";

const quickblox = new RNQuicklox(store);

export const login = (username, password) => {
  return dispatch => {
    dispatch({
      type: LOGIN
    });
    quickblox.login(username, password, data => {
      if (typeof data === "object" && data.errors) {
        return dispatch({
          type: LOGIN_ERROR,
          payload: data
        });
      }
      return dispatch({
        type: LOGIN_SUCCESS,
        payload: data
      });
    });
  };
};
export const register = (username, password, fullname, email) => {
  return dispatch => {
    dispatch({
      type: REGISTER
    });
    quickblox.signUp(username, password, fullname, email, data => {
      if (typeof data === "object") {
        return dispatch({
          type: REGISTER_ERROR,
          payload: data
        });
      }
      return dispatch({
        type: REGISTER_SUCCESS,
        payload: data
      });
    });
  };
};
