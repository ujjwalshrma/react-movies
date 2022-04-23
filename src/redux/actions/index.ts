import { ActionTypes } from "../action-type/index";

interface SearchMovies {
  type: ActionTypes.SEARCH_MOVIES;
}

interface SearchMoviesSuccess {
  type: ActionTypes.SEARCH_MOVIES_SUCCESS;
  payload: any;
}

interface SearchMoviesError {
  type: ActionTypes.SEARCH_MOVIES_ERROR;
  payload: string;
}

export type Action = SearchMovies | SearchMoviesError | SearchMoviesSuccess;
