import { combineReducers } from "redux";
import {
  searchMoviesReducer,
  getPopularMoviesReducer,
  isSearchingMoviesReducer,
} from "./searchMoviesReducer";

const reducers = combineReducers({
  searchMovies: searchMoviesReducer,
  getPopularMovies: getPopularMoviesReducer,
  searching: isSearchingMoviesReducer,
});

export default reducers;
