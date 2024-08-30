"use client";

import CopyToClipboardButton from "@/lib/copyToClipboard";
import { formatEther, parseEther } from "ethers/lib/utils";
import RanksEarnings from "./ranksEarnings";
import WithdrawButton from "./withdrawButton";
import MyUpline from "./myUpline";
import { UseFormatEther, UseFormatEtherNumber } from "@/lib/utils/useEthers";
import { useCallback, useEffect, useMemo, useState } from "react";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import {
  ActiveChain,
  GeniosClubAbi2,
  GeniosClubAddress2,
  MTKAbi2,
  MTKAddress2,
} from "@/lib/constant";
import {
  useAddress,
  useContract,
  useContractRead,
  useContractWrite,
} from "@thirdweb-dev/react";

const UserCard = ({
  user,
  view,
  usersIsLoading,
  userAddress,
}: {
  user: any;
  view?: boolean;
  usersIsLoading: any;
  userAddress: any;
}) => {
  // const affiliateLink = `https://geniosclub.team/auth/register?ref=${String(
  //   user?.Id
  // )}`;
  const address = useAddress();
  const affiliateLink = `https://genios-club-2.vercel.app/authgc2/login`;
  const { contract: GeniosClubContract } = useContract(
    GeniosClubAddress2,
    GeniosClubAbi2
  );
  const { contract: MTKContract } = useContract(MTKAddress2, MTKAbi2);
  const { data: userRef, isLoading: usersRefIsLoading } = useContractRead(
    GeniosClubContract,
    "Users",
    [user?.DRef]
  );

  const [levelStatus, setLevelStatus] = useState<{
    G3X2: { [key: number]: boolean };
    G3X7: { [key: number]: boolean };
  }>({
    G3X2: {},
    G3X7: {},
  });

  async function fetchLevelStatus() {
    try {
      const levels = [1, 2, 3, 4, 5, 6, 7, 8]; // Replace with the levels you want to check

      const levelStatusUpdates = { ...levelStatus };

      for (const level of levels) {
        const sdk = new ThirdwebSDK(ActiveChain);
        const contract = await sdk.getContract(
          GeniosClubAddress2,
          GeniosClubAbi2
        );
      }

      setLevelStatus(levelStatusUpdates);
    } catch (error) {
      console.error("Error fetching level status:", error);
    }
  }
  const [minsVal, setMinsVal] = useState(0);
  const [cycleVal, setCycleVal] = useState(0);
  const [cycleBalanceVal, setCycleBalanceVal] = useState<any>(null);
  const check: any = [];
  const userIdFind = (data: any) => {
    if (parseInt(data) > 0) {
      check.push(parseInt(data));
    }
  };
  // check Upgrade Balance
  const { data: activeLevel1 } = useContractRead(
    GeniosClubContract,
    "LevelOpen",
    [userAddress, 1]
  );
  const { data: activeLevel2 } = useContractRead(
    GeniosClubContract,
    "LevelOpen",
    [userAddress, 2]
  );
  const { data: activeLevel3 } = useContractRead(
    GeniosClubContract,
    "LevelOpen",
    [userAddress, 3]
  );
  const { data: activeLevel4 } = useContractRead(
    GeniosClubContract,
    "LevelOpen",
    [userAddress, 4]
  );
  const { data: activeLevel5 } = useContractRead(
    GeniosClubContract,
    "LevelOpen",
    [userAddress, 5]
  );
  const { data: activeLevel6 } = useContractRead(
    GeniosClubContract,
    "LevelOpen",
    [userAddress, 6]
  );
  const { data: activeLevel7 } = useContractRead(
    GeniosClubContract,
    "LevelOpen",
    [userAddress, 7]
  );
  useEffect(() => {
    fetchLevelStatus();

    if (activeLevel7) {
      setMinsVal(40960);
      setCycleVal(7);
    } else if (activeLevel6) {
      setMinsVal(10240);
      setCycleVal(6);
    } else if (activeLevel5) {
      setMinsVal(2560);
      setCycleVal(5);
    } else if (activeLevel4) {
      setMinsVal(640);
      setCycleVal(4);
    } else if (activeLevel3) {
      setMinsVal(160);
      setCycleVal(3);
    } else if (activeLevel2) {
      setMinsVal(40);
      setCycleVal(2);
    } else if (activeLevel1) {
      setMinsVal(10);
      setCycleVal(1);
    }
  }, [userAddress, user]);
  const [results, setResults] = useState([]);
  const { data: cycleNo } = useContractRead(
    GeniosClubContract,
    "CurrentCycleNo",
    [userAddress, cycleVal]
  );
  const { data: cycleNoForMatrix1 } = useContractRead(
    GeniosClubContract,
    "CurrentCycleNo",
    [userAddress, 1]
  );
  const { data: cycleNoForMatrix2 } = useContractRead(
    GeniosClubContract,
    "CurrentCycleNo",
    [userAddress, 2]
  );
  const { data: cycleNoForMatrix3 } = useContractRead(
    GeniosClubContract,
    "CurrentCycleNo",
    [userAddress, 3]
  );
  const { data: cycleNoForMatrix4 } = useContractRead(
    GeniosClubContract,
    "CurrentCycleNo",
    [userAddress, 4]
  );
  const { data: cycleNoForMatrix5 } = useContractRead(
    GeniosClubContract,
    "CurrentCycleNo",
    [userAddress, 5]
  );
  const { data: cycleNoForMatrix6 } = useContractRead(
    GeniosClubContract,
    "CurrentCycleNo",
    [userAddress, 6]
  );
  const { data: cycleNoForMatrix7 } = useContractRead(
    GeniosClubContract,
    "CurrentCycleNo",
    [userAddress, 7]
  );
  const { data: cycleNoForMatrix8 } = useContractRead(
    GeniosClubContract,
    "CurrentCycleNo",
    [userAddress, 8]
  );
  const countRecycleBalance = (dependentVal: any, valCycle: any, cont: any) => {
    return valCycle
      ? UseFormatEtherNumber(user?.[6]) - cont
      : UseFormatEtherNumber(user?.[6]);
  };
  const countRecycleBalanceForOne = (
    dependentVal: any,
    valCycle: any,
    cont: any
  ) => {
    return valCycle
      ? // ? UseFormatEtherNumber(user?.[6]) - dependentVal * (valCycle - cont)
        UseFormatEtherNumber(user?.[6]) - cont
      : UseFormatEtherNumber(user?.[6]);
  };
  // console.log("cycleNoForMatrix1------------->", parseInt(cycleNoForMatrix1));
  // console.log("cycleNoForMatrix2------------->", parseInt(cycleNoForMatrix2));
  // console.log("cycleNoForMatrix3------------->", parseInt(cycleNoForMatrix3));
  // console.log("cycleNoForMatrix4------------->", parseInt(cycleNoForMatrix4));
  // console.log("cycleNoForMatrix5------------->", parseInt(cycleNoForMatrix5));
  // console.log("cycleNoForMatrix6------------->", parseInt(cycleNoForMatrix6));
  // console.log("cycleNoForMatrix7------------->", parseInt(cycleNoForMatrix7));
  // console.log("cycleNoForMatrix8------------->", parseInt(cycleNoForMatrix8));
  const matrix1 = countRecycleBalanceForOne(
    parseInt(cycleNoForMatrix1) > 1 ? 2.4658203125 : 0,
    parseInt(cycleNoForMatrix1) >= 1 ? parseInt(cycleNoForMatrix1) : 0,
    parseInt(cycleNoForMatrix1) > 1
      ? 2.4658203125 * (parseInt(cycleNoForMatrix1) - 1)
      : 0
  );
  const matrix2 = countRecycleBalance(
    parseInt(cycleNoForMatrix2) > 2 ? 10 : 0,
    parseInt(cycleNoForMatrix2) > 2 ? parseInt(cycleNoForMatrix2) : 0,
    parseInt(cycleNoForMatrix2) > 2 ? 10 * (parseInt(cycleNoForMatrix2) - 2) : 0
  );
  const matrix3 = countRecycleBalance(
    parseInt(cycleNoForMatrix2) > 2 ? 40 : 0,
    parseInt(cycleNoForMatrix3) > 2 ? parseInt(cycleNoForMatrix3) : 0,
    parseInt(cycleNoForMatrix3) > 2 ? 40 * (parseInt(cycleNoForMatrix3) - 2) : 0
  );
  const matrix4 = countRecycleBalance(
    parseInt(cycleNoForMatrix2) > 2 ? 160 : 0,
    parseInt(cycleNoForMatrix4) > 2 ? parseInt(cycleNoForMatrix4) : 0,
    parseInt(cycleNoForMatrix4) > 2
      ? 160 * (parseInt(cycleNoForMatrix4) - 2)
      : 0
  );
  const matrix5 = countRecycleBalance(
    parseInt(cycleNoForMatrix2) > 2 ? 640 : 0,
    parseInt(cycleNoForMatrix5) > 2 ? parseInt(cycleNoForMatrix5) : 0,
    parseInt(cycleNoForMatrix5) > 2
      ? 640 * (parseInt(cycleNoForMatrix5) - 2)
      : 0
  );
  const matrix6 = countRecycleBalance(
    parseInt(cycleNoForMatrix2) > 2 ? 2560 : 0,
    parseInt(cycleNoForMatrix6) > 2 ? parseInt(cycleNoForMatrix6) : 0,
    parseInt(cycleNoForMatrix6) > 2
      ? 2560 * (parseInt(cycleNoForMatrix6) - 2)
      : 0
  );
  const matrix7 = countRecycleBalance(
    parseInt(cycleNoForMatrix2) > 2 ? 10240 : 0,
    parseInt(cycleNoForMatrix7) > 2 ? parseInt(cycleNoForMatrix7) : 0,
    parseInt(cycleNoForMatrix7) > 2
      ? 10240 * (parseInt(cycleNoForMatrix7) - 2)
      : 0
  );
  const matrix8 = countRecycleBalance(
    parseInt(cycleNoForMatrix2) > 2 ? 46960 : 0,
    parseInt(cycleNoForMatrix8) > 2 ? parseInt(cycleNoForMatrix8) : 0,
    parseInt(cycleNoForMatrix8) > 2
      ? 46960 * (parseInt(cycleNoForMatrix8) - 2)
      : 0
  );
  console.log("matrix1---------->", matrix1);
  useEffect(() => {
    if (parseInt(cycleNoForMatrix7) > 1) {
      setCycleBalanceVal(
        parseInt(cycleNoForMatrix7) === 2
          ? UseFormatEtherNumber(user?.[6])
          : UseFormatEtherNumber(user?.[6]) -
              10240 * (parseInt(cycleNoForMatrix7) - 2)
      );
    } else if (parseInt(cycleNoForMatrix6) > 1) {
      setCycleBalanceVal(
        parseInt(cycleNoForMatrix6) === 2
          ? UseFormatEtherNumber(user?.[6])
          : UseFormatEtherNumber(user?.[6]) -
              2560 * (parseInt(cycleNoForMatrix6) - 2)
      );
    } else if (parseInt(cycleNoForMatrix5) > 1) {
      setCycleBalanceVal(
        parseInt(cycleNoForMatrix5) === 2
          ? UseFormatEtherNumber(user?.[6])
          : UseFormatEtherNumber(user?.[6]) -
              640 * (parseInt(cycleNoForMatrix5) - 2)
      );
    } else if (parseInt(cycleNoForMatrix4) > 1) {
      setCycleBalanceVal(
        parseInt(cycleNoForMatrix4) === 2
          ? UseFormatEtherNumber(user?.[6])
          : UseFormatEtherNumber(user?.[6]) -
              160 * (parseInt(cycleNoForMatrix4) - 2)
      );
    } else if (parseInt(cycleNoForMatrix3) > 1) {
      setCycleBalanceVal(
        parseInt(cycleNoForMatrix3) === 2
          ? UseFormatEtherNumber(user?.[6])
          : UseFormatEtherNumber(user?.[6]) -
              40 * (parseInt(cycleNoForMatrix3) - 2)
      );
    } else if (parseInt(cycleNoForMatrix2) > 1) {
      setCycleBalanceVal(
        parseInt(cycleNoForMatrix2) === 2
          ? UseFormatEtherNumber(user?.[6])
          : UseFormatEtherNumber(user?.[6]) -
              10 * (parseInt(cycleNoForMatrix2) - 2)
      );
    } else if (parseInt(cycleNoForMatrix1)) {
      setCycleBalanceVal(
        parseInt(cycleNoForMatrix1) === 1
          ? UseFormatEtherNumber(user?.[6])
          : parseInt(cycleNoForMatrix1) === 2
          ? 2.5 * 1 - UseFormatEtherNumber(user?.[6])
          : UseFormatEtherNumber(user?.[6]) -
            2.5 * (parseInt(cycleNoForMatrix1) - 1)
      );
    }
  }, [user, setCycleBalanceVal]);
  const { contract } = useContract(GeniosClubAddress2);
  const myDataFetch = useCallback(async () => {
    if (!contract) return;

    const fetchPositionData = async (index: any) => {
      try {
        const data = await contract.call("postionToId", [
          userAddress,
          cycleNo,
          1,
          index,
        ]);
        const userAddress1 = await contract.call("IdToAddress", [
          parseInt(data),
        ]);
        return { index, data, userAddress1 };
      } catch (error) {
        return { index, error };
      }
    };

    const promises = [];
    for (let i = 1; i <= 85; i++) {
      promises.push(fetchPositionData(i));
    }

    const result = await Promise.all(promises);

    const tempResults: any = [];
    const tempErrors: any = [];

    result.forEach((result) => {
      if (result.data) {
        tempResults.push(result);
      } else if (result.error) {
        tempErrors.push(result);
      }
    });

    setResults(tempResults);
  }, [userAddress, cycleNo, contract]);
  useEffect(() => {
    myDataFetch();
  }, [myDataFetch]);
  // const memoizedResults = useMemo(() => results, [results]);
  if (results) {
    results.slice(4, 20).map((val: any) => userIdFind(val.data));
  }
  // yeha tak
  const isAllTrueG3X2 = Object.values(levelStatus.G3X2).every((value) => value);
  const isAllTrueG3X7 = Object.values(levelStatus.G3X7).every((value) => value);
  const [inputVal, setInputVal] = useState("");
  const [message, setMessage] = useState("");

  const { mutateAsync: approve, isLoading: approveIsLoading } =
    useContractWrite(MTKContract, "approve");
  const { mutateAsync: upgrade, isLoading: upgradeIsLoading } =
    useContractWrite(GeniosClubContract, "AddUpgradeAmount");

  const upgradeApprove = async (val: any) => {
    try {
      const data = await upgrade({
        args: [address, val],
      });
      if (data) {
        setMessage("Your are upprove/Upgrade");
      }
      console.info("contract call success", data);
    } catch (err) {
      console.error("contract call failure", err);
    }
  };

  const callApprove = async () => {
    try {
      const data = await approve({
        args: [GeniosClubAddress2, parseEther(inputVal)],
      });
      console.info("contract call success", data);
      if (data) {
        // await upgradeApprove(parseEther(inputVal));
        try {
          const data = await upgrade({
            args: [address, parseEther(inputVal)],
          });
          if (data) {
            setMessage("Your are Approved/Upgrade");
          }
          console.info("contract call success", data);
        } catch (err) {
          console.error("contract call failure", err);
        }
      }
    } catch (err) {
      console.error("contract call failure", err);
    }
  };

  return (
    <section className="relative z-10 mx-auto block w-full grid-cols-2 flex-col justify-center gap-x-5 md:grid md:justify-between lg:block">
      {/* User Details */}
      <div className="w-full">
        <div className="w-full rounded-[9px] bg-[#2c0219] p-5 border-none text-end font-san">
          {usersIsLoading ? (
            <div className="animate-pulse space-y-4 divide-y divide-gray-200 border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <div className="mb-2.5 h-2.5 w-24 rounded-full bg-gray-300 dark:bg-gray-600"></div>
                  <div className="h-2 w-32 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                </div>
                <div className="h-2.5 w-12 rounded-full bg-gray-300 dark:bg-gray-700"></div>
              </div>
              <div className="flex items-center justify-between pt-4">
                <div>
                  <div className="mb-2.5 h-2.5 w-24 rounded-full bg-gray-300 dark:bg-gray-600"></div>
                  <div className="h-2 w-32 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                </div>
                <div className="h-2.5 w-12 rounded-full bg-gray-300 dark:bg-gray-700"></div>
              </div>
              <div className="flex items-center justify-between pt-4">
                <div>
                  <div className="mb-2.5 h-2.5 w-24 rounded-full bg-gray-300 dark:bg-gray-600"></div>
                  <div className="h-2 w-32 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                </div>
                <div className="h-2.5 w-12 rounded-full bg-gray-300 dark:bg-gray-700"></div>
              </div>
              <div className="flex items-center justify-between pt-4">
                <div>
                  <div className="mb-2.5 h-2.5 w-24 rounded-full bg-gray-300 dark:bg-gray-600"></div>
                  <div className="h-2 w-32 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                </div>
                <div className="h-2.5 w-12 rounded-full bg-gray-300 dark:bg-gray-700"></div>
              </div>
              <div className="flex items-center justify-between pt-4">
                <div>
                  <div className="mb-2.5 h-2.5 w-24 rounded-full bg-gray-300 dark:bg-gray-600"></div>
                  <div className="h-2 w-32 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                </div>
                <div className="h-2.5 w-12 rounded-full bg-gray-300 dark:bg-gray-700"></div>
              </div>
              <span className="sr-only">Loading...</span>
            </div>
          ) : (
            <div>
              <div className="flex items-center justify-between">
                <div>
                  <svg
                    id="icons"
                    className="h-24 w-24 rotate-[-25deg] opacity-50"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      d="M35.42,188.21,243.17,457.67a16.17,16.17,0,0,0,25.66,0L476.58,188.21a16.52,16.52,0,0,0,.95-18.75L407.06,55.71A16.22,16.22,0,0,0,393.27,48H118.73a16.22,16.22,0,0,0-13.79,7.71L34.47,169.46A16.52,16.52,0,0,0,35.42,188.21Z"
                      fill="none"
                      stroke=" #FFFFFF"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="20"
                    />
                    <line
                      x1="48"
                      y1="176"
                      x2="464"
                      y2="176"
                      fill="none"
                      stroke=" #FFFFFF"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="20"
                    />
                    <polyline
                      points="400 64 352 176 256 48"
                      fill="none"
                      stroke=" #FFFFFF"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="20"
                    />
                    <polyline
                      points="112 64 160 176 256 48"
                      fill="none"
                      stroke=" #FFFFFF"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="20"
                    />
                    <line
                      x1="256"
                      y1="448"
                      x2="160"
                      y2="176"
                      fill="none"
                      stroke=" #FFFFFF"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="20"
                    />
                    <line
                      x1="256"
                      y1="448"
                      x2="352"
                      y2="176"
                      fill="none"
                      stroke=" #FFFFFF"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="20"
                    />
                  </svg>
                </div>
                <div>
                  <div>
                    <h1 className="text-[20px] text-[#eeeeee]">
                      ID {String(user?.Id || 0)}
                    </h1>
                  </div>
                  <div className="mt-5 flex items-center justify-end text-[18px] text-[#eeeeee]">
                    <h1 className="mr-2">{String(user?.DirectRefs || 0)}</h1>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#00B0C2"
                      className="h-6 w-6 "
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between  text-[#eeeeee] ">
                <h1 className="text-start text-[15px] ">
                  GC2 <br /> EARNINGS :
                </h1>
                <div className="flex items-center  ">
                  <h1 className="mr-2 text-[16px]">
                    {user?.[3] ? UseFormatEtherNumber(user?.[3]) : 0}
                  </h1>
                  <img src="/Dai.png" alt="" className="h-6 w-6 " />
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between  text-[#eeeeee] ">
                <h1 className="text-start text-[15px] uppercase">
                  recycle <br /> BALANCE :
                </h1>
                <div className="flex items-center ">
                  <h1 className="mr-2 text-[16px]">
                    {" "}
                    {UseFormatEtherNumber(user?.[6])}
                  </h1>
                  <img src="/Dai.png" alt="" className="h-6 w-6" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Amount Card */}
      {!view &&
        isAllTrueG3X2 &&
        isAllTrueG3X7 &&
        Number(String(user?.Amount)) > 0 && (
          <div className="mt-4 w-full">
            <div className="w-full rounded-[9px] border-none bg-[#2c0219] p-5 text-end font-san">
              {usersIsLoading ? (
                <div className="animate-pulse space-y-4 divide-y divide-gray-200 border-gray-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="mb-2.5 h-2.5 w-24 rounded-full bg-gray-300 dark:bg-gray-600"></div>
                      <div className="h-2 w-32 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                    </div>
                    <div className="h-2.5 w-12 rounded-full bg-gray-300 dark:bg-gray-700"></div>
                  </div>
                  <span className="sr-only">Loading...</span>
                </div>
              ) : (
                <>
                  <div className=" flex items-center justify-between text-[#eeeeee] ">
                    <h1 className="text-start text-[15px]">AMOUNT:</h1>
                    <div className="flex items-center">
                      <h1 className="mr-2 text-[16px]">
                        {UseFormatEther(user?.Amount || 0)}
                      </h1>
                      <img src="/Dai.png" alt="" className="h-6 w-6" />
                    </div>
                  </div>
                  <WithdrawButton />
                </>
              )}
            </div>
          </div>
        )}

      {/* Links Card */}
      <div className="lg:mt-4 w-full">
        <div className=" rounded-[9px] border-none bg-[#2c0219] p-5 font-san">
          {usersIsLoading ? (
            <div className="animate-pulse space-y-4 divide-y divide-gray-200 border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <div className="mb-2.5 h-2.5 w-24 rounded-full bg-gray-300 dark:bg-gray-600"></div>
                  <div className="h-2 w-32 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                </div>
                <div className="h-2.5 w-12 rounded-full bg-gray-300 dark:bg-gray-700"></div>
              </div>
              <div className="flex items-center justify-between pt-4">
                <div>
                  <div className="mb-2.5 h-2.5 w-24 rounded-full bg-gray-300 dark:bg-gray-600"></div>
                  <div className="h-2 w-32 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                </div>
                <div className="h-2.5 w-12 rounded-full bg-gray-300 dark:bg-gray-700"></div>
              </div>
              <div className="flex items-center justify-between pt-4">
                <div>
                  <div className="mb-2.5 h-2.5 w-24 rounded-full bg-gray-300 dark:bg-gray-600"></div>
                  <div className="h-2 w-32 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                </div>
                <div className="h-2.5 w-12 rounded-full bg-gray-300 dark:bg-gray-700"></div>
              </div>
              <div className="flex items-center justify-between pt-4">
                <div>
                  <div className="mb-2.5 h-2.5 w-24 rounded-full bg-gray-300 dark:bg-gray-600"></div>
                  <div className="h-2 w-32 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                </div>
                <div className="h-2.5 w-12 rounded-full bg-gray-300 dark:bg-gray-700"></div>
              </div>
              <div className="flex items-center justify-between pt-4">
                <div>
                  <div className="mb-2.5 h-2.5 w-24 rounded-full bg-gray-300 dark:bg-gray-600"></div>
                  <div className="h-2 w-32 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                </div>
                <div className="h-2.5 w-12 rounded-full bg-gray-300 dark:bg-gray-700"></div>
              </div>
              <span className="sr-only">Loading...</span>
            </div>
          ) : (
            <div className="">
              <div className="relative ">
                <h1 className="text-[15px] font-bold text-[#ffffffb3]">
                  Affiliate link
                </h1>
                <div className="mt-2 flex items-center justify-between rounded border p-1">
                  <h1 className="mr-2 truncate text-[10px]  font-medium text-[#eeeeee] hover:text-[#ffb000]">
                    {affiliateLink}
                  </h1>
                  <CopyToClipboardButton text={affiliateLink} />
                </div>
              </div>

              <div className="relative mt-6">
                <h1 className="text-[15px] font-bold text-[#ffffffb3]">
                  Wallet Address
                </h1>

                <div className="mt-2 flex items-center justify-between rounded border p-1">
                  <h1 className="mr-2 text-[10px]  font-medium text-[#eeeeee] hover:text-[#ffb000]">
                    {userAddress?.slice(0, 7)} . . . {userAddress?.slice(-7)}
                  </h1>
                  <CopyToClipboardButton text={userAddress} />
                </div>
              </div>

              <div className="relative mt-6">
                <MyUpline Ref={userRef && parseInt(userRef[0])} />
              </div>
              <div className="mt-5 flex items-center justify-between  text-[#eeeeee] ">
                <h1 className="text-start text-[15px] ">
                  Upgrade <br /> BALANCE :
                </h1>
                <div className="flex items-center ">
                  <h1 className="mr-2 text-[16px]">
                    {" "}
                    {/* {user?.[5] ? UseFormatEtherNumber(user?.[5]) : 0}
                     */}
                    {check.length === 16 && results.length < 85
                      ? UseFormatEtherNumber(user?.[5]) - minsVal
                      : UseFormatEtherNumber(user?.[5])}
                  </h1>
                  <img src="/Dai.png" alt="" className="h-6 w-6" />
                </div>
              </div>
              <div className="relative mt-6">
                <h1 className="text-[15px] font-bold text-[#ffffffb3]">
                  Input Enter
                </h1>
                <div className="text-white mt-2 flex items-center justify-between rounded border p-1">
                  <input
                    type="text"
                    className="pl-2 bg-[#2c0219]"
                    value={inputVal}
                    onChange={(e: any) => setInputVal(e.target.value)}
                  />
                </div>
                <div className="mt-4">
                  <button
                    onClick={callApprove}
                    className="rounded-2xl bg-red-900 text-white py-2 px-3 w-full"
                  >
                    {message ? message : "  Click"}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default UserCard;
