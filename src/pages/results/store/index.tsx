import { ResultsState, REQUEST_RESULTS, ResultsActionTypes } from "./types";

const initialState: ResultsState = {};

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
