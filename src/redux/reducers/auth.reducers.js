import { LOGIN, LOGIN_SUCCESS, LOGIN_ERROR, REGISTER, REGISTER_SUCCESS, REGISTER_ERROR } from "../actions/auth.action";

const initState = {
  isLogin: false,
  isLoading : false,
  error: null,
  login: null,
  register: null
};
export default function(state = initState, { type, payload }) {
  switch (type) {
    case LOGIN:
      return {
        ...state,
        isLogin: false,
        isLoading: true,
        login: null,
        error: null
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLogin: true,
        isLoading: false,
        login: payload,
        error: null
      };
    case LOGIN_ERROR:
      return {
        ...state,
        isLogin: false,
        isLoading: false,
        login: null,
        error: payload
      };
    case REGISTER:
      return {
        ...state,
        isLoading: true,
        isLogin: false,
        error: null,
        login: false,
        register: null
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLogin: true,
        error: null,
        login: payload,
        register: payload
      };
    case REGISTER_ERROR:
      return {
        ...state,
        isLoading: false,
        isLogin: false,
        error: payload,
        login: null,
        register: null
      };
    default:
      return state;
  }
}
