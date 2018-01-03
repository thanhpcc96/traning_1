import RNQuickblox from "../../QuickbloxManager";

const quickblox = new RNQuickblox();

export const ACCEPT_CALL = "ACCEPT_CALL";
export const REJECT_CALL = "REJECT_CALL";
export const RESET_STATE_AFTER_CALL_END = "RESET_STATE_AFTER_CALL_END";

export const rejectCall = () => {
  return dispatch => {
    quickblox.rejectCall();
    dispatch({ type: REJECT_CALL});
  };
};

export const acceptCall = () => {
  return dispatch => {
    quickblox.acceptCall();
    dispatch({ type: ACCEPT_CALL });
  };
};

export const resetStateAfterCallEnd = () => dispatch =>
  dispatch({ type: RESET_STATE_AFTER_CALL_END });
