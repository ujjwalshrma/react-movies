import { Action } from "../actions/index";
import { ActionTypes } from "../action-type/index";
import { PopularActionTypes } from "../action-type/index";

export interface MoviesState {
  loading: boolean;
  data: any;
  error: string | null;
}

const initialState = {
  loading: false,
  error: null,
  data: [],
};

const searchingState = {
  isSearching: false,
};

export const searchMoviesReducer = (
  state: MoviesState = initialState,
  action: Action
): MoviesState => {
  switch (action.type) {
    case ActionTypes.SEARCH_MOVIES:
      return { loading: true, error: null, data: [] };
    case ActionTypes.SEARCH_MOVIES_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case ActionTypes.SEARCH_MOVIES_ERROR:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

export const getPopularMoviesReducer = (
  state: MoviesState = initialState,
  action: any
): MoviesState => {
  switch (action.type) {
    case PopularActionTypes.GET_POPULAR_MOVIES:
      return { loading: true, error: null, data: [] };
    case PopularActionTypes.GET_POPULAR_MOVIES_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case PopularActionTypes.GET_POPULAR_MOVIES_ERROR:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

export const isSearchingMoviesReducer = (
  state: { isSearching: boolean } = searchingState,
  action: any
) => {
  switch (action.type) {
    case "isSearching":
      return { isSearching: true };
    case "isNotSearching":
      return { isSearching: false };
    default:
      return state;
  }
};
