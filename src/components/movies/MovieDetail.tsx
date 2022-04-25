import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import useActions from '../../hooks/useAction'
import { useSelector } from 'react-redux'
import Loader from '../UI/Loader'
import MovieCard from './MoviesCard'

const MovieDetail: React.FC = () => {
  const [recommendedMovies, setRecommendedMovies] = useState([])
  const { movieId } = useParams()

  const { getMovieDetails } = useActions()
  const { data: movieDetails, loading: isLoading } = useSelector(
    (state: any) => state.getMovieDetails
  )

  const getRecommendedMovies = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=a985693175375957a9478fced25e1744&language=en-US&page=1`
    )

    setRecommendedMovies(res.data.results)
  }

  useEffect(() => {
    if (movieId) {
      getMovieDetails(+movieId)
    }
    getRecommendedMovies()
  }, [movieId])

  if (isLoading) {
    return <Loader />
  }

  return (
    <div>
      <div className="mt-10 flex justify-start items-start gap-10">
        <img
          src={`https://image.tmdb.org/t/p/original/${movieDetails.poster_path}`}
          className="rounded-xl h-[50rem]"
        />
        <div className="mt-10">
          <h1 className="text-4xl text-white font-bold">
            {movieDetails.title}
          </h1>
          <div className="p-3 rounded flex justify-between max-w-[17rem] items-center gap-4 border border-white mt-7 text-white font-bold">
            <p>{movieDetails.runtime} Mins</p>
            <p>{movieDetails.release_date}</p>
            {movieDetails.spoken_languages && (
              <p>{movieDetails.spoken_languages[0].name}</p>
            )}
          </div>
          <p className="text-white text-xl mt-4 max-w-xl">
            {movieDetails.overview}
          </p>
          <p className="text-white font-bold mt-10 text-xl">
            Ratings : {movieDetails.vote_average} ❤️
          </p>
          <div className="flex justify-start items-center mt-10 gap-4">
            {movieDetails.genres &&
              movieDetails.genres.map((genre: { id: number; name: string }) => {
                return (
                  <p
                    className="p-2 text-black bg-white rounded font-bold"
                    key={genre.id}
                  >
                    {' '}
                    {genre.name}
                  </p>
                )
              })}
          </div>
        </div>
      </div>
      <h1 className="mt-10 font-bold text-white text-4xl">Similar Movies</h1>
      <div className="flex flex-wrap justify-center py-12 gap-6">
        {recommendedMovies &&
          recommendedMovies.map((movie: any) => (
            <Link to={`/movie/${movie.id}`} key={movie.id}>
              <MovieCard
                title={movie.title}
                img={movie.poster_path}
                date={movie.release_date}
                rating={movie.vote_average}
              />
            </Link>
          ))}
      </div>
    </div>
  )
}

export default MovieDetail
