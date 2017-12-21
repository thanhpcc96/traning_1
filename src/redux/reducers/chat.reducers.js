import {
  FETCH_ROOM_SUCCESS,
  FETCH_ROOM_ERROR,
  REGISTER_ROOM,
  FECTH_MESSSAGE_SUCCESS,
  FECTH_MESSSAGE_ERROR
} from "../actions/chat.action";

const INITIAL = {
  loading: true,
  messages: [],
  roomKey: null,
  error: null
};

export default (state = INITIAL, action) => {
  switch (action.type) {
    case FETCH_ROOM_SUCCESS:
      return {
        ...state,
        loading: false,
        roomKey: action.roomKey,
        error: null
      };
    case FETCH_ROOM_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case REGISTER_ROOM:
      return {
        ...state,
        roomKey: action.roomKey
      };
    case FECTH_MESSSAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        messages: action.messages
      };
    case FECTH_MESSSAGE_ERROR:
      return {
        ...state,
        loading: false,
        error_load_message: action.error
      };
    default:
      return state;
  }
};
