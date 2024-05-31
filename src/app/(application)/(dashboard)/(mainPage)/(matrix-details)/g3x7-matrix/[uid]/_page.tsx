"use client";

import { useAddress, useContract, useContractRead } from "@thirdweb-dev/react";
import { UseFormatNumber } from "@/lib/utils/useEthers";
import { GeniosClubAddress, GeniosClubAbi } from "@/lib/constant";
import { useSearchParams } from "next/navigation";
import UserId from "@/lib/utils/userId";
import Link from "next/link";

const data: Array<any> = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 3, 6, 9, 12, 15, 18, 21, 24],
];

const Page = ({ params }: any) => {
  const searchParams: any = useSearchParams();
  const lev = searchParams.get("lev");
  const idx = searchParams.get("idx");

  const firstLine = lev ? Number(lev) + 1 : 1;
  const secondLine = lev ? Number(lev) + 2 : 2;

  const firstIdx = idx ? Number(idx) * 3 - 2 : 0;
  const secondIdx = idx ? Number(idx) * 9 - 8 : 0;

  const address = useAddress();
  const { contract: GeniosClubContract } = useContract(
    GeniosClubAddress,
    GeniosClubAbi
  );
  const { data: user } = useContractRead(GeniosClubContract, "Users", [
    address,
  ]);

  const { data: levelData, isLoading } = useContractRead(
    GeniosClubContract,
    "usersG3X7Matrix",
    [address, Number(params.id)]
  );

  const team =
    UseFormatNumber(levelData?.ReinvestCount) * 12 +
    levelData?.FirstLevelRefs.length +
    levelData?.SecondLevelRefs.length;

  const nextNumber = Number(params.id) + 1 === 9 ? 1 : Number(params.id) + 1;
  const previousNumber =
    Number(params.id) - 1 === 0 ? 8 : Number(params.id) - 1;

  if (isLoading) return <>loding</>;
  if (!address) return <>address not found</>;
  if (!levelData) return <>levelData not found</>;

  return (
    <div className="z-10  mt-10 w-full lg:ml-10  lg:mt-0">
      <div className="relative rounded-[9px] border-none bg-[#2c0219] p-3 text-center font-san sm:p-6 sm:py-16">
        <h1 className="mb-10 text-[20px] font-medium text-[#9168bf]">
          G3X5 Matrix
        </h1>
        {/* <h1 className="mb-10 text-[20px] font-medium text-[#9168bf]">
          team icon {team}
        </h1>
        <h1 className="mb-10 text-[20px] font-medium text-[#9168bf]">
          Reinvest icon {UseFormatNumber(levelData?.ReinvestCount)}
        </h1> */}

        {!lev && !idx ? (
          <>
            <h1 className="mx-auto mb-[20px] flex h-[80px] w-[200px] items-center justify-center rounded-lg border-2 border-[#ae7ddd] bg-[#1e1c2f] pl-[8px] pr-[8px] text-3xl font-bold text-[#ae7ddd] sm:w-[340px] xl:w-[440px]">
              Upline
            </h1>
            <div className="flex items-center text-white">
              <Link
                href={`/g3x7-matrix/${previousNumber}`}
                className="rounded-3xl border border-[#9168bf] p-2 text-[10px] text-white sm:text-[18px]"
              >
                <span className="sm:text-xl">&lt;</span> {previousNumber}
              </Link>

              <div className="z-10 mx-auto w-[70%] rounded-lg bg-[#9168bf] p-5 sm:w-[340px] xl:w-[440px]">
                <div className="flex justify-between">
                  <h1 className="text-white md:text-[25px]">{params.id}</h1>
                  <a href="#" className="font-bold text-white md:text-[25px]">
                    ID {UseFormatNumber(user?.Id)}
                  </a>
                </div>
                <div className="mt-3 flex flex-col items-end">
                  <h1 className="font-bold text-white md:text-[20px]">
                    94 719 Dai
                  </h1>
                </div>
              </div>

              <Link
                href={`/g3x7-matrix/${nextNumber}`}
                className="rounded-3xl border border-[#9168bf] p-2 text-[10px] text-white sm:text-[18px]"
              >
                {nextNumber} <span className="sm:text-xl">&gt;</span>
              </Link>
            </div>
          </>
        ) : (
          <Link
            href={`/g3x7-matrix/${params.id}`}
            className="mx-auto mb-[20px] flex h-[80px] w-[200px] items-center justify-center rounded-lg border-2 border-[#ae7ddd] bg-[#1e1c2f] pl-[8px] pr-[8px] text-3xl font-bold text-[#ae7ddd] sm:w-[340px] xl:w-[440px]"
          >
            reset
          </Link>
        )}

        <div className="rounded-lg sm:w-full">
          <div className="px-1 xsmm:px-5 md:px-[50px] lg:px-5 ">
            {lev && idx ? (
              <div className="grid items-center justify-center">
                <div className="ml-[-5px] flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full border bg-[#9168bf] text-white sm:h-[70px] sm:w-[70px] xl:h-[80px] xl:w-[80px]">
                  <UserId userAddress={levelData[lev][idx]} />
                </div>
              </div>
            ) : null}

            <div className="flex justify-around sm:justify-center sm:gap-x-[155px] xl:gap-x-[210px]">
              <div className="h-[18px] w-2 rotate-[30deg] transform border-l  border-dashed border-purple-500 sm:h-[70px]"></div>
              <div className=" h-[15px] w-2 border-l border-dashed border-purple-500  sm:h-[65px]"></div>
              <div className="mt-[-4px] h-[18px] w-2 rotate-[-30deg] transform border-l border-dashed border-purple-500 sm:h-[70px]"></div>
            </div>

            {lev && idx ? (
              <>
                <div className="relative flex justify-around gap-x-[29px] xsm:gap-x-[20px] sm:mt-[-6px] sm:justify-center sm:gap-x-[125px] xl:gap-x-[168px]">
                  {levelData[firstLine][
                    data[firstLine - 1][0] + Number(idx)
                  ] !== undefined ? (
                    <div className="flex flex-col items-center  ">
                      <Link
                        href={`/g3x7-matrix/${params.id}?lev=${firstLine}&idx=${
                          data[firstLine - 1][0] + Number(idx)
                        }`}
                        className="ml-[-5px] flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full border bg-[#9168bf] text-white sm:h-[70px] sm:w-[70px] xl:h-[80px] xl:w-[80px]"
                      >
                        <UserId
                          userAddress={
                            levelData[firstLine][
                              data[firstLine - 1][0] + Number(idx)
                            ]
                          }
                        />
                      </Link>
                      <div className="flex justify-center gap-x-[2px] sm:gap-x-[20px]  ">
                        <div className="h-[20px] w-2 rotate-[50deg] transform border-l border-dashed border-purple-500 sm:mt-[-5px] sm:h-[60px]"></div>
                        <div className=" h-[9.5px] w-2 border-l border-dashed border-purple-500 sm:h-[42px]"></div>
                        <div className="ml-[-2px] mt-[-5px] h-[20px] w-2 rotate-[-50deg] transform border-l border-dashed border-purple-500 sm:ml-[-3px] sm:mt-[-10px] sm:h-[60px]"></div>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center">
                      <a className="ml-[-5px] flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full border text-white sm:h-[70px] sm:w-[70px] xl:h-[80px] xl:w-[80px]"></a>
                      <div className="flex justify-center gap-x-[2px] sm:gap-x-[20px]">
                        <div className="h-[20px] w-2 rotate-[50deg] transform border-l border-dashed border-purple-500 sm:mt-[-5px] sm:h-[60px]"></div>
                        <div className=" h-[9.5px] w-2 border-l border-dashed border-purple-500 sm:h-[42px]"></div>
                        <div className="ml-[-2px] mt-[-5px] h-[20px] w-2 rotate-[-50deg] transform border-l border-dashed border-purple-500  sm:ml-[-3px] sm:mt-[-10px] sm:h-[60px]"></div>
                      </div>
                    </div>
                  )}

                  {levelData[firstLine][
                    data[firstLine - 1][1] + Number(idx)
                  ] !== undefined ? (
                    <div className="flex flex-col items-center  ">
                      <Link
                        href={`/g3x7-matrix/${params.id}?lev=${firstLine}&idx=${
                          data[firstLine - 1][1] + Number(idx)
                        }`}
                        className="ml-[-5px] flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full border bg-[#9168bf] text-white sm:h-[70px] sm:w-[70px] xl:h-[80px] xl:w-[80px]"
                      >
                        <UserId
                          userAddress={
                            levelData[firstLine][
                              data[firstLine - 1][1] + Number(idx)
                            ]
                          }
                        />
                      </Link>
                      <div className="  flex justify-center gap-x-[2px] sm:gap-x-[20px]  ">
                        <div className="h-[20px] w-2 rotate-[50deg] transform border-l border-dashed  border-purple-500 sm:mt-[-5px] sm:h-[60px]"></div>
                        <div className=" h-[9.5px] w-2 border-l   border-dashed border-purple-500 sm:h-[42px]"></div>
                        <div className="ml-[-2px] mt-[-5px] h-[20px] w-2 rotate-[-50deg] transform  border-l border-dashed border-purple-500  sm:ml-[-3px] sm:mt-[-10px] sm:h-[60px]"></div>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center  ">
                      <a className="ml-[-5px] flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full border text-white sm:h-[70px] sm:w-[70px] xl:h-[80px] xl:w-[80px]"></a>
                      <div className="  flex justify-center gap-x-[2px] sm:gap-x-[20px]  ">
                        <div className="h-[20px] w-2 rotate-[50deg] transform border-l border-dashed  border-purple-500 sm:mt-[-5px] sm:h-[60px]"></div>
                        <div className=" h-[9.5px] w-2 border-l   border-dashed border-purple-500 sm:h-[42px]"></div>
                        <div className="ml-[-2px] mt-[-5px] h-[20px] w-2 rotate-[-50deg] transform  border-l border-dashed border-purple-500  sm:ml-[-3px] sm:mt-[-10px] sm:h-[60px]"></div>
                      </div>
                    </div>
                  )}

                  {levelData[firstLine][
                    data[firstLine - 1][2] + Number(idx)
                  ] !== undefined ? (
                    <div className="flex flex-col items-center  ">
                      <Link
                        href={`/g3x7-matrix/${params.id}?lev=${firstLine}&idx=${
                          data[firstLine - 1][2] + Number(idx)
                        }`}
                        className="ml-[-5px] flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full border bg-[#9168bf] text-white sm:h-[70px] sm:w-[70px] xl:h-[80px] xl:w-[80px]"
                      >
                        <UserId
                          userAddress={
                            levelData[firstLine][
                              data[firstLine - 1][2] + Number(idx)
                            ]
                          }
                        />
                      </Link>
                      <div className="  flex justify-center gap-x-[2px] sm:gap-x-[20px]  ">
                        <div className="h-[20px] w-2 rotate-[50deg] transform border-l border-dashed  border-purple-500 sm:mt-[-5px] sm:h-[60px]"></div>
                        <div className=" h-[9.5px] w-2 border-l   border-dashed border-purple-500 sm:h-[42px]"></div>
                        <div className="ml-[-2px] mt-[-5px] h-[20px] w-2 rotate-[-50deg] transform  border-l border-dashed border-purple-500  sm:ml-[-3px] sm:mt-[-10px] sm:h-[60px]"></div>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center  ">
                      <a className="ml-[-5px] flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full border text-white sm:h-[70px] sm:w-[70px] xl:h-[80px] xl:w-[80px]"></a>
                      <div className="  flex justify-center gap-x-[2px] sm:gap-x-[20px]  ">
                        <div className="h-[20px] w-2 rotate-[50deg] transform border-l border-dashed  border-purple-500 sm:mt-[-5px] sm:h-[60px]"></div>
                        <div className=" h-[9.5px] w-2 border-l   border-dashed border-purple-500 sm:h-[42px]"></div>
                        <div className="ml-[-2px] mt-[-5px] h-[20px] w-2 rotate-[-50deg] transform  border-l border-dashed border-purple-500  sm:ml-[-3px] sm:mt-[-10px] sm:h-[60px]"></div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex justify-around gap-x-[21px] sm:justify-center sm:gap-x-[32px] xl:gap-x-[85px] ">
                  <div className="mt-[-10px] flex gap-x-2 sm:mt-[-12px] sm:gap-x-3">
                    {levelData[secondLine][
                      data[secondLine - 1][0] + Number(idx)
                    ] !== undefined ? (
                      <Link
                        href={`/g3x7-matrix/${params.id}?lev=${secondLine}&idx=${secondIdx}`}
                        className="ml-[-5px] h-[21px] w-[21px] cursor-pointer rounded-full border bg-purple-500 sm:h-[50px] sm:w-[50px] "
                      >
                        <UserId
                          userAddress={
                            levelData[secondLine][
                              data[secondLine - 1][0] + Number(idx)
                            ]
                          }
                        />
                      </Link>
                    ) : (
                      <a className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer rounded-full border text-white sm:h-[50px] sm:w-[50px] ">
                        {data[secondLine - 1][0] + Number(idx)}
                      </a>
                    )}

                    {levelData[secondLine][
                      data[secondLine - 1][1] + Number(idx)
                    ] !== undefined ? (
                      <Link
                        href={`/g3x7-matrix/${
                          params.id
                        }?lev=${secondLine}&idx=${secondIdx + 3}`}
                        className="ml-[-5px] h-[21px] w-[21px] cursor-pointer rounded-full border bg-purple-500 sm:h-[50px] sm:w-[50px] "
                      >
                        <UserId
                          userAddress={
                            levelData[secondLine][
                              data[secondLine - 1][1] + Number(idx)
                            ]
                          }
                        />
                      </Link>
                    ) : (
                      <a className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer rounded-full border text-white sm:h-[50px] sm:w-[50px] ">
                        {data[secondLine - 1][1] + Number(idx)}
                      </a>
                    )}

                    {levelData[secondLine][
                      data[secondLine - 1][2] + Number(idx)
                    ] !== undefined ? (
                      <Link
                        href={`/g3x7-matrix/${
                          params.id
                        }?lev=${secondLine}&idx=${secondIdx + 6}`}
                        className="ml-[-5px] h-[21px] w-[21px] cursor-pointer rounded-full border bg-purple-500 sm:h-[50px] sm:w-[50px] "
                      >
                        <UserId
                          userAddress={
                            levelData[secondLine][
                              data[secondLine - 1][2] + Number(idx)
                            ]
                          }
                        />
                      </Link>
                    ) : (
                      <a className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer rounded-full border text-white sm:h-[50px] sm:w-[50px] ">
                        {data[secondLine - 1][2] + Number(idx)}
                      </a>
                    )}
                  </div>

                  <div className="mt-[-10px] flex gap-x-2 sm:mt-[-12px] sm:gap-x-3">
                    {levelData[secondLine][
                      data[secondLine - 1][3] + Number(idx)
                    ] !== undefined ? (
                      <Link
                        href={`/g3x7-matrix/${
                          params.id
                        }?lev=${secondLine}&idx=${secondIdx + 1}`}
                        className="ml-[-5px] h-[21px] w-[21px] cursor-pointer rounded-full border bg-purple-500 sm:h-[50px] sm:w-[50px] "
                      >
                        <UserId
                          userAddress={
                            levelData[secondLine][
                              data[secondLine - 1][3] + Number(idx)
                            ]
                          }
                        />
                      </Link>
                    ) : (
                      <a className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer rounded-full border text-white sm:h-[50px] sm:w-[50px] ">
                        {data[secondLine - 1][3] + Number(idx)}
                      </a>
                    )}

                    {levelData[secondLine][
                      data[secondLine - 1][4] + Number(idx)
                    ] !== undefined ? (
                      <Link
                        href={`/g3x7-matrix/${
                          params.id
                        }?lev=${secondLine}&idx=${secondIdx + 4}`}
                        className="ml-[-5px] h-[21px] w-[21px] cursor-pointer rounded-full border bg-purple-500 sm:h-[50px] sm:w-[50px] "
                      >
                        <UserId
                          userAddress={
                            levelData[secondLine][
                              data[secondLine - 1][4] + Number(idx)
                            ]
                          }
                        />
                      </Link>
                    ) : (
                      <a className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer rounded-full border text-white sm:h-[50px] sm:w-[50px] ">
                        {data[secondLine - 1][4] + Number(idx)}
                      </a>
                    )}

                    {levelData[secondLine][
                      data[secondLine - 1][5] + Number(idx)
                    ] !== undefined ? (
                      <Link
                        href={`/g3x7-matrix/${
                          params.id
                        }?lev=${secondLine}&idx=${secondIdx + 7}`}
                        className="ml-[-5px] h-[21px] w-[21px] cursor-pointer rounded-full border bg-purple-500 sm:h-[50px] sm:w-[50px] "
                      >
                        <UserId
                          userAddress={
                            levelData[secondLine][
                              data[secondLine - 1][5] + Number(idx)
                            ]
                          }
                        />
                      </Link>
                    ) : (
                      <a className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer rounded-full border text-white sm:h-[50px] sm:w-[50px] ">
                        {data[secondLine - 1][5] + Number(idx)}
                      </a>
                    )}
                  </div>

                  <div className="mt-[-10px] flex gap-x-2 sm:mt-[-12px] sm:gap-x-3">
                    {levelData[secondLine][
                      data[secondLine - 1][6] + Number(idx)
                    ] !== undefined ? (
                      <Link
                        href={`/g3x7-matrix/${
                          params.id
                        }?lev=${secondLine}&idx=${secondIdx + 2}`}
                        className="ml-[-5px] h-[21px] w-[21px] cursor-pointer rounded-full border bg-purple-500 sm:h-[50px] sm:w-[50px] "
                      >
                        <UserId
                          userAddress={
                            levelData[secondLine][
                              data[secondLine - 1][6] + Number(idx)
                            ]
                          }
                        />
                      </Link>
                    ) : (
                      <a className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer rounded-full border text-white sm:h-[50px] sm:w-[50px] ">
                        {data[secondLine - 1][6] + Number(idx)}
                      </a>
                    )}

                    {levelData[secondLine][
                      data[secondLine - 1][7] + Number(idx)
                    ] !== undefined ? (
                      <Link
                        href={`/g3x7-matrix/${
                          params.id
                        }?lev=${secondLine}&idx=${secondIdx + 5}`}
                        className="ml-[-5px] h-[21px] w-[21px] cursor-pointer rounded-full border bg-purple-500 sm:h-[50px] sm:w-[50px] "
                      >
                        <UserId
                          userAddress={
                            levelData[secondLine][
                              data[secondLine - 1][7] + Number(idx)
                            ]
                          }
                        />
                      </Link>
                    ) : (
                      <a className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer rounded-full border text-white sm:h-[50px] sm:w-[50px] ">
                        {data[secondLine - 1][7] + Number(idx)}
                      </a>
                    )}

                    {levelData[secondLine][
                      data[secondLine - 1][8] + Number(idx)
                    ] !== undefined ? (
                      <Link
                        href={`/g3x7-matrix/${
                          params.id
                        }?lev=${secondLine}&idx=${secondIdx + 8}`}
                        className="ml-[-5px] h-[21px] w-[21px] cursor-pointer rounded-full border bg-purple-500 sm:h-[50px] sm:w-[50px] "
                      >
                        <UserId
                          userAddress={
                            levelData[secondLine][
                              data[secondLine - 1][8] + Number(idx)
                            ]
                          }
                        />
                      </Link>
                    ) : (
                      <a className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer rounded-full border text-white sm:h-[50px] sm:w-[50px] ">
                        {data[secondLine - 1][8] + Number(idx)}
                      </a>
                    )}
                  </div>
                </div>
              </>
            ) : (
              <div className="relative flex justify-around gap-x-[29px] xsm:gap-x-[20px] sm:mt-[-6px] sm:justify-center sm:gap-x-[125px] xl:gap-x-[168px]">
                {levelData[firstLine][0] !== undefined ? (
                  <div className="flex flex-col items-center  ">
                    <Link
                      href={`/g3x7-matrix/${
                        params.id
                      }?lev=${firstLine}&idx=${0}`}
                      className="ml-[-5px] flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full border bg-[#9168bf] text-white sm:h-[70px] sm:w-[70px] xl:h-[80px] xl:w-[80px]"
                    >
                      <UserId userAddress={levelData[firstLine][0]} />
                    </Link>
                    <div className="flex justify-center gap-x-[2px] sm:gap-x-[20px]  ">
                      <div className="h-[20px] w-2 rotate-[50deg] transform border-l border-dashed border-purple-500 sm:mt-[-5px] sm:h-[60px]"></div>
                      <div className=" h-[9.5px] w-2 border-l border-dashed border-purple-500 sm:h-[42px]"></div>
                      <div className="ml-[-2px] mt-[-5px] h-[20px] w-2 rotate-[-50deg] transform border-l border-dashed border-purple-500 sm:ml-[-3px] sm:mt-[-10px] sm:h-[60px]"></div>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center">
                    <a className="ml-[-5px] flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full border text-white sm:h-[70px] sm:w-[70px] xl:h-[80px] xl:w-[80px]"></a>
                    <div className="flex justify-center gap-x-[2px] sm:gap-x-[20px]">
                      <div className="h-[20px] w-2 rotate-[50deg] transform border-l border-dashed border-purple-500 sm:mt-[-5px] sm:h-[60px]"></div>
                      <div className=" h-[9.5px] w-2 border-l border-dashed border-purple-500 sm:h-[42px]"></div>
                      <div className="ml-[-2px] mt-[-5px] h-[20px] w-2 rotate-[-50deg] transform border-l border-dashed border-purple-500  sm:ml-[-3px] sm:mt-[-10px] sm:h-[60px]"></div>
                    </div>
                  </div>
                )}

                {levelData[firstLine][1] !== undefined ? (
                  <div className="flex flex-col items-center  ">
                    <Link
                      href={`/g3x7-matrix/${
                        params.id
                      }?lev=${firstLine}&idx=${1}`}
                      className="ml-[-5px] flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full border bg-[#9168bf] text-white sm:h-[70px] sm:w-[70px] xl:h-[80px] xl:w-[80px]"
                    >
                      <UserId userAddress={levelData[firstLine][1]} />
                    </Link>
                    <div className="  flex justify-center gap-x-[2px] sm:gap-x-[20px]  ">
                      <div className="h-[20px] w-2 rotate-[50deg] transform border-l border-dashed  border-purple-500 sm:mt-[-5px] sm:h-[60px]"></div>
                      <div className=" h-[9.5px] w-2 border-l   border-dashed border-purple-500 sm:h-[42px]"></div>
                      <div className="ml-[-2px] mt-[-5px] h-[20px] w-2 rotate-[-50deg] transform  border-l border-dashed border-purple-500  sm:ml-[-3px] sm:mt-[-10px] sm:h-[60px]"></div>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center  ">
                    <a className="ml-[-5px] flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full border text-white sm:h-[70px] sm:w-[70px] xl:h-[80px] xl:w-[80px]"></a>
                    <div className="  flex justify-center gap-x-[2px] sm:gap-x-[20px]  ">
                      <div className="h-[20px] w-2 rotate-[50deg] transform border-l border-dashed  border-purple-500 sm:mt-[-5px] sm:h-[60px]"></div>
                      <div className=" h-[9.5px] w-2 border-l   border-dashed border-purple-500 sm:h-[42px]"></div>
                      <div className="ml-[-2px] mt-[-5px] h-[20px] w-2 rotate-[-50deg] transform  border-l border-dashed border-purple-500  sm:ml-[-3px] sm:mt-[-10px] sm:h-[60px]"></div>
                    </div>
                  </div>
                )}

                {levelData[firstLine][2] !== undefined ? (
                  <div className="flex flex-col items-center  ">
                    <Link
                      href={`/g3x7-matrix/${
                        params.id
                      }?lev=${firstLine}&idx=${2}`}
                      className="ml-[-5px] flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full border bg-[#9168bf] text-white sm:h-[70px] sm:w-[70px] xl:h-[80px] xl:w-[80px]"
                    >
                      <UserId userAddress={levelData[firstLine][2]} />
                    </Link>
                    <div className="  flex justify-center gap-x-[2px] sm:gap-x-[20px]  ">
                      <div className="h-[20px] w-2 rotate-[50deg] transform border-l border-dashed  border-purple-500 sm:mt-[-5px] sm:h-[60px]"></div>
                      <div className=" h-[9.5px] w-2 border-l   border-dashed border-purple-500 sm:h-[42px]"></div>
                      <div className="ml-[-2px] mt-[-5px] h-[20px] w-2 rotate-[-50deg] transform  border-l border-dashed border-purple-500  sm:ml-[-3px] sm:mt-[-10px] sm:h-[60px]"></div>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center  ">
                    <a className="ml-[-5px] flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full border text-white sm:h-[70px] sm:w-[70px] xl:h-[80px] xl:w-[80px]"></a>
                    <div className="  flex justify-center gap-x-[2px] sm:gap-x-[20px]  ">
                      <div className="h-[20px] w-2 rotate-[50deg] transform border-l border-dashed  border-purple-500 sm:mt-[-5px] sm:h-[60px]"></div>
                      <div className=" h-[9.5px] w-2 border-l   border-dashed border-purple-500 sm:h-[42px]"></div>
                      <div className="ml-[-2px] mt-[-5px] h-[20px] w-2 rotate-[-50deg] transform  border-l border-dashed border-purple-500  sm:ml-[-3px] sm:mt-[-10px] sm:h-[60px]"></div>
                    </div>
                  </div>
                )}
              </div>
            )}

            <div className="flex justify-around gap-x-[21px] sm:justify-center sm:gap-x-[32px] xl:gap-x-[85px] ">
              <div className="mt-[-10px] flex gap-x-2 sm:mt-[-12px] sm:gap-x-3">
                {levelData[secondLine][secondIdx] !== undefined ? (
                  <Link
                    href={`/g3x7-matrix/${params.id}?lev=${secondLine}&idx=${secondIdx}`}
                    className="ml-[-5px] h-[21px] w-[21px] cursor-pointer rounded-full border bg-purple-500 sm:h-[50px] sm:w-[50px] "
                  >
                    <UserId userAddress={levelData[secondLine][secondIdx]} />
                  </Link>
                ) : (
                  <a className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer rounded-full border sm:h-[50px] sm:w-[50px] "></a>
                )}

                {levelData[secondLine][secondIdx + 3] !== undefined ? (
                  <Link
                    href={`/g3x7-matrix/${params.id}?lev=${secondLine}&idx=${
                      secondIdx + 3
                    }`}
                    className="ml-[-5px] h-[21px] w-[21px] cursor-pointer rounded-full border bg-purple-500 sm:h-[50px] sm:w-[50px] "
                  >
                    <UserId
                      userAddress={levelData[secondLine][secondIdx + 3]}
                    />
                  </Link>
                ) : (
                  <a className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer rounded-full border sm:h-[50px] sm:w-[50px] "></a>
                )}

                {levelData[secondLine][secondIdx + 6] !== undefined ? (
                  <Link
                    href={`/g3x7-matrix/${params.id}?lev=${secondLine}&idx=${
                      secondIdx + 6
                    }`}
                    className="ml-[-5px] h-[21px] w-[21px] cursor-pointer rounded-full border bg-purple-500 sm:h-[50px] sm:w-[50px] "
                  >
                    <UserId
                      userAddress={levelData[secondLine][secondIdx + 6]}
                    />
                  </Link>
                ) : (
                  <a className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer rounded-full border sm:h-[50px] sm:w-[50px] "></a>
                )}
              </div>

              <div className="mt-[-10px] flex gap-x-2 sm:mt-[-12px] sm:gap-x-3">
                {levelData[secondLine][secondIdx + 1] !== undefined ? (
                  <Link
                    href={`/g3x7-matrix/${params.id}?lev=${secondLine}&idx=${
                      secondIdx + 1
                    }`}
                    className="ml-[-5px] h-[21px] w-[21px] cursor-pointer rounded-full border bg-purple-500 sm:h-[50px] sm:w-[50px] "
                  >
                    <UserId
                      userAddress={levelData[secondLine][secondIdx + 1]}
                    />
                  </Link>
                ) : (
                  <a className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer rounded-full border sm:h-[50px] sm:w-[50px] "></a>
                )}

                {levelData[secondLine][secondIdx + 4] !== undefined ? (
                  <Link
                    href={`/g3x7-matrix/${params.id}?lev=${secondLine}&idx=${
                      secondIdx + 4
                    }`}
                    className="ml-[-5px] h-[21px] w-[21px] cursor-pointer rounded-full border bg-purple-500 sm:h-[50px] sm:w-[50px] "
                  >
                    <UserId
                      userAddress={levelData[secondLine][secondIdx + 4]}
                    />
                  </Link>
                ) : (
                  <a className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer rounded-full border sm:h-[50px] sm:w-[50px] "></a>
                )}

                {levelData[secondLine][secondIdx + 7] !== undefined ? (
                  <Link
                    href={`/g3x7-matrix/${params.id}?lev=${secondLine}&idx=${
                      secondIdx + 7
                    }`}
                    className="ml-[-5px] h-[21px] w-[21px] cursor-pointer rounded-full border bg-purple-500 sm:h-[50px] sm:w-[50px] "
                  >
                    <UserId
                      userAddress={levelData[secondLine][secondIdx + 7]}
                    />
                  </Link>
                ) : (
                  <a className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer rounded-full border sm:h-[50px] sm:w-[50px] "></a>
                )}
              </div>

              <div className="mt-[-10px] flex gap-x-2 sm:mt-[-12px] sm:gap-x-3">
                {levelData[secondLine][secondIdx + 2] !== undefined ? (
                  <Link
                    href={`/g3x7-matrix/${params.id}?lev=${secondLine}&idx=${
                      secondIdx + 2
                    }`}
                    className="ml-[-5px] h-[21px] w-[21px] cursor-pointer rounded-full border bg-purple-500 sm:h-[50px] sm:w-[50px] "
                  >
                    <UserId
                      userAddress={levelData[secondLine][secondIdx + 2]}
                    />
                  </Link>
                ) : (
                  <a className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer rounded-full border sm:h-[50px] sm:w-[50px] "></a>
                )}

                {levelData[secondLine][secondIdx + 5] !== undefined ? (
                  <Link
                    href={`/g3x7-matrix/${params.id}?lev=${secondLine}&idx=${
                      secondIdx + 5
                    }`}
                    className="ml-[-5px] h-[21px] w-[21px] cursor-pointer rounded-full border bg-purple-500 sm:h-[50px] sm:w-[50px] "
                  >
                    <UserId
                      userAddress={levelData[secondLine][secondIdx + 5]}
                    />
                  </Link>
                ) : (
                  <a className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer rounded-full border sm:h-[50px] sm:w-[50px] "></a>
                )}

                {levelData[secondLine][secondIdx + 8] !== undefined ? (
                  <Link
                    href={`/g3x7-matrix/${params.id}?lev=${secondLine}&idx=${
                      secondIdx + 8
                    }`}
                    className="ml-[-5px] h-[21px] w-[21px] cursor-pointer rounded-full border bg-purple-500 sm:h-[50px] sm:w-[50px] "
                  >
                    <UserId
                      userAddress={levelData[secondLine][secondIdx + 8]}
                    />
                  </Link>
                ) : (
                  <a className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer rounded-full border sm:h-[50px] sm:w-[50px] "></a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
