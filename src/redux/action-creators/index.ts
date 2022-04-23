import axios from "axios";
import { ActionTypes, PopularActionTypes } from "../action-type/index";
import { Dispatch } from "redux";
import { Action } from "../actions/index";

export const searchMovies = (term: string, pageNum: number) => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: ActionTypes.SEARCH_MOVIES });
    const encodedTerm = encodeURI(term);

    try {
      const res: any = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=a985693175375957a9478fced25e1744&language=en-US&query=${encodedTerm}&page=${pageNum}&include_adult=false`
      );

      const movieResults = res.data.results;

      dispatch({
        type: PopularActionTypes.GET_POPULAR_MOVIES_SUCCESS,
        payload: movieResults,
      });
    } catch (error: any) {
      dispatch({
        type: ActionTypes.SEARCH_MOVIES_ERROR,
        payload: error.message,
      });
    }
  };
};

export const getPopularMovies = (pageNum: number = 1) => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: PopularActionTypes.GET_POPULAR_MOVIES });

    try {
      const res: any = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=a985693175375957a9478fced25e1744&language=en-US&page=${pageNum}`
      );

      dispatch({
        type: PopularActionTypes.GET_POPULAR_MOVIES_SUCCESS,
        payload: res.data.results,
      });
    } catch (error: any) {
      console.log(error.message);
    }
  };
};

export const setIsSearching = (value: boolean) => {
  return (dispatch: Dispatch) => {
    if (value) {
      dispatch({ type: "isSearching" });
    } else {
      dispatch({ type: "isNotSearching" });
    }
  };
};
