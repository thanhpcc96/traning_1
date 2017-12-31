import {
  LOAD_DIALOGS,
  CREATE_CHAT_DIALOG,
  INIT_DIALOG_FOR_CHAT,
  LOAD_OLD_MESSAGE_OF_DIALOG,
  SEND_MESSAGE,
  GET_LIST_USER,
  GET_LIST_USER_SUCCESS,
  GET_LIST_USER_ERROR
} from "../actions/chat.action";

const initLoadDialog = {
  listDialogs: null,
  loadedUsers: false,
  listUsers: null,
  errorUser: null,
  dialog: null,
  oldMessage: null,
  send: null
};
export default function(state = initLoadDialog, { type, payload }) {
  switch (type) {
    case LOAD_DIALOGS:
      return {
        ...state,
        listDialogs: payload
      };
    case GET_LIST_USER:
      return {
        ...state,
        loadedUsers: false,
        listUsers: null,
        errorUser: null
      };
    case GET_LIST_USER_SUCCESS:
      return {
        ...state,
        loadedUsers: true,
        listUsers: payload,
        errorUser: null
      };
    case GET_LIST_USER_ERROR:
      return {
        ...state,
        loadedUsers: true,
        listUsers: null,
        errorUser: payload
      };
    case CREATE_CHAT_DIALOG:
      return {
        ...state,
        dialog: payload
      }
    case LOAD_OLD_MESSAGE_OF_DIALOG:
      return {
        ...state,
        oldMessage: payload
      }
    case SEND_MESSAGE:
      return {
        ...state,
        send: payload
      }
    default:
      return state;
  }
}
