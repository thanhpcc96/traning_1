import {
  FETCH_FRIENDS,
  FETCH_FRIENDS_ERROR,
  FETCH_FRIENDS_SUCCESS
} from "../actions/friend.action";

const initState = {
  isFetching: false,
  contacts: null,
  error: null
};

export default function (state = initState, action) {
  switch (action.type) {
    case FETCH_FRIENDS:
      return {
        ...state,
        isFetching: true,
        error: null,
        contacts: null
      };
    case FETCH_FRIENDS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: null,
        contacts: action.contacts
      };
    case FETCH_FRIENDS_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.error,
        contacts: null
      };

    default:
      return state;
  }
}
