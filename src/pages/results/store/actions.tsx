import {
  UserInfo,
  RepoItem,
  REQUEST_USER_INFO,
  REQUEST_RESULTS,
  ResultsActionTypes
} from "./types";

export function requestUserInfo(newItem: UserInfo): ResultsActionTypes {
  return {
    type: REQUEST_USER_INFO,
    payload: newItem
  };
}

export function requestItems(newItem: RepoItem[]): ResultsActionTypes {
  return {
    type: REQUEST_RESULTS,
    payload: newItem
  };
}
