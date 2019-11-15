export interface RepoItem {
  title: string;
  description: string;
  link: string;
  starCount: string;
}

export interface ResultsState {
  results?: RepoItem[];
}

export const REQUEST_RESULTS = "REQUEST_RESULTS";

interface RequestResultsAction {
  type: typeof REQUEST_RESULTS;
  payload: RepoItem;
}

export type ResultsActionTypes = RequestResultsAction;
