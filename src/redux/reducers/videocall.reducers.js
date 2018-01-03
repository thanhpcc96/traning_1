import {
  DID_RECEIVE_CALL_SESSION,
  SESSION_DID_CLOSE,
  USER_ACCEPT_CALL,
  USER_HUNG_UP,
  USER_REJECT_CALL
} from "../../../App";

import {
  ACCEPT_CALL,
  REJECT_CALL,
  RESET_STATE_AFTER_CALL_END
} from "../actions/videocall.action";

const initState = {
  showModalReceiveVideoCall: false,
  userInfo: null
};
export default function(state = initState, { type, payload }) {
  switch (type) {
    case DID_RECEIVE_CALL_SESSION:
      return {
        ...state,
        showModalReceiveVideoCall: true,
        userInfo: payload
      };
    case ACCEPT_CALL:
      return {
        ...state,
        showModalReceiveVideoCall: false
      };
    case REJECT_CALL: 
      return {
        ...state,
        showModalReceiveVideoCall:false,
        userInfo: null
      }

    default:
      return state;
  }
}
