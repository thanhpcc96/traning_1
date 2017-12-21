import {
  LOGIN,
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  REGISTER,
  REGISTER_ERROR,
  REGISTER_SUCCESS,
} from "../actions/auth.action";

const initialState = {
  isLoged: false,
  isLoging: false,
  user: null,
  isRegister: false,
  error: null
};
export default function(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLoged: false,
        isLoging: true,
        user: null,
        error: null
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoged: true,
        isLoging: false,
        user: action.user,
        error: null
      };
    case LOGIN_ERROR:
      return {
        ...state,
        isLoged: false,
        isLoging: false,
        user: null,
        error: action.error
      };
    case REGISTER:
      return {
        ...state,
        isLoged: false,
        isRegister: true,
        user: null,
        error: null
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoged: true,
        isRegister: false,
        user: action.user,
        error: null
      };
    case REGISTER_ERROR:
      return {
        ...state,
        isLoged: false,
        isRegister: false,
        user: null,
        error: action.error
      };
    default:
      return state;
  }
}
