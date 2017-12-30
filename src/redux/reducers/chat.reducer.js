import {
  LOAD_DIALOGS,
  CREATE_CHAT_DIALOG,
  INIT_DIALOG_FOR_CHAT,
  LOAD_OLD_MESSAGE_OF_DIALOG,
  SEND_MESSAGE
} from "../actions/chat.action";

const initLoadDialog = {
  listDialogs: null
};
export default function(state = initLoadDialog, { type, payload }) {
  switch (type) {
    case LOAD_DIALOGS:
      return {
        ...state,
        listDialogs: payload
      };
    default:
      return state;
  }
}
