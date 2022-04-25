import { useState } from "react";
import useActions from "../../hooks/useAction";
import { Link } from "react-router-dom";

import styles from "./Navbar.module.css";
import { AiFillRightCircle, AiOutlineUser } from "react-icons/ai";

const Navbar: React.FC = () => {
  const [term, setTerm] = useState("");
  const { searchMovies } = useActions();
  const { setIsSearching } = useActions();

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (term.trim().length === 0) return;
    searchMovies(term, 1);
    setIsSearching(true);
  };

  const goToHome = () => {
    setIsSearching(false);
    setTerm("");
  };

  return (
    <div className={`${styles.nav} w-full`}>
      <div className="container mx-auto flex justify-between items-center py-5 text-white">
        <Link
          to="/"
          onClick={goToHome}
          className="cursor-pointer font-bold text-xl"
        >
          React Movies
        </Link>
        <form onSubmit={onSubmit} className="flex justify-center items-center">
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="p-2 rounded-2xl text-black font-bold"
            placeholder="search"
          />
          <button type="submit">
            <AiFillRightCircle size={40} className="ml-3 cursor-pointer" />
          </button>
        </form>
        <div className="flex justify-center items-center cursor-pointer">
          <AiOutlineUser size={30} className="mr-3" />
          <p>Member Login</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
