export interface RepoItem {
  title: string;
  description: string;
  link: string;
  starCount: string;
}

export interface UserInfo {
  userName: string;
  userLogin: string;
  avatarUrl: string;
  organization: string;
  location: string;
  star: string;
  repo: string;
  followers: string;
}

export interface UserInfoState {
  userInfo: UserInfo;
}

export interface ResultsState {
  results: RepoItem[];
}

export const REQUEST_USER_INFO = "REQUEST_USER_INFO";
export const REQUEST_RESULTS = "REQUEST_RESULTS";

interface RequestUserInfoAction {
  type: typeof REQUEST_USER_INFO;
  payload: UserInfo;
}
interface RequestResultsAction {
  type: typeof REQUEST_RESULTS;
  payload: RepoItem[];
}

export type ResultsActionTypes = RequestResultsAction | RequestUserInfoAction;
