import { RepoItem, REQUEST_RESULTS, ResultsActionTypes } from "./types";

export function sendMessage(newItem: RepoItem): ResultsActionTypes {
  return {
    type: REQUEST_RESULTS,
    payload: newItem
  };
}
