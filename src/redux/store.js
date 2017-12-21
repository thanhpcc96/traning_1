import { createStore, applyMiddleware, compose } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import promiseMiddleware from "redux-promise-middleware";
import { autoRehydrate } from "redux-persist";
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from "./rootReducers";

const middleWares = [promiseMiddleware(), thunk];

if (__DEV__) {
  middleWares.push(
    createLogger({
      collapsed: true,
      predicate: (getState, { type }) => {
        const blacklist = ["Navigation/NAVIGATE", "Navigation/BACK"];
        return blacklist.every(i => i !== type);
      }
    })
  );
}

export default createStore(
  reducers,
  undefined,
  composeWithDevTools(applyMiddleware(...middleWares), autoRehydrate())
);
