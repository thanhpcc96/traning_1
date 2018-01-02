import {
  LOAD_DIALOGS,
  LOAD_DIALOGS_ERROR,
  LOAD_DIALOGS_SUCCESS,
  CREATE_CHAT_DIALOG,
  INIT_DIALOG_FOR_CHAT,
  LOAD_OLD_MESSAGE_OF_DIALOG,
  SEND_MESSAGE,
  GET_LIST_USER,
  GET_LIST_USER_SUCCESS,
  GET_LIST_USER_ERROR
} from "../actions/chat.action";
const RECEIVE_IMCOMING_MESSAGE= "RECEIVE_IMCOMING_MESSAGE";

const initLoadDialog = {
  loadedDialogs:false,
  errorDialogs: null,
  listDialogs: null,

  loadedUsers: false,
  listUsers: null,
  errorUser: null,
  dialog: null,
  oldMessage: [],

  dialogShouldUpdate: null,
  send: null
};
export default function(state = initLoadDialog, { type, payload }) {
  switch (type) {
    case LOAD_DIALOGS:
      return {
        ...state,
        loadedDialogs: false,
        listDialogs: null,
        errorDialogs: null
      };
    case LOAD_DIALOGS_SUCCESS:
      return {
        ...state,
        listDialogs: payload,
        loadedDialogs: true,
        errorDialogs: null
      };
    case LOAD_DIALOGS_ERROR:
      return {
        ...state,
        listDialogs: null,
        loadedDialogs: true,
        errorDialogs: payload
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
        oldMessage:[...state.oldMessage,payload]
      }
    case SEND_MESSAGE:
      return {
        ...state,
        send: payload
      }
    case RECEIVE_IMCOMING_MESSAGE: {
      state.oldMessage.forEach(item=>{
        if(item._id== payload.dialogId){
          item.data.push(payload);
        }
      })
      return{
        ...state,
        imcommingMessage: payload,
        dialogShouldUpdate: payload.dialogId
      }
    }
    default:
      return state;
  }
}
