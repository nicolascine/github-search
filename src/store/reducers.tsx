import { combineReducers } from "redux";
import { History } from "history";
import { connectRouter } from "connected-react-router";
import { resultsReducer } from "../pages/results/store";

export default (history: History) =>
  combineReducers({
    router: connectRouter(history),
    results: resultsReducer
  });
