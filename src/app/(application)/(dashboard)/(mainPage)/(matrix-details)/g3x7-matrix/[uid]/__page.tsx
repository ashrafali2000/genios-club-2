"use client";
import { useAddress, useContract, useContractRead } from "@thirdweb-dev/react";
import { UseFormatEther, UseFormatNumber } from "@/lib/utils/useEthers";
import { GeniosClubAddress, GeniosClubAbi } from "@/lib/constant";
import UserId from "@/lib/utils/userId";
import Link from "next/link";
import TransactionTable from "@/components/dashboard/mainPage/G3X7Matrixes/matrixDetails/transactionTable";
import PopOver from "@/components/popover";
import Circle from "@/components/dashboard/mainPage/G3X7Matrixes/circle";
import axios from "axios";
import { useEffect, useState } from "react";

const Page = ({ params }: any) => {
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

  async function getData() {
    try {
      const response = await axios.get("api/matrix/view/0/U0");
      console.log("🚀 ~ file: page.tsx:32 ~ response:", response);
      // setLevelData()
    } catch (error) {
      console.log("seven level error", error);
    }
  }

  useEffect(() => {
    if (!params.id) return;

    (async () => {
      try {
        const response = await axios.get(`/api/matrix/view/0/U0`);
        const responseData = response.data;
        console.log("file: page.tsx:46  responseData:", responseData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    })();
  }, [params.id]);

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
    <div className="z-10  mt-10 lg:ml-10  lg:mt-0">
      <div className="relative rounded-[9px] border-none bg-[#2c0219] p-3 text-center font-san sm:p-6 sm:py-12">
        <h1 className="mb-10 text-[25px] font-medium text-[#9168bf]">
          Seven Level Click
          <button onClick={getData} className="text-white">
            Click TO Get
          </button>
        </h1>
        {/* <h1 className="mb-10 text-[20px] font-medium text-[#9168bf]">
          team icon {team}
        </h1>
        <h1 className="mb-10 text-[20px] font-medium text-[#9168bf]">
          Reinvest icon {UseFormatNumber(levelData?.ReinvestCount)}
        </h1> */}

        <h1 className="mx-auto mb-[20px] flex h-[80px] w-[200px] items-center justify-center rounded-lg border-2 border-[#ae7ddd] bg-[#1e1c2f] pl-[8px] pr-[8px] text-3xl font-bold text-[#ae7ddd] sm:w-[340px] xl:w-[440px]">
          1
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
              <h1 className="text-white md:text-[25px]">1</h1>
              <a href="#" className="font-bold text-white md:text-[25px]">
                ID {UseFormatNumber(user?.Id)}
              </a>
            </div>
            <div className="mt-3 flex flex-col items-end">
              <h1 className="font-bold text-white md:text-[20px]">11 DAI</h1>
            </div>
          </div>

          <Link
            href={`/g3x7-matrix/${nextNumber}`}
            className="rounded-3xl border border-[#9168bf] p-2 text-[10px] text-white sm:text-[18px]"
          >
            {nextNumber} <span className="sm:text-xl">&gt;</span>
          </Link>
        </div>

        <div className="sm:w-full">
          <div className="px-5 md:px-[50px] lg:px-5 xl:px-[50px]">
            <div className="w-full rounded-[9px] border-none bg-[#2c0219] px-2 pb-6 pt-4 text-center font-san">
              <div className="scrollable-div grid w-full overflow-x-auto scroll-smooth p-5">
                {/* =====================FIRST LEVEL============================= == 3 */}
                <div className="mt-4 flex justify-center gap-x-[148px]">
                  {levelData?.FirstLevelRefs[0] !== undefined ? (
                    <div className="flex min-h-[62px] min-w-[62px] cursor-pointer items-center justify-center rounded-full border bg-[#9168bf] text-white">
                      <UserId userAddress={levelData?.FirstLevelRefs[0]} />
                    </div>
                  ) : (
                    <div className="min-h-[62px] min-w-[62px] cursor-pointer rounded-full border" />
                  )}

                  {levelData?.FirstLevelRefs[1] !== undefined ? (
                    <div className="flex min-h-[62px] min-w-[62px] cursor-pointer items-center justify-center rounded-full border bg-[#9168bf] text-white">
                      <UserId userAddress={levelData?.FirstLevelRefs[1]} />
                    </div>
                  ) : (
                    <div className="min-h-[62px] min-w-[62px] cursor-pointer rounded-full border" />
                  )}

                  {levelData?.FirstLevelRefs[2] !== undefined ? (
                    <div className="flex min-h-[62px] min-w-[62px] cursor-pointer items-center justify-center rounded-full border bg-[#9168bf] text-white">
                      <UserId userAddress={levelData?.FirstLevelRefs[2]} />
                    </div>
                  ) : (
                    <div className="min-h-[62px] min-w-[62px] cursor-pointer rounded-full border" />
                  )}
                </div>

                {/*=====================SECOND LEVEL=============================== == 9*/}

                <div className="mt-4 flex justify-center gap-x-20">
                  <div className="flex justify-center gap-x-2">
                    {levelData?.SecondLevelRefs[0] !== undefined ? (
                      <div className="flex min-h-[38px] min-w-[38px] cursor-pointer items-center justify-center rounded-full border bg-[#9168bf] text-white">
                        <UserId userAddress={levelData?.SecondLevelRefs[0]} />
                      </div>
                    ) : (
                      <div className="min-h-[38px] min-w-[38px] cursor-pointer rounded-full border" />
                    )}

                    {levelData?.SecondLevelRefs[3] !== undefined ? (
                      <div className="flex min-h-[38px] min-w-[38px] cursor-pointer items-center justify-center rounded-full border bg-[#9168bf] text-white">
                        <UserId userAddress={levelData?.SecondLevelRefs[3]} />
                      </div>
                    ) : (
                      <div className="min-h-[38px] min-w-[38px] cursor-pointer rounded-full border" />
                    )}
                    {levelData?.SecondLevelRefs[6] !== undefined ? (
                      <div className="flex min-h-[38px] min-w-[38px] cursor-pointer items-center justify-center rounded-full border bg-[#9268bf] text-white">
                        <UserId userAddress={levelData?.SecondLevelRefs[6]} />
                      </div>
                    ) : (
                      <div className="min-h-[38px] min-w-[38px] cursor-pointer rounded-full border" />
                    )}
                  </div>
                  <div className="flex justify-center gap-x-2">
                    {levelData?.SecondLevelRefs[1] !== undefined ? (
                      <div className="flex min-h-[38px] min-w-[38px] cursor-pointer items-center justify-center rounded-full border bg-[#9168bf] text-white">
                        <UserId userAddress={levelData?.SecondLevelRefs[3]} />
                      </div>
                    ) : (
                      <div className="min-h-[38px] min-w-[38px] cursor-pointer rounded-full border" />
                    )}
                    {levelData?.SecondLevelRefs[4] !== undefined ? (
                      <div className="flex min-h-[38px] min-w-[38px] cursor-pointer items-center justify-center rounded-full border bg-[#9168bf] text-white">
                        <UserId userAddress={levelData?.SecondLevelRefs[4]} />
                      </div>
                    ) : (
                      <div className="min-h-[38px] min-w-[38px] cursor-pointer rounded-full border" />
                    )}
                    {levelData?.SecondLevelRefs[7] !== undefined ? (
                      <div className="flex min-h-[38px] min-w-[38px] cursor-pointer items-center justify-center rounded-full border bg-[#9168bf] text-white">
                        <UserId userAddress={levelData?.SecondLevelRefs[7]} />
                      </div>
                    ) : (
                      <div className="min-h-[38px] min-w-[38px] cursor-pointer rounded-full border" />
                    )}
                  </div>
                  <div className="flex justify-center gap-x-2">
                    {levelData?.SecondLevelRefs[2] !== undefined ? (
                      <div className="flex min-h-[38px] min-w-[38px] cursor-pointer items-center justify-center rounded-full border bg-[#9168bf] text-white">
                        <UserId userAddress={levelData?.SecondLevelRefs[2]} />
                      </div>
                    ) : (
                      <div className="min-h-[38px] min-w-[38px] cursor-pointer rounded-full border" />
                    )}
                    {levelData?.SecondLevelRefs[5] !== undefined ? (
                      <div className="flex min-h-[38px] min-w-[38px] cursor-pointer items-center justify-center rounded-full border bg-[#9168bf] text-white">
                        <UserId userAddress={levelData?.SecondLevelRefs[5]} />
                      </div>
                    ) : (
                      <div className="min-h-[38px] min-w-[38px] cursor-pointer rounded-full border" />
                    )}
                    {levelData?.SecondLevelRefs[8] !== undefined ? (
                      <div className="flex min-h-[38px] min-w-[38px] cursor-pointer items-center justify-center rounded-full border bg-[#9168bf] text-white">
                        <UserId userAddress={levelData?.SecondLevelRefs[8]} />
                      </div>
                    ) : (
                      <div className="min-h-[38px] min-w-[38px] cursor-pointer rounded-full border" />
                    )}
                  </div>
                </div>

                {/*=====================THIRD LEVEL============================== ==27*/}

                <div className="mt-4 flex justify-center gap-x-1">
                  <div className="flex justify-center gap-x-1">
                    <div className="flex justify-center gap-x-1">
                      {levelData?.ThirdLevelRefs[0] !== undefined ? (
                        <div className="flex h-[18px] w-[19px] cursor-pointer  justify-center rounded-full border bg-[#9168bf] text-white">
                          <PopOver
                            userAddress={levelData.ThirdLevelRefs[0]}
                            matrix={2}
                            size={19}
                          />
                        </div>
                      ) : (
                        <div className="h-[19px] w-[19px] cursor-pointer rounded-full border" />
                      )}

                      {levelData?.ThirdLevelRefs[9] !== undefined ? (
                        <div className="flex h-[19px] w-[19px] cursor-pointer justify-center rounded-full border bg-[#9168bf] text-white">
                          <PopOver
                            userAddress={levelData.ThirdLevelRefs[9]}
                            matrix={2}
                            size={19}
                          />
                        </div>
                      ) : (
                        <div className="h-[19px] w-[19px] cursor-pointer rounded-full border" />
                      )}

                      {levelData?.ThirdLevelRefs[18] !== undefined ? (
                        <div className="flex h-[19px] w-[19px] cursor-pointer justify-center rounded-full border bg-[#9168bf] text-white">
                          <PopOver
                            userAddress={levelData.ThirdLevelRefs[18]}
                            matrix={2}
                            size={19}
                          />
                        </div>
                      ) : (
                        <div className="h-[19px] w-[19px] cursor-pointer rounded-full border" />
                      )}
                    </div>

                    <div className="flex justify-center gap-x-1">
                      {levelData?.ThirdLevelRefs[1] !== undefined ? (
                        <div className="flex h-[19px] w-[19px] cursor-pointer justify-center rounded-full border bg-[#9168bf] text-white">
                          <PopOver
                            userAddress={levelData.ThirdLevelRefs[1]}
                            matrix={2}
                            size={19}
                          />
                        </div>
                      ) : (
                        <div className="h-[19px] w-[19px] cursor-pointer rounded-full border" />
                      )}

                      {levelData?.ThirdLevelRefs[10] !== undefined ? (
                        <div className="flex h-[19px] w-[19px] cursor-pointer justify-center rounded-full border bg-[#9168bf] text-white">
                          <PopOver
                            userAddress={levelData.ThirdLevelRefs[10]}
                            matrix={2}
                            size={19}
                          />
                        </div>
                      ) : (
                        <div className="h-[19px] w-[19px] cursor-pointer rounded-full border" />
                      )}

                      {levelData?.ThirdLevelRefs[19] !== undefined ? (
                        <div className="flex h-[19px] w-[19px] cursor-pointer justify-center rounded-full border bg-[#9168bf] text-white">
                          <PopOver
                            userAddress={levelData.ThirdLevelRefs[19]}
                            matrix={2}
                            size={19}
                          />
                        </div>
                      ) : (
                        <div className="h-[19px] w-[19px] cursor-pointer rounded-full border" />
                      )}
                    </div>

                    <div className="flex justify-center gap-x-1">
                      {levelData?.ThirdLevelRefs[2] !== undefined ? (
                        <div className="flex h-[19px] w-[19px] cursor-pointer justify-center rounded-full border bg-[#9168bf] text-white">
                          <PopOver
                            userAddress={levelData.ThirdLevelRefs[2]}
                            matrix={2}
                            size={19}
                          />
                        </div>
                      ) : (
                        <div className="h-[19px] w-[19px] cursor-pointer rounded-full border" />
                      )}

                      {levelData?.ThirdLevelRefs[11] !== undefined ? (
                        <div className="flex h-[19px] w-[19px] cursor-pointer justify-center rounded-full border bg-[#9168bf] text-white">
                          <PopOver
                            userAddress={levelData.ThirdLevelRefs[11]}
                            matrix={2}
                            size={19}
                          />
                        </div>
                      ) : (
                        <div className="h-[19px] w-[19px] cursor-pointer rounded-full border" />
                      )}

                      {levelData?.ThirdLevelRefs[20] !== undefined ? (
                        <div className="flex h-[19px] w-[19px] cursor-pointer justify-center rounded-full border bg-[#9168bf] text-white">
                          <PopOver
                            userAddress={levelData.ThirdLevelRefs[20]}
                            matrix={2}
                            size={19}
                          />
                        </div>
                      ) : (
                        <div className="h-[19px] w-[19px] cursor-pointer rounded-full border" />
                      )}
                    </div>
                  </div>

                  <div className="flex justify-center gap-x-1">
                    <div className="flex justify-center gap-x-1">
                      {levelData?.ThirdLevelRefs[3] !== undefined ? (
                        <div className="flex h-[19px] w-[19px] cursor-pointer justify-center rounded-full border bg-[#9168bf] text-white">
                          <PopOver
                            userAddress={levelData.ThirdLevelRefs[3]}
                            matrix={2}
                            size={19}
                          />
                        </div>
                      ) : (
                        <div className="h-[19px] w-[19px] cursor-pointer rounded-full border" />
                      )}

                      {levelData?.ThirdLevelRefs[12] !== undefined ? (
                        <div className="flex h-[19px] w-[19px] cursor-pointer justify-center rounded-full border bg-[#9168bf] text-white">
                          <PopOver
                            userAddress={levelData.ThirdLevelRefs[12]}
                            matrix={2}
                            size={19}
                          />
                        </div>
                      ) : (
                        <div className="h-[19px] w-[19px] cursor-pointer rounded-full border" />
                      )}

                      {levelData?.ThirdLevelRefs[21] !== undefined ? (
                        <div className="flex h-[19px] w-[19px] cursor-pointer justify-center rounded-full border bg-[#9168bf] text-white">
                          <PopOver
                            userAddress={levelData.ThirdLevelRefs[21]}
                            matrix={2}
                            size={19}
                          />
                        </div>
                      ) : (
                        <div className="h-[19px] w-[19px] cursor-pointer rounded-full border" />
                      )}
                    </div>

                    <div className="flex justify-center gap-x-1">
                      {levelData?.ThirdLevelRefs[4] !== undefined ? (
                        <div className="flex h-[19px] w-[19px] cursor-pointer justify-center rounded-full border bg-[#9168bf] text-white">
                          <PopOver
                            userAddress={levelData.ThirdLevelRefs[4]}
                            matrix={2}
                            size={19}
                          />
                        </div>
                      ) : (
                        <div className="h-[19px] w-[19px] cursor-pointer rounded-full border" />
                      )}

                      {levelData?.ThirdLevelRefs[13] !== undefined ? (
                        <div className="flex h-[19px] w-[19px] cursor-pointer justify-center rounded-full border bg-[#9168bf] text-white">
                          <PopOver
                            userAddress={levelData.ThirdLevelRefs[13]}
                            matrix={2}
                            size={19}
                          />
                        </div>
                      ) : (
                        <div className="h-[19px] w-[19px] cursor-pointer rounded-full border" />
                      )}

                      {levelData?.ThirdLevelRefs[22] !== undefined ? (
                        <div className="flex h-[19px] w-[19px] cursor-pointer justify-center rounded-full border bg-[#9168bf] text-white">
                          <PopOver
                            userAddress={levelData.ThirdLevelRefs[22]}
                            matrix={2}
                            size={19}
                          />
                        </div>
                      ) : (
                        <div className="h-[19px] w-[19px] cursor-pointer rounded-full border" />
                      )}
                    </div>

                    <div className="flex justify-center gap-x-1">
                      {levelData?.ThirdLevelRefs[5] !== undefined ? (
                        <div className="flex h-[19px] w-[19px] cursor-pointer justify-center rounded-full border bg-[#9168bf] text-white">
                          <PopOver
                            userAddress={levelData.ThirdLevelRefs[5]}
                            matrix={2}
                            size={19}
                          />
                        </div>
                      ) : (
                        <div className="h-[19px] w-[19px] cursor-pointer rounded-full border" />
                      )}

                      {levelData?.ThirdLevelRefs[14] !== undefined ? (
                        <div className="flex h-[19px] w-[19px] cursor-pointer justify-center rounded-full border bg-[#9168bf] text-white">
                          <PopOver
                            userAddress={levelData.ThirdLevelRefs[14]}
                            matrix={2}
                            size={19}
                          />
                        </div>
                      ) : (
                        <div className="h-[19px] w-[19px] cursor-pointer rounded-full border" />
                      )}

                      {levelData?.ThirdLevelRefs[23] !== undefined ? (
                        <div className="flex h-[19px] w-[19px] cursor-pointer justify-center rounded-full border bg-[#9168bf] text-white">
                          <PopOver
                            userAddress={levelData.ThirdLevelRefs[23]}
                            matrix={2}
                            size={19}
                          />
                        </div>
                      ) : (
                        <div className="h-[19px] w-[19px] cursor-pointer rounded-full border" />
                      )}
                    </div>
                  </div>

                  <div className="flex justify-center gap-x-1">
                    <div className="flex justify-center gap-x-1">
                      {levelData?.ThirdLevelRefs[6] !== undefined ? (
                        <div className="flex h-[19px] w-[19px] cursor-pointer justify-center rounded-full border bg-[#9168bf] text-white">
                          <PopOver
                            userAddress={levelData.ThirdLevelRefs[6]}
                            matrix={2}
                            size={19}
                          />
                        </div>
                      ) : (
                        <div className="h-[19px] w-[19px] cursor-pointer rounded-full border" />
                      )}

                      {levelData?.ThirdLevelRefs[15] !== undefined ? (
                        <div className="flex h-[19px] w-[19px] cursor-pointer justify-center rounded-full border bg-[#9168bf] text-white">
                          <PopOver
                            userAddress={levelData.ThirdLevelRefs[15]}
                            matrix={2}
                            size={19}
                          />
                        </div>
                      ) : (
                        <div className="h-[19px] w-[19px] cursor-pointer rounded-full border" />
                      )}

                      {levelData?.ThirdLevelRefs[24] !== undefined ? (
                        <div className="flex h-[19px] w-[19px] cursor-pointer justify-center rounded-full border bg-[#9168bf] text-white">
                          <PopOver
                            userAddress={levelData.ThirdLevelRefs[24]}
                            matrix={2}
                            size={19}
                          />
                        </div>
                      ) : (
                        <div className="h-[19px] w-[19px] cursor-pointer rounded-full border" />
                      )}
                    </div>

                    <div className="flex justify-center gap-x-1">
                      {levelData?.ThirdLevelRefs[7] !== undefined ? (
                        <div className="flex h-[19px] w-[19px] cursor-pointer justify-center rounded-full border bg-[#9168bf] text-white">
                          <PopOver
                            userAddress={levelData.ThirdLevelRefs[7]}
                            matrix={2}
                            size={19}
                          />
                        </div>
                      ) : (
                        <div className="h-[19px] w-[19px] cursor-pointer rounded-full border" />
                      )}

                      {levelData?.ThirdLevelRefs[16] !== undefined ? (
                        <div className="flex h-[19px] w-[19px] cursor-pointer justify-center rounded-full border bg-[#9168bf] text-white">
                          <PopOver
                            userAddress={levelData.ThirdLevelRefs[16]}
                            matrix={2}
                            size={19}
                          />
                        </div>
                      ) : (
                        <div className="h-[19px] w-[19px] cursor-pointer rounded-full border" />
                      )}

                      {levelData?.ThirdLevelRefs[25] !== undefined ? (
                        <div className="flex h-[19px] w-[19px] cursor-pointer justify-center rounded-full border bg-[#9168bf] text-white">
                          <PopOver
                            userAddress={levelData.ThirdLevelRefs[25]}
                            matrix={2}
                            size={19}
                          />
                        </div>
                      ) : (
                        <div className="h-[19px] w-[19px] cursor-pointer rounded-full border" />
                      )}
                    </div>

                    <div className="flex justify-center gap-x-1">
                      {levelData?.ThirdLevelRefs[8] !== undefined ? (
                        <div className="flex h-[19px] w-[19px] cursor-pointer justify-center rounded-full border bg-[#9168bf] text-white">
                          <PopOver
                            userAddress={levelData.ThirdLevelRefs[8]}
                            matrix={2}
                            size={19}
                          />
                        </div>
                      ) : (
                        <div className="h-[19px] w-[19px] cursor-pointer rounded-full border" />
                      )}

                      {levelData?.ThirdLevelRefs[17] !== undefined ? (
                        <div className="flex h-[19px] w-[19px] cursor-pointer justify-center rounded-full border bg-[#9168bf] text-white">
                          <PopOver
                            userAddress={levelData.ThirdLevelRefs[17]}
                            matrix={2}
                            size={19}
                          />
                        </div>
                      ) : (
                        <div className="h-[19px] w-[19px] cursor-pointer rounded-full border" />
                      )}

                      {levelData?.ThirdLevelRefs[26] !== undefined ? (
                        <div className="flex h-[19px] w-[19px] cursor-pointer justify-center rounded-full border bg-[#9168bf] text-white">
                          <PopOver
                            userAddress={levelData.ThirdLevelRefs[26]}
                            matrix={2}
                            size={19}
                          />
                        </div>
                      ) : (
                        <div className="h-[19px] w-[19px] cursor-pointer rounded-full border" />
                      )}
                    </div>
                  </div>
                </div>

                {/*=====================FOURTH LEVEL=============================== ==81*/}

                <div className="mt-4 flex justify-center gap-x-1">
                  <div className="flex justify-center gap-x-1">
                    <div className="flex justify-center gap-x-1">
                      <div className="flex justify-center gap-x-1">
                        {levelData?.FourthLevelRefs[0] !== undefined ? (
                          <div className="flex h-[19px] w-[19px] cursor-pointer justify-center rounded-full border bg-[#9168bf] text-white">
                            <PopOver
                              userAddress={levelData.FourthLevelRefs[0]}
                              matrix={2}
                              size={19}
                            />
                          </div>
                        ) : (
                          <div className="h-[19px] w-[19px] cursor-pointer rounded-full border" />
                        )}

                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                      </div>
                      <div className="flex justify-center gap-x-1">
                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                      </div>
                      <div className="flex justify-center gap-x-1">
                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                      </div>
                    </div>
                    <div className="flex justify-center gap-x-1">
                      <div className="flex justify-center gap-x-1">
                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                      </div>
                      <div className="flex justify-center gap-x-1">
                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                      </div>
                      <div className="flex justify-center gap-x-1">
                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                      </div>
                    </div>
                    <div className="flex justify-center gap-x-1">
                      <div className="flex justify-center gap-x-1">
                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                      </div>
                      <div className="flex justify-center gap-x-1">
                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                      </div>
                      <div className="flex justify-center gap-x-1">
                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center gap-x-1">
                    <div className="flex justify-center gap-x-1">
                      <div className="flex justify-center gap-x-1">
                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                      </div>
                      <div className="flex justify-center gap-x-1">
                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                      </div>
                      <div className="flex justify-center gap-x-1">
                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                      </div>
                    </div>
                    <div className="flex justify-center gap-x-1">
                      <div className="flex justify-center gap-x-1">
                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                      </div>
                      <div className="flex justify-center gap-x-1">
                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                      </div>
                      <div className="flex justify-center gap-x-1">
                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                      </div>
                    </div>
                    <div className="flex justify-center gap-x-1">
                      <div className="flex justify-center gap-x-1">
                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                      </div>
                      <div className="flex justify-center gap-x-1">
                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                      </div>
                      <div className="flex justify-center gap-x-1">
                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center gap-x-1">
                    <div className="flex justify-center gap-x-1">
                      <div className="flex justify-center gap-x-1">
                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                      </div>
                      <div className="flex justify-center gap-x-1">
                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                      </div>
                      <div className="flex justify-center gap-x-1">
                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                      </div>
                    </div>
                    <div className="flex justify-center gap-x-1">
                      <div className="flex justify-center gap-x-1">
                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                      </div>
                      <div className="flex justify-center gap-x-1">
                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                      </div>
                      <div className="flex justify-center gap-x-1">
                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                      </div>
                    </div>
                    <div className="flex justify-center gap-x-1">
                      <div className="flex justify-center gap-x-1">
                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                      </div>
                      <div className="flex justify-center gap-x-1">
                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                      </div>
                      <div className="flex justify-center gap-x-1">
                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                      </div>
                    </div>
                  </div>
                </div>

                {/*=====================FIFTH LEVEL=============================== ==243*/}

                <div className="mt-4 flex justify-center gap-x-1">
                  <div className="flex justify-center gap-x-1">
                    <div className="flex justify-center gap-x-1">
                      <div className="flex justify-center gap-x-1">
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                      </div>
                      <div className="flex justify-center gap-x-1">
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                      </div>
                      <div className="flex justify-center gap-x-1">
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center gap-x-1">
                      <div className="flex justify-center gap-x-1">
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                      </div>
                      <div className="flex justify-center gap-x-1">
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                      </div>
                      <div className="flex justify-center gap-x-1">
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center gap-x-1">
                      <div className="flex justify-center gap-x-1">
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                      </div>
                      <div className="flex justify-center gap-x-1">
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                      </div>
                      <div className="flex justify-center gap-x-1">
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center gap-x-1">
                    <div className="flex justify-center gap-x-1">
                      <div className="flex justify-center gap-x-1">
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                      </div>
                      <div className="flex justify-center gap-x-1">
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                      </div>
                      <div className="flex justify-center gap-x-1">
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center gap-x-1">
                      <div className="flex justify-center gap-x-1">
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                      </div>
                      <div className="flex justify-center gap-x-1">
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                      </div>
                      <div className="flex justify-center gap-x-1">
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center gap-x-1">
                      <div className="flex justify-center gap-x-1">
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                      </div>
                      <div className="flex justify-center gap-x-1">
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                      </div>
                      <div className="flex justify-center gap-x-1">
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center gap-x-1">
                    <div className="flex justify-center gap-x-1">
                      <div className="flex justify-center gap-x-1">
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                      </div>
                      <div className="flex justify-center gap-x-1">
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                      </div>
                      <div className="flex justify-center gap-x-1">
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center gap-x-1">
                      <div className="flex justify-center gap-x-1">
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                      </div>
                      <div className="flex justify-center gap-x-1">
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                      </div>
                      <div className="flex justify-center gap-x-1">
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center gap-x-1">
                      <div className="flex justify-center gap-x-1">
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                      </div>
                      <div className="flex justify-center gap-x-1">
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                      </div>
                      <div className="flex justify-center gap-x-1">
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/*=====================SIXTH LEVEL============================= ==729*/}

                <div className="mt-4 flex justify-center gap-x-1">
                  <div className="flex justify-center gap-x-1">
                    <div className="flex justify-center gap-x-1">
                      <div className="flex justify-center gap-x-1">
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-center gap-x-1">
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-center gap-x-1">
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center gap-x-1">
                      <div className="flex justify-center gap-x-1">
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-center gap-x-1">
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-center gap-x-1">
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center gap-x-1">
                      <div className="flex justify-center gap-x-1">
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-center gap-x-1">
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-center gap-x-1">
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center gap-x-1">
                    <div className="flex justify-center gap-x-1">
                      <div className="flex justify-center gap-x-1">
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-center gap-x-1">
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-center gap-x-1">
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center gap-x-1">
                      <div className="flex justify-center gap-x-1">
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-center gap-x-1">
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-center gap-x-1">
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center gap-x-1">
                      <div className="flex justify-center gap-x-1">
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-center gap-x-1">
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-center gap-x-1">
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center gap-x-1">
                    <div className="flex justify-center gap-x-1">
                      <div className="flex justify-center gap-x-1">
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-center gap-x-1">
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-center gap-x-1">
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center gap-x-1">
                      <div className="flex justify-center gap-x-1">
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-center gap-x-1">
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-center gap-x-1">
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center gap-x-1">
                      <div className="flex justify-center gap-x-1">
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-center gap-x-1">
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-center gap-x-1">
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TransactionTable matrixLevel={Number(params.id)} />
    </div>
  );
};

export default Page;
