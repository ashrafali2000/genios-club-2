import Circle from './Circle';

const SevenMatrix = () => {
  return (
    <main>
      <div className="z-10 mt-4 w-fit rounded-[9px] border-none bg-[#2c0219] px-2 pb-6  pt-4 text-center font-san  ">
        <div className=" mx-auto min-h-[195px] w-fit  overflow-x-auto rounded-2xl border border-solid     border-[#ae7ddd]   ">
          <div className="rounded-t-lg  bg-[#ae7ddd] p-5 font-bold shadow-md">
            <h1 className="font-semibold  text-[#2c0219] transition duration-300 ease-in-out ">
              5
            </h1>
          </div>
          <div className="">
            <div className="  flex justify-center gap-x-[92px]   ">
              <div className="h-[18px] w-2 rotate-[30deg] transform   border-l border-dashed border-purple-500"></div>
              <div className="  h-[15px] w-2   border-l border-dashed  border-purple-500"></div>
              <div className="mt-[-4px] h-[18px] w-2 rotate-[-30deg] transform   border-l border-dashed border-purple-500"></div>
            </div>
            <div className="flex justify-center gap-x-[82px]">
              <Circle />
              <Circle />
              <Circle />
            </div>
            <div className="mt-[-5px] flex justify-center gap-x-[10px]">
              <div className="flex justify-center gap-x-[10px]">
                <Circle />
                <Circle />
                <Circle />
              </div>
              <div className="flex justify-center gap-x-[10px]">
                <Circle />
                <Circle />
                <Circle />
              </div>
              <div className="flex justify-center gap-x-[10px]">
                <Circle />
                <Circle />
                <Circle />
              </div>
            </div>
            <div className="flex justify-center">
              <div className="mt-[-5px] flex justify-center gap-x-[10px]">
                <div className="flex justify-center gap-x-[10px]">
                  <Circle />
                  <Circle />
                  <Circle />
                </div>
                <div className="flex justify-center gap-x-[10px]">
                  <Circle />
                  <Circle />
                  <Circle />
                </div>
                <div className="flex justify-center gap-x-[10px]">
                  <Circle />
                  <Circle />
                  <Circle />
                </div>
              </div>
              <div className="mt-[-5px] flex justify-center gap-x-[10px]">
                <div className="flex justify-center gap-x-[10px]">
                  <Circle />
                  <Circle />
                  <Circle />
                </div>
                <div className="flex justify-center gap-x-[10px]">
                  <Circle />
                  <Circle />
                  <Circle />
                </div>
                <div className="flex justify-center gap-x-[10px]">
                  <Circle />
                  <Circle />
                  <Circle />
                </div>
              </div>
              <div className="mt-[-5px] flex justify-center gap-x-[10px]">
                <div className="flex justify-center gap-x-[10px]">
                  <Circle />
                  <Circle />
                  <Circle />
                </div>
                <div className="flex justify-center gap-x-[10px]">
                  <Circle />
                  <Circle />
                  <Circle />
                </div>
                <div className="flex justify-center gap-x-[10px]">
                  <Circle />
                  <Circle />
                  <Circle />
                </div>
              </div>
            </div>
          </div>
          <div className="my-5 border-t   border-[#333] bg-[#ae7ddd40] p-[12px]">
            <div className="flex items-center justify-between">
              <div className="mb-1 flex items-center text-[12px] text-white">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.875 12.5a4.062 4.062 0 1 0 0-8.125 4.062 4.062 0 0 0 0 8.125Z"
                    stroke="#fff"
                    strokeMiterlimit="10"
                  ></path>
                  <path
                    d="M12.14 4.523c.36-.097.73-.147 1.102-.148a4.063 4.063 0 0 1 0 8.125M1.25 15.422a6.875 6.875 0 0 1 11.25 0M13.242 12.5a6.868 6.868 0 0 1 5.625 2.922"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <span className="ml-1 font-bold text-white">100</span>
              </div>
              <div className="mb-1 flex items-center text-[12px] text-white">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.625 6.875 17.5 5l-1.875-1.875"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M2.5 10a5.008 5.008 0 0 1 5-5h10M4.375 13.125 2.5 15l1.875 1.875"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M17.5 10a5.008 5.008 0 0 1-5 5h-10"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <span className="ml-1 font-bold text-white">8</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SevenMatrix;
