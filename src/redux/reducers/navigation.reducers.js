import { router } from "../../router";

const navigtionReducer= (state, action)=>{
    const newState=router.getStateForAction(action, state);
    return newState || state;
}
export { navigtionReducer }