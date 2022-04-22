interface MovieCardProps {
  title: string;
  img: string;
  rating: number;
  date: string;
}

const MovieCard: React.FC<MovieCardProps> = ({ title, img, rating, date }) => {
  return (
    <div className="p-2 rounded-2xl bg-white w-[280px] cursor-pointer hover:opacity-50">
      <img
        className="rounded-2xl"
        src={`https://image.tmdb.org/t/p/original/${img}`}
      />
      <h1 className="font-bold mt-2 text-xl">{title}</h1>
      <div className="flex justify-start items-center gap-2 mt-2">
        <p className="p-1 bg-red-400 font-bold rounded">{rating}</p>
        <p>{date}</p>
      </div>
    </div>
  );
};

export default MovieCard;
