'use client';
import { useState } from 'react';

const Card = ({ address, contract }: { address: string; contract: any }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="relative rounded-[9px] border-none bg-[#2c0219] p-3 text-center font-san sm:p-6 sm:py-16">
      <div>
        <h1 className="mb-10 text-[20px] font-medium text-[#9168bf]">
          DOWNLINE
        </h1>

        <div className="mx-auto mb-[20px] flex h-[80px] w-[200px]  items-center justify-center rounded-lg border-2 border-[#ae7ddd] bg-[#1e1c2f] pl-[8px] pr-[8px] text-3xl font-bold text-[#ae7ddd] sm:w-[340px] xl:w-[440px]">
          <h1>ID 1</h1>
        </div>
        <div className="flex items-center text-white">
          <div>
            <button
              type="button"
              className="rounded-3xl border border-[#9168bf] p-2 text-[10px] text-white sm:text-[18px]"
            >
              <span className="sm:text-xl">&lt;</span> 2
            </button>
          </div>
          <div className="z-10 mx-auto w-[70%]  rounded-lg  bg-[#9168bf] p-5    sm:w-[340px] xl:w-[440px]">
            <div className="flex justify-between">
              <h1 className="text-white md:text-[25px]  ">5</h1>
              <a href="#" className="font-bold text-white md:text-[25px] ">
                ID 1
              </a>
            </div>
            <div className="mt-3 flex flex-col items-end">
              <h1 className="font-bold text-white md:text-[20px] ">
                1208000 TRX
              </h1>
              <h1 className="font-bold text-white md:text-[15px] ">
                94 719 USD
              </h1>
            </div>
          </div>
          <div>
            <button className="rounded-3xl border border-[#9168bf] p-2 text-[10px] text-white sm:text-[18px]">
              2 <span className="sm:text-xl">&gt;</span>
            </button>
          </div>
        </div>
        <div className="sm:w-full">
          <div className="px-5 md:px-[50px] lg:px-5 xl:px-[50px]">
            <div className="flex justify-around sm:justify-center sm:gap-x-[155px] xl:gap-x-[210px]">
              <div className="h-[18px] w-2 rotate-[30deg] transform border-l  border-dashed border-purple-500 sm:h-[70px]"></div>
              <div className=" h-[15px] w-2 border-l   border-dashed border-purple-500  sm:h-[65px]"></div>
              <div className="mt-[-4px] h-[18px]  w-2 rotate-[-30deg] transform border-l   border-dashed border-purple-500 sm:h-[70px]"></div>
            </div>
            <div className="flex justify-around gap-x-[29px] xsm:gap-x-[20px] sm:mt-[-6px] sm:justify-center sm:gap-x-[125px] xl:gap-x-[168px]">
              <div className="flex flex-col items-center  ">
                <a
                  onClick={() => setIsActive(!isActive)}
                  className={` ${
                    isActive ? 'bg-[#9168bf]' : ''
                  } ml-[-5px] flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full border text-white sm:h-[70px] sm:w-[70px] xl:h-[80px] xl:w-[80px]`}
                >
                  2
                </a>
                <div className="  flex justify-center gap-x-[2px] sm:gap-x-[20px]  ">
                  <div className="h-[20px] w-2 rotate-[50deg] transform border-l border-dashed  border-purple-500 sm:mt-[-5px] sm:h-[60px]"></div>
                  <div className=" h-[9.5px] w-2 border-l   border-dashed border-purple-500 sm:h-[42px]"></div>
                  <div className="ml-[-2px] mt-[-5px] h-[20px] w-2 rotate-[-50deg] transform  border-l border-dashed border-purple-500  sm:ml-[-3px] sm:mt-[-10px] sm:h-[60px]"></div>
                </div>
              </div>
              <div className="flex flex-col items-center  ">
                <a className="ml-[-5px] flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full border text-white sm:h-[70px] sm:w-[70px] xl:h-[80px] xl:w-[80px]">
                  3
                </a>
                <div className="  flex justify-center gap-x-[2px] sm:gap-x-[20px]  ">
                  <div className="h-[20px] w-2 rotate-[50deg] transform border-l border-dashed  border-purple-500 sm:mt-[-5px] sm:h-[60px]"></div>
                  <div className=" h-[9.5px] w-2 border-l   border-dashed border-purple-500 sm:h-[42px]"></div>
                  <div className="ml-[-2px] mt-[-5px] h-[20px] w-2 rotate-[-50deg] transform  border-l border-dashed border-purple-500  sm:ml-[-3px] sm:mt-[-10px] sm:h-[60px]"></div>
                </div>
              </div>
              <div className="flex flex-col items-center  ">
                <a className="ml-[-5px] flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full border text-white sm:h-[70px] sm:w-[70px] xl:h-[80px] xl:w-[80px]">
                  5
                </a>
                <div className="  flex justify-center gap-x-[2px] sm:gap-x-[20px]  ">
                  <div className="h-[20px] w-2 rotate-[50deg] transform border-l border-dashed  border-purple-500 sm:mt-[-5px] sm:h-[60px]"></div>
                  <div className=" h-[9.5px] w-2 border-l   border-dashed border-purple-500 sm:h-[42px]"></div>
                  <div className="ml-[-2px] mt-[-5px] h-[20px] w-2 rotate-[-50deg] transform  border-l border-dashed border-purple-500  sm:ml-[-3px] sm:mt-[-10px] sm:h-[60px]"></div>
                </div>
              </div>
            </div>

            <div className="flex justify-around gap-x-[21px] sm:justify-center sm:gap-x-[32px] xl:gap-x-[85px] ">
              <div className="mt-[-10px] flex gap-x-2 sm:mt-[-12px] sm:gap-x-3">
                <a className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer rounded-full border sm:h-[50px] sm:w-[50px] "></a>
                <a className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer rounded-full border sm:h-[50px] sm:w-[50px] "></a>
                <a className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer rounded-full border sm:h-[50px] sm:w-[50px] "></a>
              </div>
              <div className="mt-[-10px] flex gap-x-2 sm:mt-[-12px] sm:gap-x-3">
                <a className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer rounded-full border sm:h-[50px] sm:w-[50px] "></a>
                <a className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer rounded-full border sm:h-[50px] sm:w-[50px] "></a>
                <a className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer rounded-full border sm:h-[50px] sm:w-[50px] "></a>
              </div>
              <div className="mt-[-10px] flex gap-x-2 sm:mt-[-12px] sm:gap-x-3">
                <a className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer rounded-full border sm:h-[50px] sm:w-[50px] "></a>
                <a className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer rounded-full border sm:h-[50px] sm:w-[50px] "></a>
                <a className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer rounded-full border sm:h-[50px] sm:w-[50px] "></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
