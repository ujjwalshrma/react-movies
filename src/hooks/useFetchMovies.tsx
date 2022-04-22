import { useState } from "react";
import axios from "axios";

interface Movie {
  title: string;
  id: string;
  overview: string;
  poster_path: string;
  vote_average: number;
  release_date: string;
}

type MoviesList = Movie[];

const useFetchMovies = () => {
  const [movies, setMovies] = useState<MoviesList>([]);
  const [pageNum, setPageNum] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const fetchPopularMovies = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=a985693175375957a9478fced25e1744&language=en-US&page=${pageNum}`
      );

      const popularMovies = await res.data.results;

      setIsLoading(false);
      setMovies(popularMovies);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return {
    fetchPopularMovies,
    movies,
    setPageNum,
    pageNum,
    isLoading,
  };
};

export default useFetchMovies;
