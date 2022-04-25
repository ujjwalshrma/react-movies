import { combineReducers } from "redux";
import {
  searchMoviesReducer,
  getPopularMoviesReducer,
  isSearchingMoviesReducer,
  getMovieDetailsReducer,
} from "./searchMoviesReducer";

const reducers = combineReducers({
  searchMovies: searchMoviesReducer,
  getPopularMovies: getPopularMoviesReducer,
  searching: isSearchingMoviesReducer,
  getMovieDetails: getMovieDetailsReducer,
});

export default reducers;
