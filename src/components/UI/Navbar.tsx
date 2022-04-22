import styles from "./Navbar.module.css";

import { AiFillRightCircle, AiOutlineUser } from "react-icons/ai";

const Navbar: React.FC = () => {
  return (
    <div className={`${styles.nav} w-full`}>
      <div className="container mx-auto flex justify-between items-center py-5 text-white">
        <h1 className="cursor-pointer font-bold text-xl">React Movies</h1>
        <div className="flex justify-center items-center">
          <input className="p-2 rounded-2xl text-black" placeholder="search" />
          <AiFillRightCircle size={40} className="ml-3 cursor-pointer" />
        </div>
        <div className="flex justify-center items-center cursor-pointer">
          <AiOutlineUser size={30} className="mr-3" />
          <p>Member Login</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
