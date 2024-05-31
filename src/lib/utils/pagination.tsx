"use client";
import { useEffect, useState } from "react";
interface Props {
  totalPages: number | null;
  currentPage: number;
  setCurrentPage: (value: number) => void;
  marginTop: string;
}
const Pagination = ({
  totalPages,
  currentPage,
  setCurrentPage,
  marginTop,
}: Props) => {
  const [tempArr, setTemArr] = useState([]);

  const next = () => {
    if (currentPage === totalPages) {
      return;
    } else {
      setCurrentPage(currentPage + 1);
    }
  };

  const previous = () => {
    if (currentPage === 1) {
      return;
    } else {
      setCurrentPage(currentPage - 1);
    }
  };
  const handlePagination = () => {
    try {
      if (totalPages != null) {
        let numOfPages = Array.from(
          { length: totalPages },
          (_, index) => index + 1
        );
        let tempNumOfArr: any = [...numOfPages];
        console.log("numOfPages", numOfPages);
        if (currentPage >= 1 && currentPage <= 3) {
          const sliced1 = tempNumOfArr.slice(0, 5);
          console.log("sliced1", sliced1);

          tempNumOfArr = [...sliced1, "...", numOfPages.length];
        } else if (currentPage === 4) {
          const sliced = numOfPages.slice(0, 5);
          tempNumOfArr = [...sliced, "...", numOfPages.length];
        } else if (currentPage > 4 && currentPage < numOfPages.length - 2) {
          const sliced2 = numOfPages.slice(currentPage - 2, currentPage);
          const sliced3 = numOfPages.slice(currentPage, currentPage + 1);
          tempNumOfArr = [
            1,
            "...",
            ...sliced2,
            ...sliced3,
            "...",
            numOfPages.length,
          ];
        } else {
          const sliced4 = numOfPages.slice(numOfPages.length - 4);
          tempNumOfArr = [1, "...", ...sliced4];
        }
        setTemArr(tempNumOfArr);
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    handlePagination();
  }, [currentPage, totalPages]);
  return (
    <div
      className={`flex items-center w-full justify-between px-4 py-3 sm:px-6 mt-${marginTop}`}
    >
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-center">
        <div>
          <nav
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            <button
              onClick={previous}
              className={`relative inline-flex items-center rounded-l-md px-2 py-2 ring-1 ring-inset ring-[#9168bf] ${
                currentPage === 1
                  ? "cursor-not-allowed opacity-50 hover:bg-none"
                  : "hover:bg-[#9168bf]"
              }`}
              disabled={currentPage === 1}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-white"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>
            {tempArr.map((data, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(data)}
                aria-current="page"
                className={`relative z-10 inline-flex items-center px-4 py-2 text-sm font-semibold text-white ring-1 ring-inset ring-[#9168bf] ${
                  currentPage === data && "bg-[#9168bf]"
                }`}
              >
                {data}
              </button>
            ))}
            <button
              onClick={next}
              className={`relative inline-flex items-center rounded-r-md px-2 py-2 text-white ring-1 ring-inset ring-[#9168bf] ${
                currentPage === totalPages
                  ? "cursor-not-allowed opacity-50 hover:bg-none"
                  : "hover:bg-[#9168bf]"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-white"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
