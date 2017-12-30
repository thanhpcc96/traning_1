import RNQuickblox from "../../QuickbloxManager";

export const LOAD_DIALOGS = "LOAD_DIALOGS";
export const LOAD_DIALOGS_SUCCESS = "LOAD_DIALOGS_SUCCESS";
export const LOAD_DIALOGS_ERROR = "LOAD_DIALOGS_ERROR";

export const CREATE_CHAT_DIALOG = "CREATE_CHAT_DIALOG";
export const INIT_DIALOG_FOR_CHAT = "INIT_DIALOG_FOR_CHAT";
export const LOAD_OLD_MESSAGE_OF_DIALOG = "LOAD_OLD_MESSAGE_OF_DIALOG";
export const SEND_MESSAGE = "SEND_MESSAGE";

const quiclblox = new RNQuickblox();
export const loadDialogs = () => {
  return dispatch => {
      quiclblox.getListDialogs(data=>{
          dispatch({
              type: LOAD_DIALOGS,
              payload: data
          })
      })
  };
};
