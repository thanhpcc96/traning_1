import RNQuickblox from "../../QuickbloxManager";

import store from "../store";

export const LOAD_DIALOGS = "LOAD_DIALOGS";
export const LOAD_DIALOGS_SUCCESS = "LOAD_DIALOGS_SUCCESS";
export const LOAD_DIALOGS_ERROR = "LOAD_DIALOGS_ERROR";

export const GET_LIST_USER = "GET_LIST_USER";
export const GET_LIST_USER_SUCCESS = "GET_LIST_USER_SUCCESS";
export const GET_LIST_USER_ERROR = "GET_LIST_USER_ERROR";

export const CREATE_CHAT_DIALOG = "CREATE_CHAT_DIALOG";
export const INIT_DIALOG_FOR_CHAT = "INIT_DIALOG_FOR_CHAT";
export const LOAD_OLD_MESSAGE_OF_DIALOG = "LOAD_OLD_MESSAGE_OF_DIALOG";
export const SEND_MESSAGE = "SEND_MESSAGE";

const quiclblox = new RNQuickblox(store);

export const getListUsers = () => {
  return dispatch => {
    dispatch({
      type: GET_LIST_USER
    });
    quiclblox.getUsers(data => {
      if (data && data.errors) {
        return dispatch({
          type: GET_LIST_USER_ERROR,
          payload: data
        });
      }
      return dispatch({
        type: GET_LIST_USER_SUCCESS,
        payload: data
      });
    });
  };
};
export const loadDialogs = () => {
  return dispatch => {
    dispatch({
      type: LOAD_DIALOGS
    });
    quiclblox.getListDialogs(data => {
      if (data.errors) {
        return dispatch({
          type: LOAD_DIALOGS_ERROR,
          payload: data
        });
      }
      return dispatch({
        type: LOAD_DIALOGS_SUCCESS,
        payload: data
      });
    });
  };
};
export const createDialog = friendID => {
  return dispatch => {
    quiclblox.createPrivateDialog(friendID, data => {
      return dispatch({
        type: CREATE_CHAT_DIALOG,
        payload: data
      });
    });
  };
};
export const loadOldMessage = listIDdialog => {
  return dispatch => {
    listIDdialog.forEach(element => {
      quiclblox.retrieveMessagesOfChatDialog(element, data => {
        if (!data.errors) {
            const newData=[];
            if(data.length>0){
                data.forEach(item=>{
                    const newItem={
                        _id: item._id,
                        text: item.body,
                        createdAt: new Date(item.dateSent),
                        dialogId: item.dialogId,
                        user: {
                          _id : item.senderId
                        },
                        senderId: item.senderId,
                        recipientId: item.recipientId,
                        saveToHistory: item.saveToHistory
                      }
                      newData.push(newItem)
                });

            }
          const obj = { _id: element, data: newData.reverse() };
          dispatch({
            type: LOAD_OLD_MESSAGE_OF_DIALOG,
            payload: obj
          });
        }
      });
    });
  };
};
export const initForChat = idChatDialog => {
  quiclblox.initDialogForChat(idChatDialog, () => {
    console.log("initForChat OK");
  });
};
export const sendMessage = (dialogID, text) => {
  return dispatch => {
    quiclblox.sendMessage(dialogID, text, data => {
    
      dispatch({
        type: SEND_MESSAGE,
        payload: data
      });
    });
  };
};
