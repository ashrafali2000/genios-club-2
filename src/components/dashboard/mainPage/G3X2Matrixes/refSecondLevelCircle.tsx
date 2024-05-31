import PopOver from "@/components/popover";
import React from "react";

const RefSecondLevelCircle = ({ RefSecondLevel }: any) => {
  return (
    <>
      {RefSecondLevel && (
        <>
          <div className="mt-[-6px] flex gap-x-2">
            {RefSecondLevel[0] ? (
              <PopOver userAddress={RefSecondLevel[0]} />
            ) : (
              <a className="ml-[-5px] h-[21px] w-[21px] cursor-pointer rounded-full border"></a>
            )}
            {RefSecondLevel[3] ? (
              <PopOver userAddress={RefSecondLevel[3]} />
            ) : (
              <a className="ml-[-5px] h-[21px] w-[21px] cursor-pointer rounded-full border"></a>
            )}
            {RefSecondLevel[6] ? (
              <PopOver userAddress={RefSecondLevel[6]} />
            ) : (
              <a className="ml-[-5px] h-[21px] w-[21px] cursor-pointer rounded-full border"></a>
            )}
          </div>

          <div className="mt-[-6px] flex gap-x-2">
            {RefSecondLevel[1] ? (
              <PopOver userAddress={RefSecondLevel[1]} />
            ) : (
              <a className="ml-[-5px] h-[21px] w-[21px] cursor-pointer rounded-full border"></a>
            )}
            {RefSecondLevel[4] ? (
              <PopOver userAddress={RefSecondLevel[4]} />
            ) : (
              <a className="ml-[-5px] h-[21px] w-[21px] cursor-pointer rounded-full border"></a>
            )}
            {RefSecondLevel[7] ? (
              <PopOver userAddress={RefSecondLevel[7]} />
            ) : (
              <a className="ml-[-5px] h-[21px] w-[21px] cursor-pointer rounded-full border"></a>
            )}
          </div>

          <div className="mt-[-6px] flex gap-x-2">
            {RefSecondLevel[2] ? (
              <PopOver userAddress={RefSecondLevel[2]} />
            ) : (
              <a className="ml-[-5px] h-[21px] w-[21px] cursor-pointer rounded-full border"></a>
            )}
            {RefSecondLevel[5] ? (
              <PopOver userAddress={RefSecondLevel[5]} />
            ) : (
              <a className="ml-[-5px] h-[21px] w-[21px] cursor-pointer rounded-full border"></a>
            )}
            {RefSecondLevel[8] ? (
              <PopOver userAddress={RefSecondLevel[8]} />
            ) : (
              <a className="ml-[-5px] h-[21px] w-[21px] cursor-pointer rounded-full border"></a>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default RefSecondLevelCircle;
