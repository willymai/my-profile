import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import test from "./test";
import common from "./common";

const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    test,
    common,
  });

export default createRootReducer;
