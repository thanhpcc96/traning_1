/* eslint-disable */
import firebase from "../../firebase";

export const REGISTER = "REGISTER";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_ERROR = "REGISTER_ERROR";

export const LOGIN = "LOGIN";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";

export const register = (email, password) => {
  return async dispatch => {
    dispatch({
      type: REGISTER
    });
    try {
      const data = await firebase
        .auth()
        .createUserAndRetrieveDataWithEmailAndPassword(
          email.toLowerCase(),
          password
        );
        const user = {
          uid: data.user.uid,
          refreshToken: data.user.refreshToken,
          photoURL: data.user.photoURL,
          pa: data.user.pa,
          email: data.user.email,
          displayName: data.user.displayName
        };
        dispatch({
          type: REGISTER_SUCCESS,
          user
        })
    } catch (error) {
      return dispatch({
        type: REGISTER_ERROR,
        error
      });
    }
  };
};
export const login = (email, password) => {
  return dispatch => {
    dispatch({
      type: LOGIN
    });
    firebase
      .auth()
      .signInAndRetrieveDataWithEmailAndPassword(email, password)
      .then(data => {
        const user = {
          uid: data.user.uid,
          refreshToken: data.user.refreshToken,
          photoURL: data.user.photoURL,
          pa: data.user.pa,
          email: data.user.email,
          displayName: data.user.displayName
        };
        dispatch({
          type: LOGIN_SUCCESS,
          user
        });
      })
      .catch(function(error) {
        // Handle Errors here.
        // const errorCode = error.code;
        // const errorMessage = error.message;
        dispatch({
          type: LOGIN_ERROR,
          error
        });
        //   if (errorCode === 'auth/wrong-password') {
        //     alert('Wrong password.');
        //   } else {
        //     alert(errorMessage);
        //   }
        //   console.log(error);
      });
  };
};
