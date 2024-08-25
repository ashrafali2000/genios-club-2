"use client";

import TransactionTable from "@/components/dashboard/mainPage/G3X2Matrixes/matrixDetails/transactionTable";
import {
  UseFormatEther,
  UseFormatEtherNumber,
  UseFormatNumber,
} from "@/lib/utils/useEthers";
import { useContract, useContractRead } from "@thirdweb-dev/react";
import {
  GeniosClubAddress2,
  GeniosClubAbi2,
  MTKAddress2,
  MTKAbi2,
} from "@/lib/constant";
import { useSearchParams } from "next/navigation";
import UserId2 from "@/lib/utils/userId2";
import Link from "next/link";

import { useEffect, useState } from "react";
const Page = ({ params }: any) => {
  const searchParams = useSearchParams();
  const uid = searchParams?.get("uid");

  const { contract } = useContract(GeniosClubAddress2, GeniosClubAbi2);
  const { contract: MTKContract } = useContract(MTKAddress2, MTKAbi2);
  const { data: address, isLoading } = useContractRead(
    contract,
    "IdToAddress",
    [uid]
  );

  const { contract: GeniosClubContract } = useContract(
    GeniosClubAddress2,
    GeniosClubAbi2
  );
  const { data: balance, isLoading: balanceIsLoading } = useContractRead(
    MTKContract,
    "balanceOf",
    [address]
  );
  const { data: user } = useContractRead(GeniosClubContract, "Users", [
    address,
  ]);

  const { data: cycleNo } = useContractRead(
    GeniosClubContract,
    "CurrentCycleNo",
    [address, Number(params.id)]
  );
  const [myPosition, setMyPosition] = useState(1);

  let index: any;
  let data: any;
  let userAddress: any;
  const [parentLevel, setParentLevel] = useState<any[]>([
    {
      index,
      data,
      userAddress,
    },
  ]);
  const [secondLeveLChild1, setSecondLevelChild1] = useState(null);
  const [secondLeveLChild2, setSecondLevelChild2] = useState(null);
  const [secondLeveLChild3, setSecondLevelChild3] = useState(null);
  const [secondLeveLChild4, setSecondLevelChild4] = useState(null);
  const [thirdLeveLChildFirst, setThirdLevelChildFirst] = useState<any[]>([
    {
      index,
      data,
      userAddress,
    },
  ]);
  const [thirdLeveLChildSecond, setThirdLevelChildSecond] = useState<any[]>([
    {
      index,
      data,
      userAddress,
    },
  ]);
  const [thirdLeveLChildThird, setThirdLevelChildThird] = useState<any[]>([
    {
      index,
      data,
      userAddress,
    },
  ]);
  const [thirdLeveLChildFourth, setThirdLevelChildFourth] = useState<any[]>([
    {
      index,
      data,
      userAddress,
    },
  ]);

  // new today code
  const { contract: contract1 } = useContract(GeniosClubAddress2);
  // const [parentLev1, setParentLevel1] = useState(1);
  // const [parentLev2, setParentLevel2] = useState(2);
  // const [parentLev3, setParentLevel3] = useState(3);
  // const [parentLev4, setParentLevel4] = useState(4);

  useEffect(() => {
    const fetchData = async () => {
      if (!contract1) return;
      if (myPosition === 1) {
        const fetchPositionData = async (index: any) => {
          try {
            const data = await contract1.call("postionToId", [
              address,
              cycleNo,
              +params.id,
              index,
            ]);
            const userAddress = await contract1.call("IdToAddress", [
              parseInt(data),
            ]);
            setParentLevel((prev) => [...prev, { index, data, userAddress }]);
          } catch (error) {
            return { index, error };
          }
        };
        for (let i = 1; i <= 4; i++) {
          fetchPositionData(i);
        }
      } else {
        const address = await contract1.call("IdToAddress", [
          parseInt(parentLevel?.[myPosition]?.data),
        ]);

        const cycleNo = await contract1.call("CurrentCycleNo", [
          address,
          Number(params.id),
        ]);
        const fetchPositionData = async (index: any) => {
          try {
            const data = await contract1.call("postionToId", [
              address,
              cycleNo,
              +params.id,
              index,
            ]);
            const userAddress = await contract1.call("IdToAddress", [
              parseInt(data),
            ]);

            setParentLevel((prev) => [...prev, { index, data, userAddress }]);
          } catch (error) {
            return { index, error };
          }
        };
        for (let i = 1; i <= 4; i++) {
          fetchPositionData(i);
        }
        // setParentLevel1(parseInt(parentLevel?.slice(-4)[0]?.data));
        // setParentLevel2(parseInt(parentLevel?.slice(-3)[0]?.data));
        // setParentLevel3(parseInt(parentLevel?.slice(-2)[0]?.data));
        // setParentLevel4(parseInt(parentLevel?.slice(-1)[0]?.data));
      }
    };

    fetchData();
  }, [myPosition]);
  // Second-Child-Level
  const fetchId = async (data: any, index: any) => {
    const address = await contract1?.call("IdToAddress", [data]);

    try {
      const data = await contract1?.call("postionToId", [
        address,
        cycleNo,
        +params.id,
        index,
      ]);
      const userAddress = await contract1?.call("IdToAddress", [
        parseInt(data),
      ]);
      return userAddress;
    } catch (error) {
      return { index, error };
    }
  };
  const fetchId2 = async (data: any, index: any) => {
    const address = await contract1?.call("IdToAddress", [data]);

    try {
      const data = await contract1?.call("postionToId", [
        address,
        cycleNo,
        // +params.id,
        2,
        index,
      ]);
      const userAddress = await contract1?.call("IdToAddress", [
        parseInt(data),
      ]);
      return { data, userAddress };
    } catch (error) {
      return { index, error };
    }
  };
  // 2
  useEffect(() => {
    if (parentLevel?.[myPosition]?.data) {
      let BigToNumber = parseInt(parentLevel?.[myPosition]?.data);
      const myFunc = async () => {
        const userAddress = await fetchId(BigToNumber, 1);
        console.log("userAddress--ye-->", userAddress);
        setSecondLevelChild1(userAddress);
      };
      myFunc();

      // const secondFunc = async () => {
      //   const { data } = await fetchId2(BigToNumber, 1);

      //   for (let i = 1; i <= 4; i++) {
      //     const myData = parseInt(data);
      //     const userAddress = await fetchId(myData, i);

      //     setThirdLevelChildFirst((prev) => [...prev, { userAddress }]);
      //   }
      // };
      // secondFunc();
    }
  }, [parentLevel, myPosition]);
  useEffect(() => {
    if (parentLevel?.[myPosition]?.data) {
      let BigToNumber = parseInt(parentLevel?.[myPosition]?.data);
      const myFunc = async () => {
        const userAddress = await fetchId(BigToNumber, 2);
        setSecondLevelChild2(userAddress);
      };
      myFunc();
      // const secondFunc = async () => {
      //   const { data } = await fetchId2(BigToNumber, 2);

      //   for (let i = 1; i <= 4; i++) {
      //     const myData = parseInt(data);
      //     const userAddress = await fetchId(myData, i);

      //     setThirdLevelChildSecond((prev) => [...prev, { userAddress }]);
      //   }
      // };
      // secondFunc();
    }
  }, [parentLevel, myPosition]);
  useEffect(() => {
    if (parentLevel?.[myPosition]?.data) {
      let BigToNumber = parseInt(parentLevel?.[myPosition]?.data);
      const myFunc = async () => {
        const userAddress = await fetchId(BigToNumber, 3);
        setSecondLevelChild3(userAddress);
      };
      myFunc();
      // const secondFunc = async () => {
      //   const { data } = await fetchId2(BigToNumber, 3);

      //   for (let i = 1; i <= 4; i++) {
      //     const myData = parseInt(data);
      //     const userAddress = await fetchId(myData, i);

      //     setThirdLevelChildThird((prev) => [...prev, { userAddress }]);
      //   }
      // };
      // secondFunc();
    }
  }, [parentLevel, myPosition]);
  useEffect(() => {
    if (parentLevel?.[myPosition]?.data) {
      let BigToNumber = parseInt(parentLevel?.[myPosition]?.data);
      const myFunc = async () => {
        const userAddress = await fetchId(BigToNumber, 4);
        setSecondLevelChild4(userAddress);
      };
      myFunc();
      // const secondFunc = async () => {
      //   const { data } = await fetchId2(BigToNumber, 4);

      //   for (let i = 1; i <= 4; i++) {
      //     const myData = parseInt(data);
      //     const userAddress = await fetchId(myData, i);

      //     setThirdLevelChildFourth((prev) => [...prev, { userAddress }]);
      //   }
      // };
      // secondFunc();
    }
  }, [parentLevel, myPosition]);

  const nextNumber = Number(params.id) + 1 === 9 ? 1 : Number(params.id) + 1;
  const previousNumber =
    Number(params.id) - 1 === 0 ? 8 : Number(params.id) - 1;

  const backHandler = () => {
    if (myPosition > 1) {
      setMyPosition((prev) => prev - 1);
    }
  };
  const nextHandler = () => {
    if (myPosition < 4) {
      setMyPosition((prev) => prev + 1);
    }
  };

  return (
    <div className="z-10  mt-10 lg:ml-10  lg:mt-0">
      <div className="relative rounded-[9px] border-none bg-[#2c0219] p-3 text-center font-san sm:p-6 sm:py-12">
        <h1 className="mb-10 text-[25px] font-medium text-[#9168bf]">
          G3X2 Matrix
        </h1>
        <h1 className="mx-auto mb-[20px] flex h-[80px] w-[200px] items-center justify-center rounded-lg border-2 border-[#ae7ddd] bg-[#1e1c2f] pl-[8px] pr-[8px] text-3xl font-bold text-[#ae7ddd] sm:w-[340px] xl:w-[440px]">
          {UseFormatNumber(user?.[0])}
        </h1>

        <div className="flex items-center text-white">
          <Link
            href={`/view2/g3x2-matrix/${previousNumber}/?uid=${uid}`}
            className="rounded-3xl border border-[#9168bf] p-2 text-[10px] text-white sm:text-[18px]"
          >
            <span className="sm:text-xl">&lt;</span> {previousNumber}
          </Link>

          <div className="z-10 mx-auto w-[70%] rounded-lg bg-[#9168bf] p-5 sm:w-[340px] xl:w-[440px]">
            <div className="flex justify-center">
              {/* {parentLevel?.[1]?.userAddress !== undefined ? (
                <a className="ml-[-5px] flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full border bg-[#9168bf] text-white sm:h-[70px] sm:w-[70px] xl:h-[80px] xl:w-[80px]">
                  <UserId2
                    userAddress={parentLevel?.[myPosition]?.userAddress}
                  />
                </a>
              ) : (
                <a className="ml-[-5px] mt-[16px] flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full border text-white sm:h-[70px] sm:w-[70px] xl:h-[80px] xl:w-[80px]"></a>
              )} */}
              <h1 className="text-white md:text-[25px]">
                ID {UseFormatNumber(user?.[0])}
              </h1>
            </div>
            <div className="mt-3 flex flex-col items-end">
              <h1 className="font-bold text-white md:text-[20px]">
                {UseFormatEther(balance)} DAI
              </h1>
            </div>
          </div>

          <Link
            href={`/view2/g3x2-matrix/${nextNumber}/?uid=${uid}`}
            className="rounded-3xl border border-[#9168bf] p-2 text-[10px] text-white sm:text-[18px]"
          >
            {nextNumber} <span className="sm:text-xl">&gt;</span>
          </Link>
        </div>

        <div className="sm:w-full">
          <div className="px-5 md:px-[50px] lg:px-5 xl:px-[50px]">
            <div className="flex justify-center">
              {/* <div className=" h-[15px] w-2 border-l border-dashed border-purple-500  sm:h-[65px]"></div> */}
            </div>
            <div className="flex justify-between">
              <button onClick={backHandler} className="">
                {" "}
              </button>
              <div className="flex justify-center  sm:mt-[-10px] sm:justify-center">
                {parentLevel?.[1]?.userAddress !== undefined ? (
                  <div className="flex flex-col items-center  ">
                    {/* <a className="ml-[-5px] flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full border bg-[#9168bf] text-white sm:h-[70px] sm:w-[70px] xl:h-[80px] xl:w-[80px]">
                      <UserId2
                        userAddress={parentLevel?.[myPosition]?.userAddress}
                      />
                    </a> */}
                    <div className="-mt-[32px] flex  gap-x-[2px] sm:gap-x-[82px]  ">
                      <div className="h-[20px] w-2 rotate-[50deg] transform border-l border-dashed  border-purple-500 sm:mt-[-14px] sm:h-[268px]"></div>
                      <div className="mt-8 h-[9.5px] w-2 border-l  rotate-[20deg]   border-dashed border-purple-500 sm:h-[174px]"></div>
                      <div className="mt-8 h-[20px] w-2 rotate-[-20deg] transform  border-l border-dashed border-purple-500  sm:ml-[-3px] sm:h-[170px]"></div>
                      <div className="h-[20px] w-2  rotate-[-50deg] transform  border-l border-dashed border-purple-500  sm:ml-[-3px] sm:mt-[-15px] sm:h-[260px]"></div>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center  ">
                    {/* <a className="ml-[-5px] mt-[16px] flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full border text-white sm:h-[70px] sm:w-[70px] xl:h-[80px] xl:w-[80px]"></a> */}
                    <div className="-mt-[32px] flex  gap-x-[2px] sm:gap-x-[82px]  ">
                      <div className="h-[20px] w-2 rotate-[50deg] transform border-l border-dashed  border-purple-500 sm:mt-[-14px] sm:h-[268px]"></div>
                      <div className="mt-8 h-[9.5px] w-2 border-l  rotate-[20deg]   border-dashed border-purple-500 sm:h-[174px]"></div>
                      <div className="mt-8 h-[20px] w-2 rotate-[-20deg] transform  border-l border-dashed border-purple-500  sm:ml-[-3px] sm:h-[170px]"></div>
                      <div className="h-[20px] w-2  rotate-[-50deg] transform  border-l border-dashed border-purple-500  sm:ml-[-3px] sm:mt-[-15px] sm:h-[260px]"></div>
                    </div>
                  </div>
                )}
              </div>
              <button onClick={nextHandler} className=""></button>
            </div>

            <div className="flex justify-center  sm:justify-center ">
              <div className="flex gap-x-2 sm:mt-[-50px] sm:gap-x-2">
                {secondLeveLChild1 !== undefined ? (
                  <div className="flex flex-col items-center">
                    <a className="ml-[-5px] flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full border bg-purple-500 text-white sm:h-[50px] sm:w-[50px]">
                      {/* <UserId2 userAddress={secondLeveLChild1} /> */}
                      <UserId2 userAddress={parentLevel?.[1]?.userAddress} />
                    </a>
                    <div className="  flex justify-center gap-x-[2px] sm:gap-x-[20px]  ">
                      <div className="h-[20px] w-2 rotate-[50deg] transform border-l border-dashed  border-purple-500 sm:mt-[-5px] sm:h-[60px]"></div>
                      <div className=" h-[9.5px] w-2 border-l   border-dashed border-purple-500 sm:h-[42px]"></div>
                      <div className="ml-[-2px] mt-[-5px] h-[20px] w-2 rotate-[-30deg] transform  border-l border-dashed border-purple-500  sm:ml-[-3px] sm:mt-[-10px] sm:h-[60px]"></div>
                      <div className="ml-[-2px] mt-[-5px] h-[20px] w-2 rotate-[-50deg] transform  border-l border-dashed border-purple-500  sm:ml-[-3px] sm:mt-[-10px] sm:h-[60px]"></div>
                    </div>
                    {/* <div className="mt-[-10px] flex gap-x-2 sm:mt-[-12px] sm:gap-x-3">
                      {thirdLeveLChildFirst?.slice(-1)[0]?.userAddress !==
                      undefined ? (
                        <a className="ml-[-5px] flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full border bg-purple-500 text-white sm:h-[40px] sm:w-[40px]">
                          <UserId2
                            userAddress={
                              thirdLeveLChildFirst?.slice(-1)[0]?.userAddress
                            }
                          />
                        </a>
                      ) : (
                        <a className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer rounded-full border sm:h-[40px] sm:w-[40px] "></a>
                      )}
                      {thirdLeveLChildFirst?.slice(-2)[0]?.userAddress !==
                      undefined ? (
                        <a className="ml-[-5px] flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full border bg-purple-500 text-white sm:h-[40px] sm:w-[40px]">
                          <UserId2
                            userAddress={
                              thirdLeveLChildFirst?.slice(-2)[0]?.userAddress
                            }
                          />
                        </a>
                      ) : (
                        <a className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer rounded-full border sm:h-[40px] sm:w-[40px] "></a>
                      )}
                      {thirdLeveLChildFirst?.slice(-3)[0]?.userAddress !==
                      undefined ? (
                        <a className="ml-[-5px] flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full border bg-purple-500 text-white sm:h-[40px] sm:w-[40px]">
                          <UserId2
                            userAddress={
                              thirdLeveLChildFirst?.slice(-3)[0]?.userAddress
                            }
                          />
                        </a>
                      ) : (
                        <a className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer rounded-full border sm:h-[40px] sm:w-[40px] "></a>
                      )}
                      {thirdLeveLChildFirst?.slice(-4)[0]?.userAddress !==
                      undefined ? (
                        <a className="ml-[-5px] flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full border bg-purple-500 text-white sm:h-[40px] sm:w-[40px]">
                          <UserId2
                            userAddress={
                              thirdLeveLChildFirst?.slice(-4)[0]?.userAddress
                            }
                          />
                        </a>
                      ) : (
                        <a className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer rounded-full border sm:h-[40px] sm:w-[40px] "></a>
                      )}
                    </div> */}
                    <div className="mt-[-10px] flex gap-x-2 sm:mt-[-12px] sm:gap-x-3">
                      {secondLeveLChild1 !== undefined ? (
                        <a className="ml-[-5px] flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full border bg-purple-500 text-white sm:h-[40px] sm:w-[40px]">
                          <UserId2 userAddress={secondLeveLChild1} />
                        </a>
                      ) : (
                        <a className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer rounded-full border sm:h-[40px] sm:w-[40px] "></a>
                      )}
                      {secondLeveLChild2 !== undefined ? (
                        <a className="ml-[-5px] flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full border bg-purple-500 text-white sm:h-[40px] sm:w-[40px]">
                          <UserId2 userAddress={secondLeveLChild2} />
                        </a>
                      ) : (
                        <a className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer rounded-full border sm:h-[40px] sm:w-[40px] "></a>
                      )}
                      {secondLeveLChild3 !== undefined ? (
                        <a className="ml-[-5px] flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full border bg-purple-500 text-white sm:h-[40px] sm:w-[40px]">
                          <UserId2 userAddress={secondLeveLChild3} />
                        </a>
                      ) : (
                        <a className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer rounded-full border sm:h-[40px] sm:w-[40px] "></a>
                      )}
                      {secondLeveLChild4 !== undefined ? (
                        <a className="ml-[-5px] flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full border bg-purple-500 text-white sm:h-[40px] sm:w-[40px]">
                          <UserId2 userAddress={secondLeveLChild4} />
                        </a>
                      ) : (
                        <a className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer rounded-full border sm:h-[40px] sm:w-[40px] "></a>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center">
                    <a className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer rounded-full border sm:h-[50px] sm:w-[50px] "></a>
                    <div className="  flex justify-center gap-x-[2px] sm:gap-x-[20px]  ">
                      <div className="h-[20px] w-2 rotate-[50deg] transform border-l border-dashed  border-purple-500 sm:mt-[-5px] sm:h-[60px]"></div>
                      <div className=" h-[9.5px] w-2 border-l   border-dashed border-purple-500 sm:h-[42px]"></div>
                      <div className="ml-[-2px] mt-[-5px] h-[20px] w-2 rotate-[-30deg] transform  border-l border-dashed border-purple-500  sm:ml-[-3px] sm:mt-[-10px] sm:h-[60px]"></div>
                      <div className="ml-[-2px] mt-[-5px] h-[20px] w-2 rotate-[-50deg] transform  border-l border-dashed border-purple-500  sm:ml-[-3px] sm:mt-[-10px] sm:h-[60px]"></div>
                    </div>
                  </div>
                )}
                {secondLeveLChild2 !== undefined ? (
                  <div className="flex flex-col items-center">
                    <a className="ml-[-5px] flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full border bg-purple-500 text-white sm:h-[50px] sm:w-[50px]">
                      {/* <UserId2 userAddress={secondLeveLChild2} /> */}
                      <UserId2 userAddress={parentLevel?.[2]?.userAddress} />
                    </a>
                    <div className="  flex justify-center gap-x-[2px] sm:gap-x-[20px]  ">
                      <div className="h-[20px] w-2 rotate-[50deg] transform border-l border-dashed  border-purple-500 sm:mt-[-5px] sm:h-[60px]"></div>
                      <div className=" h-[9.5px] w-2 border-l   border-dashed border-purple-500 sm:h-[42px]"></div>
                      <div className="ml-[-2px] mt-[-5px] h-[20px] w-2 rotate-[-30deg] transform  border-l border-dashed border-purple-500  sm:ml-[-3px] sm:mt-[-10px] sm:h-[60px]"></div>
                      <div className="ml-[-2px] mt-[-5px] h-[20px] w-2 rotate-[-50deg] transform  border-l border-dashed border-purple-500  sm:ml-[-3px] sm:mt-[-10px] sm:h-[60px]"></div>
                    </div>
                    <div className="mt-[-10px] flex gap-x-2 sm:mt-[-12px] sm:gap-x-3">
                      {thirdLeveLChildSecond?.slice(-1)[0]?.userAddress !==
                      undefined ? (
                        <a className="ml-[-5px] flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full border bg-purple-500 text-white sm:h-[40px] sm:w-[40px]">
                          <UserId2
                            userAddress={
                              thirdLeveLChildSecond?.slice(-1)[0]?.userAddress
                            }
                          />
                        </a>
                      ) : (
                        <a className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer rounded-full border sm:h-[40px] sm:w-[40px] "></a>
                      )}
                      {thirdLeveLChildSecond?.slice(-2)[0]?.userAddress !==
                      undefined ? (
                        <a className="ml-[-5px] flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full border bg-purple-500 text-white sm:h-[40px] sm:w-[40px]">
                          <UserId2
                            userAddress={
                              thirdLeveLChildSecond?.slice(-2)[0]?.userAddress
                            }
                          />
                        </a>
                      ) : (
                        <a className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer rounded-full border sm:h-[40px] sm:w-[40px] "></a>
                      )}
                      {thirdLeveLChildSecond?.slice(-3)[0]?.userAddress !==
                      undefined ? (
                        <a className="ml-[-5px] flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full border bg-purple-500 text-white sm:h-[40px] sm:w-[40px]">
                          <UserId2
                            userAddress={
                              thirdLeveLChildSecond?.slice(-3)[0]?.userAddress
                            }
                          />
                        </a>
                      ) : (
                        <a className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer rounded-full border sm:h-[40px] sm:w-[40px] "></a>
                      )}
                      {thirdLeveLChildSecond?.slice(-4)[0]?.userAddress !==
                      undefined ? (
                        <a className="ml-[-5px] flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full border bg-purple-500 text-white sm:h-[40px] sm:w-[40px]">
                          <UserId2
                            userAddress={
                              thirdLeveLChildSecond?.slice(-4)[0]?.userAddress
                            }
                          />
                        </a>
                      ) : (
                        <a className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer rounded-full border sm:h-[40px] sm:w-[40px] "></a>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center">
                    <a className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer rounded-full border sm:h-[50px] sm:w-[50px] "></a>
                    <div className="  flex justify-center gap-x-[2px] sm:gap-x-[20px]  ">
                      <div className="h-[20px] w-2 rotate-[50deg] transform border-l border-dashed  border-purple-500 sm:mt-[-5px] sm:h-[60px]"></div>
                      <div className=" h-[9.5px] w-2 border-l   border-dashed border-purple-500 sm:h-[42px]"></div>
                      <div className="ml-[-2px] mt-[-5px] h-[20px] w-2 rotate-[-30deg] transform  border-l border-dashed border-purple-500  sm:ml-[-3px] sm:mt-[-10px] sm:h-[60px]"></div>
                      <div className="ml-[-2px] mt-[-5px] h-[20px] w-2 rotate-[-50deg] transform  border-l border-dashed border-purple-500  sm:ml-[-3px] sm:mt-[-10px] sm:h-[60px]"></div>
                    </div>
                  </div>
                )}
                {secondLeveLChild3 !== undefined ? (
                  <div className="flex flex-col items-center">
                    <a className="ml-[-5px] flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full border bg-purple-500 text-white sm:h-[50px] sm:w-[50px]">
                      {/* <UserId2 userAddress={secondLeveLChild3} /> */}
                      <UserId2 userAddress={parentLevel?.[3]?.userAddress} />
                    </a>
                    <div className="  flex justify-center gap-x-[2px] sm:gap-x-[20px]  ">
                      <div className="h-[20px] w-2 rotate-[50deg] transform border-l border-dashed  border-purple-500 sm:mt-[-5px] sm:h-[60px]"></div>
                      <div className=" h-[9.5px] w-2 border-l   border-dashed border-purple-500 sm:h-[42px]"></div>
                      <div className="ml-[-2px] mt-[-5px] h-[20px] w-2 rotate-[-30deg] transform  border-l border-dashed border-purple-500  sm:ml-[-3px] sm:mt-[-10px] sm:h-[60px]"></div>
                      <div className="ml-[-2px] mt-[-5px] h-[20px] w-2 rotate-[-50deg] transform  border-l border-dashed border-purple-500  sm:ml-[-3px] sm:mt-[-10px] sm:h-[60px]"></div>
                    </div>
                    <div className="mt-[-10px] flex gap-x-2 sm:mt-[-12px] sm:gap-x-3">
                      {thirdLeveLChildThird?.slice(-1)[0]?.userAddress !==
                      undefined ? (
                        <a className="ml-[-5px] flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full border bg-purple-500 text-white sm:h-[40px] sm:w-[40px]">
                          <UserId2
                            userAddress={
                              thirdLeveLChildThird?.slice(-1)[0]?.userAddress
                            }
                          />
                        </a>
                      ) : (
                        <a className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer rounded-full border sm:h-[40px] sm:w-[40px] "></a>
                      )}
                      {thirdLeveLChildThird?.slice(-2)[0]?.userAddress !==
                      undefined ? (
                        <a className="ml-[-5px] flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full border bg-purple-500 text-white sm:h-[40px] sm:w-[40px]">
                          <UserId2
                            userAddress={
                              thirdLeveLChildThird?.slice(-2)[0]?.userAddress
                            }
                          />
                        </a>
                      ) : (
                        <a className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer rounded-full border sm:h-[40px] sm:w-[40px] "></a>
                      )}
                      {thirdLeveLChildThird?.slice(-3)[0]?.userAddress !==
                      undefined ? (
                        <a className="ml-[-5px] flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full border bg-purple-500 text-white sm:h-[40px] sm:w-[40px]">
                          <UserId2
                            userAddress={
                              thirdLeveLChildThird?.slice(-3)[0]?.userAddress
                            }
                          />
                        </a>
                      ) : (
                        <a className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer rounded-full border sm:h-[40px] sm:w-[40px] "></a>
                      )}
                      {thirdLeveLChildThird?.slice(-4)[0]?.userAddress !==
                      undefined ? (
                        <a className="ml-[-5px] flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full border bg-purple-500 text-white sm:h-[40px] sm:w-[40px]">
                          <UserId2
                            userAddress={
                              thirdLeveLChildThird?.slice(-4)[0]?.userAddress
                            }
                          />
                        </a>
                      ) : (
                        <a className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer rounded-full border sm:h-[40px] sm:w-[40px] "></a>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center">
                    <a className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer rounded-full border sm:h-[50px] sm:w-[50px] "></a>
                    <div className="  flex justify-center gap-x-[2px] sm:gap-x-[20px]  ">
                      <div className="h-[20px] w-2 rotate-[50deg] transform border-l border-dashed  border-purple-500 sm:mt-[-5px] sm:h-[60px]"></div>
                      <div className=" h-[9.5px] w-2 border-l   border-dashed border-purple-500 sm:h-[42px]"></div>
                      <div className="ml-[-2px] mt-[-5px] h-[20px] w-2 rotate-[-30deg] transform  border-l border-dashed border-purple-500  sm:ml-[-3px] sm:mt-[-10px] sm:h-[60px]"></div>
                      <div className="ml-[-2px] mt-[-5px] h-[20px] w-2 rotate-[-50deg] transform  border-l border-dashed border-purple-500  sm:ml-[-3px] sm:mt-[-10px] sm:h-[60px]"></div>
                    </div>
                  </div>
                )}
                {secondLeveLChild4 !== undefined ? (
                  <div className="flex flex-col items-center">
                    <a className="ml-[-5px] flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full border bg-purple-500 text-white sm:h-[50px] sm:w-[50px]">
                      {/* <UserId2 userAddress={secondLeveLChild4} /> */}
                      <UserId2 userAddress={parentLevel?.[4]?.userAddress} />
                    </a>
                    <div className="  flex justify-center gap-x-[2px] sm:gap-x-[20px]  ">
                      <div className="h-[20px] w-2 rotate-[50deg] transform border-l border-dashed  border-purple-500 sm:mt-[-5px] sm:h-[60px]"></div>
                      <div className=" h-[9.5px] w-2 border-l   border-dashed border-purple-500 sm:h-[42px]"></div>
                      <div className="ml-[-2px] mt-[-5px] h-[20px] w-2 rotate-[-30deg] transform  border-l border-dashed border-purple-500  sm:ml-[-3px] sm:mt-[-10px] sm:h-[60px]"></div>
                      <div className="ml-[-2px] mt-[-5px] h-[20px] w-2 rotate-[-50deg] transform  border-l border-dashed border-purple-500  sm:ml-[-3px] sm:mt-[-10px] sm:h-[60px]"></div>
                    </div>
                    <div className="mt-[-10px] flex gap-x-2 sm:mt-[-12px] sm:gap-x-3">
                      {thirdLeveLChildFourth?.slice(-1)[0].userAddress !==
                      undefined ? (
                        <a className="ml-[-5px] flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full border bg-purple-500 text-white sm:h-[40px] sm:w-[40px]">
                          <UserId2
                            userAddress={
                              thirdLeveLChildFourth?.slice(-1)[0].userAddress
                            }
                          />
                        </a>
                      ) : (
                        <a className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer rounded-full border sm:h-[40px] sm:w-[40px] "></a>
                      )}
                      {thirdLeveLChildFourth?.slice(-2)[0].userAddress !==
                      undefined ? (
                        <a className="ml-[-5px] flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full border bg-purple-500 text-white sm:h-[40px] sm:w-[40px]">
                          <UserId2
                            userAddress={
                              thirdLeveLChildFourth?.slice(-2)[0].userAddress
                            }
                          />
                        </a>
                      ) : (
                        <a className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer rounded-full border sm:h-[40px] sm:w-[40px] "></a>
                      )}
                      {thirdLeveLChildFourth?.slice(-3)[0].userAddress !==
                      undefined ? (
                        <a className="ml-[-5px] flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full border bg-purple-500 text-white sm:h-[40px] sm:w-[40px]">
                          <UserId2
                            userAddress={
                              thirdLeveLChildFourth?.slice(-3)[0].userAddress
                            }
                          />
                        </a>
                      ) : (
                        <a className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer rounded-full border sm:h-[40px] sm:w-[40px] "></a>
                      )}
                      {thirdLeveLChildFourth?.slice(-4)[0].userAddress !==
                      undefined ? (
                        <a className="ml-[-5px] flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full border bg-purple-500 text-white sm:h-[40px] sm:w-[40px]">
                          <UserId2
                            userAddress={
                              thirdLeveLChildFourth?.slice(-4)[0].userAddress
                            }
                          />
                        </a>
                      ) : (
                        <a className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer rounded-full border sm:h-[40px] sm:w-[40px] "></a>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center">
                    <a className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer rounded-full border sm:h-[50px] sm:w-[50px] "></a>
                    <div className="  flex justify-center gap-x-[2px] sm:gap-x-[20px]  ">
                      <div className="h-[20px] w-2 rotate-[50deg] transform border-l border-dashed  border-purple-500 sm:mt-[-5px] sm:h-[60px]"></div>
                      <div className=" h-[9.5px] w-2 border-l   border-dashed border-purple-500 sm:h-[42px]"></div>
                      <div className="ml-[-2px] mt-[-5px] h-[20px] w-2 rotate-[-30deg] transform  border-l border-dashed border-purple-500  sm:ml-[-3px] sm:mt-[-10px] sm:h-[60px]"></div>
                      <div className="ml-[-2px] mt-[-5px] h-[20px] w-2 rotate-[-50deg] transform  border-l border-dashed border-purple-500  sm:ml-[-3px] sm:mt-[-10px] sm:h-[60px]"></div>
                    </div>
                  </div>
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
{
  /* <TransactionTable matrixLevel={Number(params.id)} userAddress={address} /> */
}
// let paginationArrData: any;

// if (pagination === 1) {
//   paginationArrData = [
//     array1.length > 0 && array1[0]?.userAddress,
//     array1.length > 0 && array1[4]?.userAddress,
//     array1.length > 0 && array1[8]?.userAddress,
//     array1.length > 0 && array1[12]?.userAddress,
//     array1.length > 0 && array1[16]?.userAddress,
//     array1.length > 0 && array1[20]?.userAddress,
//     array1.length > 0 && array1[36]?.userAddress,
//     array1.length > 0 && array1[52]?.userAddress,
//     array1.length > 0 && array1[68]?.userAddress,
//     array1.length > 0 && array1[21]?.userAddress,
//     array1.length > 0 && array1[37]?.userAddress,
//     array1.length > 0 && array1[53]?.userAddress,
//     array1.length > 0 && array1[69]?.userAddress,
//     array1.length > 0 && array1[22]?.userAddress,
//     array1.length > 0 && array1[38]?.userAddress,
//     array1.length > 0 && array1[54]?.userAddress,
//     array1.length > 0 && array1[70]?.userAddress,
//     array1.length > 0 && array1[23]?.userAddress,
//     array1.length > 0 && array1[39]?.userAddress,
//     array1.length > 0 && array1[55]?.userAddress,
//     array1.length > 0 && array1[71]?.userAddress,
//   ];
// } else if (pagination === 2)
//   paginationArrData = [
//     array1.length > 0 && array1[1]?.userAddress,
//     array1.length > 0 && array1[5]?.userAddress,
//     array1.length > 0 && array1[8]?.userAddress,
//     array1.length > 0 && array1[9]?.userAddress,
//     array1.length > 0 && array1[13]?.userAddress,
//     array1.length > 0 && array1[17]?.userAddress,
//     array1.length > 0 && array1[24]?.userAddress,
//     array1.length > 0 && array1[40]?.userAddress,
//     array1.length > 0 && array1[56]?.userAddress,
//     array1.length > 0 && array1[25]?.userAddress,
//     array1.length > 0 && array1[41]?.userAddress,
//     array1.length > 0 && array1[57]?.userAddress,
//     array1.length > 0 && array1[73]?.userAddress,
//     array1.length > 0 && array1[26]?.userAddress,
//     array1.length > 0 && array1[42]?.userAddress,
//     array1.length > 0 && array1[58]?.userAddress,
//     array1.length > 0 && array1[74]?.userAddress,
//     array1.length > 0 && array1[27]?.userAddress,
//     array1.length > 0 && array1[43]?.userAddress,
//     array1.length > 0 && array1[59]?.userAddress,
//     array1.length > 0 && array1[75]?.userAddress,
//   ];
// else if (pagination === 3) {
//   paginationArrData = [
//     array1.length > 0 && array1[2]?.userAddress,
//     array1.length > 0 && array1[6]?.userAddress,
//     array1.length > 0 && array1[10]?.userAddress,
//     array1.length > 0 && array1[14]?.userAddress,
//     array1.length > 0 && array1[18]?.userAddress,
//     array1.length > 0 && array1[28]?.userAddress,
//     array1.length > 0 && array1[44]?.userAddress,
//     array1.length > 0 && array1[60]?.userAddress,
//     array1.length > 0 && array1[76]?.userAddress,
//     array1.length > 0 && array1[29]?.userAddress,
//     array1.length > 0 && array1[45]?.userAddress,
//     array1.length > 0 && array1[61]?.userAddress,
//     array1.length > 0 && array1[77]?.userAddress,
//     array1.length > 0 && array1[30]?.userAddress,
//     array1.length > 0 && array1[46]?.userAddress,
//     array1.length > 0 && array1[62]?.userAddress,
//     array1.length > 0 && array1[78]?.userAddress,
//     array1.length > 0 && array1[31]?.userAddress,
//     array1.length > 0 && array1[47]?.userAddress,
//     array1.length > 0 && array1[63]?.userAddress,
//     array1.length > 0 && array1[79]?.userAddress,
//   ];
// } else if (pagination === 4) {
//   paginationArrData = [
//     array1.length > 0 && array1[3]?.userAddress,
//     array1.length > 0 && array1[7]?.userAddress,
//     array1.length > 0 && array1[11]?.userAddress,
//     array1.length > 0 && array1[15]?.userAddress,
//     array1.length > 0 && array1[19]?.userAddress,
//     array1.length > 0 && array1[32]?.userAddress,
//     array1.length > 0 && array1[48]?.userAddress,
//     array1.length > 0 && array1[64]?.userAddress,
//     array1.length > 0 && array1[80]?.userAddress,
//     array1.length > 0 && array1[33]?.userAddress,
//     array1.length > 0 && array1[49]?.userAddress,
//     array1.length > 0 && array1[65]?.userAddress,
//     array1.length > 0 && array1[81]?.userAddress,
//     array1.length > 0 && array1[34]?.userAddress,
//     array1.length > 0 && array1[50]?.userAddress,
//     array1.length > 0 && array1[66]?.userAddress,
//     array1.length > 0 && array1[82]?.userAddress,
//     array1.length > 0 && array1[35]?.userAddress,
//     array1.length > 0 && array1[51]?.userAddress,
//     array1.length > 0 && array1[67]?.userAddress,
//     array1.length > 0 && array1[84]?.userAddress,
//   ];
// } else {
//   paginationArrData = [];
// }
// let allData = paginationArrData && paginationArrData.slice(1);
