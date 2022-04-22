import { useEffect } from "react";

import useFetchMovies from "../../hooks/useFetchMovies";
import MovieCard from "./MoviesCard";
import Loader from "../UI/loader";
import PaginationEl from "../UI/PaginationEl";

const MoviesList: React.FC = () => {
  const { fetchPopularMovies, movies, setPageNum, pageNum } = useFetchMovies();

  useEffect(() => {
    fetchPopularMovies();
  }, [pageNum]);

  const nextPage = () => {
    if (pageNum >= 20) return;
    setPageNum((prevPageNum) => prevPageNum + 1);
  };

  const prevPage = () => {
    if (pageNum <= 1) return;
    setPageNum((prevPageNum) => prevPageNum - 1);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-wrap justify-center py-12 gap-6">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            img={movie.poster_path}
            date={movie.release_date}
            rating={movie.vote_average}
          />
        ))}
      </div>
      <PaginationEl
        pageNum={pageNum}
        onClickNext={nextPage}
        onClickPrev={prevPage}
      />
    </div>
  );
};

export default MoviesList;
