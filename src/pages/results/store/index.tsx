import {
  UserInfo,
  RepoItem,
  REQUEST_RESULTS,
  REQUEST_USER_INFO,
  ResultsActionTypes
} from "./types";

const userInfoInitialState: UserInfo = {} as UserInfo;

export function userInfoReducer(
  state = userInfoInitialState,
  action: ResultsActionTypes
): UserInfo {
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

const resultsInitialState: RepoItem[] = [];

export function resultsReducer(
  state = resultsInitialState,
  action: ResultsActionTypes
): RepoItem[] {
  switch (action.type) {
    case REQUEST_RESULTS: {
      return action.payload;
    }
    default:
      return state;
  }
}
