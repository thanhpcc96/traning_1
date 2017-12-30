import { LOGIN, REGISTER } from "../actions/auth.action";

const initState = {
  isLogin: false,
  login: null,
  register: null
};
export default function(state = initState, { type, payload }) {
  switch (type) {
    case LOGIN:
      return {
        ...state,
        isLogin: true,
        login: payload
      };
    case REGISTER:
      return {
        ...state,
        register: payload
      };
    default:
      return state;
  }
}
