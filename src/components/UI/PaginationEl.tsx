import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";
import styles from "./PaginationEl.module.css";

interface PageinationElProps {
  pageNum?: number;
  onClickNext?: () => void;
  onClickPrev?: () => void;
}

const PaginationEl: React.FC<PageinationElProps> = ({
  pageNum,
  onClickPrev,
  onClickNext,
}) => {
  return (
    <div
      className={`${styles.pagination__div} flex justify-center items-center text-white bg-gray-700 p-3 rounded-lg gap-4`}
    >
      <AiFillLeftCircle
        onClick={onClickPrev}
        size={30}
        className="cursor-pointer"
      />
      <p className="font-bold text-xl">{pageNum}</p>
      <AiFillRightCircle
        size={30}
        onClick={onClickNext}
        className="cursor-pointer"
      />
    </div>
  );
};

export default PaginationEl;
