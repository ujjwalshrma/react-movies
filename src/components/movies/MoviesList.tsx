import { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import useActions from "../../hooks/useAction";

import MovieCard from "./MoviesCard";
import Loader from "../UI/Loader";
import PaginationEl from "../UI/PaginationEl";

const MoviesList: React.FC = () => {
  const [pageNum, setPageNum] = useState(1);

  const { getPopularMovies } = useActions();
  const { isSearching } = useSelector((state: any) => state.searching);

  useEffect(() => {
    if (!isSearching) {
      getPopularMovies(pageNum);
    }
  }, [pageNum, isSearching]);

  const { data: popularMovies, loading: isLoading } = useSelector(
    (state: any) => state.getPopularMovies
  );

  //const searchedMovies = useSelector((state: any) => state.searchMovies.data);

  const nextPage = () => {
    if (pageNum >= 100) return;
    setPageNum((prevPageNum) => prevPageNum + 1);
  };

  const prevPage = () => {
    if (pageNum <= 1) return;
    setPageNum((prevPageNum) => prevPageNum - 1);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      {isLoading ? (
        <Loader />
      ) : (
        <div className="flex flex-wrap justify-center py-12 gap-6">
          {popularMovies.map((movie: any) => (
            <MovieCard
              key={movie.id}
              title={movie.title}
              img={movie.poster_path}
              date={movie.release_date}
              rating={movie.vote_average}
            />
          ))}
        </div>
      )}
      {!isSearching && (
        <PaginationEl
          pageNum={pageNum}
          onClickNext={nextPage}
          onClickPrev={prevPage}
        />
      )}
    </div>
  );
};

export default MoviesList;
