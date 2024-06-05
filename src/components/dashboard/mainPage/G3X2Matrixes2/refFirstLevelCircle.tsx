import PopOver2 from "@/components/popover2";
import PopOver3 from "@/components/popover3";
import { GeniosClubAbi2, GeniosClubAddress2 } from "@/lib/constant";
import { useContract, useContractRead } from "@thirdweb-dev/react";
import React from "react";

const RefFirstLevelCircle = ({
  RefFirstLevel,
  userAddress,
  MatrixLevel,
  position,
}: {
  RefFirstLevel: any[];
  MatrixLevel: any;
  userAddress: any;
  position: any[];
}) => {
  return (
    <>
      {parseInt(position[0].data) === 0 &&
      parseInt(position[1].data) === 0 &&
      parseInt(position[2].data) === 0 &&
      parseInt(position[3].data) === 0 ? (
        <div className="bg-purple-500 text-white px-4 py-3 rounded-2xl">
          No Active Data
        </div>
      ) : (
        <div>
          <div className="flex justify-between flex-wrap md:flex-nowrap">
            {RefFirstLevel && (
              <>
                {RefFirstLevel !== undefined ? (
                  <div className="flex flex-col items-center  ">
                    <PopOver2
                      RefFirstLevel={position[0].data}
                      userAddress={position[0].userAddress}
                    />
                    <div className="  flex justify-center gap-x-[2px] mt-[-4px]">
                      <div className=" h-[20px] w-2 rotate-[50deg] transform border-l border-dashed border-purple-500"></div>
                      <div className="  h-[15px] w-2 border-l border-dashed border-purple-500"></div>
                      <div className="ml-[-2px] mt-[-5px] h-[20px] w-2 rotate-[-40deg] transform border-l border-dashed border-purple-500"></div>
                      <div className="ml-[-2px] mt-[-5px] h-[20px] w-2 rotate-[-60deg] transform border-l border-dashed border-purple-500"></div>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center  ">
                    <a className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer rounded-full  border "></a>
                    <div className="  flex justify-center gap-x-[2px]  ">
                      <div className="h-[20px] w-2 rotate-[50deg] transform   border-l border-dashed border-purple-500"></div>
                      <div className="  h-[15px] w-2   border-l border-dashed border-purple-500"></div>
                      <div className="ml-[-2px] mt-[-5px] h-[20px] w-2 rotate-[-40deg] transform border-l border-dashed border-purple-500"></div>
                      <div className="ml-[-2px] mt-[-5px] h-[20px] w-2 rotate-[-60deg] transform border-l border-dashed border-purple-500"></div>
                    </div>
                  </div>
                )}

                {RefFirstLevel !== undefined ? (
                  <div className="flex flex-col items-center  ">
                    <PopOver2
                      RefFirstLevel={position[1].data}
                      userAddress={position[1].userAddress}
                    />

                    <div className="  flex justify-center gap-x-[2px]  ">
                      <div className="h-[20px] w-2 rotate-[50deg] transform   border-l border-dashed border-purple-500"></div>
                      <div className="  h-[15px] w-2   border-l border-dashed border-purple-500"></div>
                      <div className="ml-[-2px] mt-[-5px] h-[20px] w-2 rotate-[-40deg] transform border-l border-dashed border-purple-500"></div>
                      <div className="ml-[-2px] mt-[-5px] h-[20px] w-2 rotate-[-60deg] transform border-l border-dashed border-purple-500"></div>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center  ">
                    <a className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer  rounded-full border"></a>
                    <div className="  flex justify-center gap-x-[2px]  ">
                      <div className="h-[20px] w-2 rotate-[50deg] transform   border-l border-dashed border-purple-500"></div>
                      <div className="  h-[15px] w-2   border-l border-dashed border-purple-500"></div>
                      <div className="ml-[-2px] mt-[-5px] h-[20px] w-2 rotate-[-40deg] transform border-l border-dashed border-purple-500"></div>
                      <div className="ml-[-2px] mt-[-5px] h-[20px] w-2 rotate-[-60deg] transform border-l border-dashed border-purple-500"></div>
                    </div>
                  </div>
                )}

                {RefFirstLevel !== undefined ? (
                  <div className="flex flex-col items-center  ">
                    <PopOver2
                      RefFirstLevel={position[2].data}
                      userAddress={position[2].userAddress}
                    />

                    <div className="  flex justify-center gap-x-[2px]  ">
                      <div className="h-[20px] w-2 rotate-[50deg] transform   border-l border-dashed border-purple-500"></div>
                      <div className="  h-[15px] w-2   border-l border-dashed border-purple-500"></div>
                      <div className="ml-[-2px] mt-[-5px] h-[20px] w-2 rotate-[-40deg] transform border-l border-dashed border-purple-500"></div>
                      <div className="ml-[-2px] mt-[-5px] h-[20px] w-2 rotate-[-60deg] transform border-l border-dashed border-purple-500"></div>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center  ">
                    <a className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer  rounded-full border"></a>
                    <div className="  flex justify-center gap-x-[2px]  ">
                      <div className="h-[20px] w-2 rotate-[50deg] transform   border-l border-dashed border-purple-500"></div>
                      <div className="  h-[15px] w-2   border-l border-dashed border-purple-500"></div>
                      <div className="ml-[-2px] mt-[-5px] h-[20px] w-2 rotate-[-40deg] transform border-l border-dashed border-purple-500"></div>
                      <div className="ml-[-2px] mt-[-5px] h-[20px] w-2 rotate-[-60deg] transform border-l border-dashed border-purple-500"></div>
                    </div>
                  </div>
                )}
                {RefFirstLevel !== undefined ? (
                  <div className="flex flex-col items-center  ">
                    <PopOver2
                      RefFirstLevel={position[3].data}
                      userAddress={position[3].userAddress}
                    />

                    <div className="  flex justify-center gap-x-[2px]  ">
                      <div className="h-[20px] w-2 rotate-[50deg] transform   border-l border-dashed border-purple-500"></div>
                      <div className="  h-[15px] w-2   border-l border-dashed border-purple-500"></div>
                      <div className="ml-[-2px] mt-[-5px] h-[20px] w-2 rotate-[-40deg] transform border-l border-dashed border-purple-500"></div>
                      <div className="ml-[-2px] mt-[-5px] h-[20px] w-2 rotate-[-60deg] transform border-l border-dashed border-purple-500"></div>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center  ">
                    <a className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer  rounded-full border"></a>
                    <div className="  flex justify-center gap-x-[2px]  ">
                      <div className="h-[20px] w-2 rotate-[50deg] transform   border-l border-dashed border-purple-500"></div>
                      <div className="  h-[15px] w-2   border-l border-dashed border-purple-500"></div>
                      <div className="ml-[-2px] mt-[-5px] h-[20px] w-2 rotate-[-40deg] transform border-l border-dashed border-purple-500"></div>
                      <div className="ml-[-2px] mt-[-5px] h-[20px] w-2 rotate-[-60deg] transform border-l border-dashed border-purple-500"></div>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>

          <div className="flex justify-between gap-10  xl:gap-20 -ml-[60px] xl:-ml-[50px]">
            <div className="ml-5">
              <RefFirstLevelCircle2
                address={position.slice(4, 8)}
                position2={position.slice(4, 8)}
              />
            </div>
            <div className=" -ml-2 lg:-ml-5">
              <RefFirstLevelCircle2
                address={position.slice(8, 12)}
                position2={position.slice(8, 12)}
              />
            </div>
            <div className=" -ml-3">
              <RefFirstLevelCircle2
                address={position.slice(12, 16)}
                position2={position.slice(12, 16)}
              />
            </div>
            <div className="-ml-4 lg:-ml-3">
              <RefFirstLevelCircle2
                address={position.slice(16, 20)}
                position2={position.slice(16, 20)}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const RefFirstLevelCircle2 = ({
  position2,
  address,
}: {
  position2: any[];
  address: any;
}) => {
  return (
    <>
      <div className=" mt-[-6px] flex gap-x-4">
        <div className="flex flex-col gap-3">
          <div>
            {position2[0] ? (
              <div className="flex flex-col items-center">
                <PopOver2
                  userAddress={position2[0].userAddress}
                  RefFirstLevel={position2[0].data}
                />
              </div>
            ) : (
              <a className=" h-[21px] w-[21px] cursor-pointer rounded-full border"></a>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div>
            {position2[1] ? (
              <div className="flex flex-col items-center">
                <PopOver2
                  userAddress={position2[1].userAddress}
                  RefFirstLevel={position2[1].data}
                />
              </div>
            ) : (
              <a className=" h-[21px] w-[21px] cursor-pointer rounded-full border"></a>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <div>
            {position2[2] ? (
              <div className="flex flex-col items-center">
                <PopOver2
                  userAddress={position2[2].userAddress}
                  RefFirstLevel={position2[2].data}
                />
              </div>
            ) : (
              <a className=" h-[21px] w-[21px] cursor-pointer rounded-full border"></a>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div>
            {position2[3] ? (
              <div className="flex flex-col items-center">
                <PopOver2
                  userAddress={position2[3].userAddress}
                  RefFirstLevel={position2[3].data}
                />
              </div>
            ) : (
              <a className=" h-[21px] w-[21px] cursor-pointer rounded-full border"></a>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default RefFirstLevelCircle;
