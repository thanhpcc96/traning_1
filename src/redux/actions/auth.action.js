import RNQuicklox from "../../QuickbloxManager";

export const LOGIN = "LOGIN";
export const REGISTER = "REGISTER";

const quickblox = new RNQuicklox();
export const login = (username, password) => {
  return dispatch => {
    quickblox.login(username, password, data => {
      console.log('====================================');
      console.log(data);
      console.log('====================================');
     return dispatch({
        type: LOGIN,
        payload: data
      });
    });
  };
};
export const register = (username, password, fullname, email) => {
  return dispatch => {
    quickblox.signUp(username, password, fullname, email, data => {
      dispatch({
        type: REGISTER,
        payload: data
      });
    });
  };
};
