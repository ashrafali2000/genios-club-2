import PopOver from "@/components/popover";
import { GeniosClubAbi, GeniosClubAddress } from "@/lib/constant";
import { useContract, useContractRead } from "@thirdweb-dev/react";
import React from "react";

const RefFirstLevelCircle = ({
  RefFirstLevel,
  MatrixLevel,
}: {
  RefFirstLevel: any;
  MatrixLevel: any;
}) => {
  return (
    <>
      <div className="flex justify-around">
        {RefFirstLevel && (
          <>
            {RefFirstLevel[0] !== undefined ? (
              <div className="flex flex-col items-center  ">
                <PopOver userAddress={RefFirstLevel[0]} />
                <div className="  flex justify-center gap-x-[2px] mt-[-4px]">
                  <div className=" h-[20px] w-2 rotate-[50deg] transform border-l border-dashed border-purple-500"></div>
                  <div className="  h-[10px] w-2 border-l border-dashed border-purple-500"></div>
                  <div className="ml-[-2px] mt-[-5px] h-[20px] w-2 rotate-[-50deg] transform border-l border-dashed border-purple-500"></div>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center  ">
                <a className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer rounded-full  border "></a>
                <div className="  flex justify-center gap-x-[2px]  ">
                  <div className="h-[20px] w-2 rotate-[50deg] transform   border-l border-dashed border-purple-500"></div>
                  <div className="  h-[10px] w-2   border-l border-dashed border-purple-500"></div>
                  <div className="ml-[-2px] mt-[-5px] h-[20px] w-2 rotate-[-50deg] transform border-l border-dashed border-purple-500"></div>
                </div>
              </div>
            )}

            {RefFirstLevel[1] !== undefined ? (
              <div className="flex flex-col items-center  ">
                <PopOver userAddress={RefFirstLevel[1]} />

                <div className="  flex justify-center gap-x-[2px]  ">
                  <div className="h-[20px] w-2 rotate-[50deg] transform   border-l border-dashed border-purple-500"></div>
                  <div className="  h-[10px] w-2   border-l border-dashed border-purple-500"></div>
                  <div className="ml-[-2px] mt-[-5px] h-[20px] w-2 rotate-[-50deg] transform border-l border-dashed border-purple-500"></div>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center  ">
                <a className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer  rounded-full border"></a>
                <div className="  flex justify-center gap-x-[2px]  ">
                  <div className="h-[20px] w-2 rotate-[50deg] transform   border-l border-dashed border-purple-500"></div>
                  <div className="  h-[10px] w-2   border-l border-dashed border-purple-500"></div>
                  <div className="ml-[-2px] mt-[-5px] h-[20px] w-2 rotate-[-50deg] transform border-l border-dashed border-purple-500"></div>
                </div>
              </div>
            )}

            {RefFirstLevel[2] !== undefined ? (
              <div className="flex flex-col items-center  ">
                <PopOver userAddress={RefFirstLevel[2]} />

                <div className="  flex justify-center gap-x-[2px]  ">
                  <div className="h-[20px] w-2 rotate-[50deg] transform   border-l border-dashed border-purple-500"></div>
                  <div className="  h-[10px] w-2   border-l border-dashed border-purple-500"></div>
                  <div className="ml-[-2px] mt-[-5px] h-[20px] w-2 rotate-[-50deg] transform border-l border-dashed border-purple-500"></div>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center  ">
                <a className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer  rounded-full border"></a>
                <div className="  flex justify-center gap-x-[2px]  ">
                  <div className="h-[20px] w-2 rotate-[50deg] transform   border-l border-dashed border-purple-500"></div>
                  <div className="  h-[10px] w-2   border-l border-dashed border-purple-500"></div>
                  <div className="ml-[-2px] mt-[-5px] h-[20px] w-2 rotate-[-50deg] transform border-l border-dashed border-purple-500"></div>
                </div>
              </div>
            )}
          </>
        )}
      </div>

      <div className="flex justify-around">
        <RefFirstLevelCircle2
          address={RefFirstLevel[0]}
          MatrixLevel={MatrixLevel}
        />
        <RefFirstLevelCircle2
          address={RefFirstLevel[1]}
          MatrixLevel={MatrixLevel}
        />
        <RefFirstLevelCircle2
          address={RefFirstLevel[2]}
          MatrixLevel={MatrixLevel}
        />
      </div>
    </>
  );
};

const RefFirstLevelCircle2 = ({
  MatrixLevel,
  address,
}: {
  MatrixLevel: any;
  address: any;
}) => {
  const { contract: GeniosClubContract } = useContract(
    GeniosClubAddress,
    GeniosClubAbi
  );

  const { data: levelData } = useContractRead(
    GeniosClubContract,
    "usersG3X2Matrix",
    [address, Number(MatrixLevel)]
  );

  return (
    <div className="mt-[-6px] flex gap-x-2">
      {levelData?.FirstLevelRefs[0] ? (
        <PopOver userAddress={levelData?.FirstLevelRefs[0]} />
      ) : (
        <a className="ml-[-5px] h-[21px] w-[21px] cursor-pointer rounded-full border"></a>
      )}

      {levelData?.FirstLevelRefs[1] ? (
        <PopOver userAddress={levelData?.FirstLevelRefs[1]} />
      ) : (
        <a className="ml-[-5px] h-[21px] w-[21px] cursor-pointer rounded-full border"></a>
      )}

      {levelData?.FirstLevelRefs[2] ? (
        <PopOver userAddress={levelData?.FirstLevelRefs[2]} />
      ) : (
        <a className="ml-[-5px] h-[21px] w-[21px] cursor-pointer rounded-full border"></a>
      )}
    </div>
  );
};

export default RefFirstLevelCircle;
