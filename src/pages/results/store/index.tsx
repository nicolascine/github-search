import {
  ResultsState,
  REQUEST_RESULTS,
  REQUEST_USER_INFO,
  ResultsActionTypes
} from "./types";

const initialState: ResultsState = {};

export function userInfoReducer(
  state = initialState,
  action: ResultsActionTypes
): ResultsState {
  switch (action.type) {
    case REQUEST_USER_INFO: {
      return {
        ...state,
        ...action.payload
      };
    }
    default:
      return state;
  }
}

export function resultsReducer(
  state = initialState,
  action: ResultsActionTypes
): ResultsState {
  switch (action.type) {
    case REQUEST_RESULTS: {
      return {
        ...state,
        ...action.payload
      };
    }
    default:
      return state;
  }
}
