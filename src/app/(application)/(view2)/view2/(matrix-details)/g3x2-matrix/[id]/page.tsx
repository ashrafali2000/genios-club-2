"use client";

import TransactionTable from "@/components/dashboard/mainPage/G3X2Matrixes/matrixDetails/transactionTable";
import { UseFormatEther, UseFormatNumber } from "@/lib/utils/useEthers";
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

import { useCallback, useEffect, useState } from "react";
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
  // const [myPosition, setMyPosition] = useState("0");
  const [pagination, setPagination] = useState(1);
  let index;
  let data;
  let userAddress;
  const [array1, setArray1] = useState<any[]>([
    {
      index,
      data,
      userAddress,
    },
  ]);
  // const [paginationArrData, setPaginationArrData] = useState([]);
  // const [array3, setArray3] = useState([]);
  // const [array4, setArray4] = useState([]);

  // new today code
  const [results, setResults] = useState<any[]>([]);
  const [errors, setErrors] = useState([]);
  const { contract: contract1 } = useContract(GeniosClubAddress2);
  useEffect(() => {
    const fetchData = async () => {
      if (!contract1) return;

      const fetchPositionData = async (index: any) => {
        try {
          const data = await contract1.call("PositionToId", [
            address,
            cycleNo,
            +params.id,
            index,
          ]);
          const userAddress = await contract1.call("IdToAddress", [
            parseInt(data),
          ]);
          setArray1((prev) => [...prev, { index, data, userAddress }]);
          return { index, data, userAddress };
        } catch (error) {
          return { index, error };
        }
      };

      const promises = [];
      for (let i = 0; i <= 84; i++) {
        promises.push(fetchPositionData(i));
      }

      const results = await Promise.all(promises);

      const tempResults: any = [];
      const tempErrors: any = [];

      results.forEach((result) => {
        if (result.data) {
          tempResults.push(result);
        } else if (result.error) {
          tempErrors.push(result);
        }
      });

      setResults(tempResults);
      setErrors(tempErrors);
    };

    fetchData();
  }, [contract, address, Number(params.id)]);

  const nextNumber = Number(params.id) + 1 === 9 ? 1 : Number(params.id) + 1;
  const previousNumber =
    Number(params.id) - 1 === 0 ? 8 : Number(params.id) - 1;

  // const [positionArray, setPositionArray] = useState(

  let paginationArrData: any;

  if (pagination === 1) {
    paginationArrData = [
      array1.length > 0 && array1[0]?.userAddress,
      array1.length > 0 && array1[4]?.userAddress,
      array1.length > 0 && array1[8]?.userAddress,
      array1.length > 0 && array1[12]?.userAddress,
      array1.length > 0 && array1[16]?.userAddress,
      array1.length > 0 && array1[20]?.userAddress,
      array1.length > 0 && array1[36]?.userAddress,
      array1.length > 0 && array1[52]?.userAddress,
      array1.length > 0 && array1[68]?.userAddress,
      array1.length > 0 && array1[21]?.userAddress,
      array1.length > 0 && array1[37]?.userAddress,
      array1.length > 0 && array1[53]?.userAddress,
      array1.length > 0 && array1[69]?.userAddress,
      array1.length > 0 && array1[22]?.userAddress,
      array1.length > 0 && array1[38]?.userAddress,
      array1.length > 0 && array1[54]?.userAddress,
      array1.length > 0 && array1[70]?.userAddress,
      array1.length > 0 && array1[23]?.userAddress,
      array1.length > 0 && array1[39]?.userAddress,
      array1.length > 0 && array1[55]?.userAddress,
      array1.length > 0 && array1[71]?.userAddress,
    ];
  } else if (pagination === 2)
    paginationArrData = [
      array1.length > 0 && array1[1]?.userAddress,
      array1.length > 0 && array1[5]?.userAddress,
      array1.length > 0 && array1[8]?.userAddress,
      array1.length > 0 && array1[9]?.userAddress,
      array1.length > 0 && array1[13]?.userAddress,
      array1.length > 0 && array1[17]?.userAddress,
      array1.length > 0 && array1[24]?.userAddress,
      array1.length > 0 && array1[40]?.userAddress,
      array1.length > 0 && array1[56]?.userAddress,
      array1.length > 0 && array1[25]?.userAddress,
      array1.length > 0 && array1[41]?.userAddress,
      array1.length > 0 && array1[57]?.userAddress,
      array1.length > 0 && array1[73]?.userAddress,
      array1.length > 0 && array1[26]?.userAddress,
      array1.length > 0 && array1[42]?.userAddress,
      array1.length > 0 && array1[58]?.userAddress,
      array1.length > 0 && array1[74]?.userAddress,
      array1.length > 0 && array1[27]?.userAddress,
      array1.length > 0 && array1[43]?.userAddress,
      array1.length > 0 && array1[59]?.userAddress,
      array1.length > 0 && array1[75]?.userAddress,
    ];
  else if (pagination === 3) {
    paginationArrData = [
      array1.length > 0 && array1[2]?.userAddress,
      array1.length > 0 && array1[6]?.userAddress,
      array1.length > 0 && array1[10]?.userAddress,
      array1.length > 0 && array1[14]?.userAddress,
      array1.length > 0 && array1[18]?.userAddress,
      array1.length > 0 && array1[28]?.userAddress,
      array1.length > 0 && array1[44]?.userAddress,
      array1.length > 0 && array1[60]?.userAddress,
      array1.length > 0 && array1[76]?.userAddress,
      array1.length > 0 && array1[29]?.userAddress,
      array1.length > 0 && array1[45]?.userAddress,
      array1.length > 0 && array1[61]?.userAddress,
      array1.length > 0 && array1[77]?.userAddress,
      array1.length > 0 && array1[30]?.userAddress,
      array1.length > 0 && array1[46]?.userAddress,
      array1.length > 0 && array1[62]?.userAddress,
      array1.length > 0 && array1[78]?.userAddress,
      array1.length > 0 && array1[31]?.userAddress,
      array1.length > 0 && array1[47]?.userAddress,
      array1.length > 0 && array1[63]?.userAddress,
      array1.length > 0 && array1[79]?.userAddress,
    ];
  } else if (pagination === 4) {
    paginationArrData = [
      array1.length > 0 && array1[3]?.userAddress,
      array1.length > 0 && array1[7]?.userAddress,
      array1.length > 0 && array1[11]?.userAddress,
      array1.length > 0 && array1[15]?.userAddress,
      array1.length > 0 && array1[19]?.userAddress,
      array1.length > 0 && array1[32]?.userAddress,
      array1.length > 0 && array1[48]?.userAddress,
      array1.length > 0 && array1[64]?.userAddress,
      array1.length > 0 && array1[80]?.userAddress,
      array1.length > 0 && array1[33]?.userAddress,
      array1.length > 0 && array1[49]?.userAddress,
      array1.length > 0 && array1[65]?.userAddress,
      array1.length > 0 && array1[81]?.userAddress,
      array1.length > 0 && array1[34]?.userAddress,
      array1.length > 0 && array1[50]?.userAddress,
      array1.length > 0 && array1[66]?.userAddress,
      array1.length > 0 && array1[82]?.userAddress,
      array1.length > 0 && array1[35]?.userAddress,
      array1.length > 0 && array1[51]?.userAddress,
      array1.length > 0 && array1[67]?.userAddress,
      array1.length > 0 && array1[84]?.userAddress,
    ];
  } else {
    paginationArrData = [];
  }
  let allData = paginationArrData && paginationArrData.slice(1);
  // );
  const backHandler = () => {
    if (pagination > 1) {
      setPagination((prev) => prev - 1);
    }
  };
  const nextHandler = () => {
    if (pagination < 4) {
      setPagination((prev) => prev + 1);
    }
  };

  console.log("allData---check------>", allData);
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
            <div className="flex justify-between">
              <h1 className="text-white md:text-[25px]">{Number(params.id)}</h1>
              <a href="#" className="font-bold text-white md:text-[25px]">
                ID {UseFormatNumber(user?.[0])}
              </a>
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
              <div className=" h-[15px] w-2 border-l border-dashed border-purple-500  sm:h-[65px]"></div>
            </div>
            <div className="flex justify-between">
              <button
                onClick={backHandler}
                className="rounded-full p-3 border h-14"
              >
                {" "}
                Prev
              </button>
              <div className="flex justify-center  sm:mt-[-10px] sm:justify-center">
                {allData?.[0] !== undefined ? (
                  <div className="flex flex-col items-center  ">
                    <a className="ml-[-5px] flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full border bg-[#9168bf] text-white sm:h-[70px] sm:w-[70px] xl:h-[80px] xl:w-[80px]">
                      <UserId2 userAddress={allData?.[0]} />
                    </a>

                    <div className="-mt-[32px] flex  gap-x-[2px] sm:gap-x-[82px]  ">
                      <div className="h-[20px] w-2 rotate-[50deg] transform border-l border-dashed  border-purple-500 sm:mt-[-14px] sm:h-[268px]"></div>
                      <div className="mt-8 h-[9.5px] w-2 border-l  rotate-[20deg]   border-dashed border-purple-500 sm:h-[174px]"></div>
                      <div className="mt-8 h-[20px] w-2 rotate-[-20deg] transform  border-l border-dashed border-purple-500  sm:ml-[-3px] sm:h-[170px]"></div>
                      <div className="h-[20px] w-2  rotate-[-50deg] transform  border-l border-dashed border-purple-500  sm:ml-[-3px] sm:mt-[-15px] sm:h-[260px]"></div>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center  ">
                    <a className="ml-[-5px] mt-[16px] flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full border text-white sm:h-[70px] sm:w-[70px] xl:h-[80px] xl:w-[80px]"></a>
                    <div className="-mt-[32px] flex  gap-x-[2px] sm:gap-x-[82px]  ">
                      <div className="h-[20px] w-2 rotate-[50deg] transform border-l border-dashed  border-purple-500 sm:mt-[-14px] sm:h-[268px]"></div>
                      <div className="mt-8 h-[9.5px] w-2 border-l  rotate-[20deg]   border-dashed border-purple-500 sm:h-[174px]"></div>
                      <div className="mt-8 h-[20px] w-2 rotate-[-20deg] transform  border-l border-dashed border-purple-500  sm:ml-[-3px] sm:h-[170px]"></div>
                      <div className="h-[20px] w-2  rotate-[-50deg] transform  border-l border-dashed border-purple-500  sm:ml-[-3px] sm:mt-[-15px] sm:h-[260px]"></div>
                    </div>
                  </div>
                )}
              </div>
              <button
                onClick={nextHandler}
                className="rounded-full p-3 border h-14"
              >
                Next
              </button>
            </div>

            <div className="flex justify-center  sm:justify-center ">
              <div className="flex gap-x-2 sm:mt-[-50px] sm:gap-x-2">
                {allData?.[1] !== undefined ? (
                  <div className="flex flex-col items-center">
                    <a className="ml-[-5px] flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full border bg-purple-500 text-white sm:h-[50px] sm:w-[50px]">
                      <UserId2 userAddress={allData?.[1]} />
                    </a>
                    <div className="  flex justify-center gap-x-[2px] sm:gap-x-[20px]  ">
                      <div className="h-[20px] w-2 rotate-[50deg] transform border-l border-dashed  border-purple-500 sm:mt-[-5px] sm:h-[60px]"></div>
                      <div className=" h-[9.5px] w-2 border-l   border-dashed border-purple-500 sm:h-[42px]"></div>
                      <div className="ml-[-2px] mt-[-5px] h-[20px] w-2 rotate-[-30deg] transform  border-l border-dashed border-purple-500  sm:ml-[-3px] sm:mt-[-10px] sm:h-[60px]"></div>
                      <div className="ml-[-2px] mt-[-5px] h-[20px] w-2 rotate-[-50deg] transform  border-l border-dashed border-purple-500  sm:ml-[-3px] sm:mt-[-10px] sm:h-[60px]"></div>
                    </div>
                    <div className="mt-[-10px] flex gap-x-2 sm:mt-[-12px] sm:gap-x-3">
                      {allData?.[5] !== undefined ? (
                        <a className="ml-[-5px] flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full border bg-purple-500 text-white sm:h-[40px] sm:w-[40px]">
                          <UserId2 userAddress={allData?.[5]} />
                        </a>
                      ) : (
                        <a className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer rounded-full border sm:h-[40px] sm:w-[40px] "></a>
                      )}
                      {allData?.[6] !== undefined ? (
                        <a className="ml-[-5px] flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full border bg-purple-500 text-white sm:h-[40px] sm:w-[40px]">
                          <UserId2 userAddress={allData?.[6]} />
                        </a>
                      ) : (
                        <a className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer rounded-full border sm:h-[40px] sm:w-[40px] "></a>
                      )}
                      {allData?.[7] !== undefined ? (
                        <a className="ml-[-5px] flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full border bg-purple-500 text-white sm:h-[40px] sm:w-[40px]">
                          <UserId2 userAddress={allData?.[7]} />
                        </a>
                      ) : (
                        <a className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer rounded-full border sm:h-[40px] sm:w-[40px] "></a>
                      )}
                      {allData?.[8] !== undefined ? (
                        <a className="ml-[-5px] flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full border bg-purple-500 text-white sm:h-[40px] sm:w-[40px]">
                          <UserId2 userAddress={allData?.[8]} />
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
                    <div className="mt-[-10px] flex gap-x-2 sm:mt-[-12px] sm:gap-x-3">
                      {parseInt(results?.[0]?.data) !== undefined ? (
                        <a className="ml-[-5px] flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full border bg-purple-500 text-white sm:h-[40px] sm:w-[40px]">
                          <UserId2 userAddress={parseInt(results?.[0]?.data)} />
                        </a>
                      ) : (
                        <a className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer rounded-full border sm:h-[40px] sm:w-[40px] "></a>
                      )}
                      {parseInt(results?.[0]?.data) !== undefined ? (
                        <a className="ml-[-5px] flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full border bg-purple-500 text-white sm:h-[40px] sm:w-[40px]">
                          <UserId2 userAddress={parseInt(results?.[0]?.data)} />
                        </a>
                      ) : (
                        <a className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer rounded-full border sm:h-[40px] sm:w-[40px] "></a>
                      )}
                      {parseInt(results?.[0]?.data) !== undefined ? (
                        <a className="ml-[-5px] flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full border bg-purple-500 text-white sm:h-[40px] sm:w-[40px]">
                          <UserId2 userAddress={parseInt(results?.[0]?.data)} />
                        </a>
                      ) : (
                        <a className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer rounded-full border sm:h-[40px] sm:w-[40px] "></a>
                      )}
                      {parseInt(results?.[0]?.data) !== undefined ? (
                        <a className="ml-[-5px] flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full border bg-purple-500 text-white sm:h-[40px] sm:w-[40px]">
                          <UserId2 userAddress={parseInt(results?.[0]?.data)} />
                        </a>
                      ) : (
                        <a className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer rounded-full border sm:h-[40px] sm:w-[40px] "></a>
                      )}
                    </div>
                  </div>
                )}
                {allData?.[2] !== undefined ? (
                  <div className="flex flex-col items-center">
                    <a className="ml-[-5px] flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full border bg-purple-500 text-white sm:h-[50px] sm:w-[50px]">
                      <UserId2 userAddress={allData?.[2]} />
                    </a>
                    <div className="  flex justify-center gap-x-[2px] sm:gap-x-[20px]  ">
                      <div className="h-[20px] w-2 rotate-[50deg] transform border-l border-dashed  border-purple-500 sm:mt-[-5px] sm:h-[60px]"></div>
                      <div className=" h-[9.5px] w-2 border-l   border-dashed border-purple-500 sm:h-[42px]"></div>
                      <div className="ml-[-2px] mt-[-5px] h-[20px] w-2 rotate-[-30deg] transform  border-l border-dashed border-purple-500  sm:ml-[-3px] sm:mt-[-10px] sm:h-[60px]"></div>
                      <div className="ml-[-2px] mt-[-5px] h-[20px] w-2 rotate-[-50deg] transform  border-l border-dashed border-purple-500  sm:ml-[-3px] sm:mt-[-10px] sm:h-[60px]"></div>
                    </div>
                    <div className="mt-[-10px] flex gap-x-2 sm:mt-[-12px] sm:gap-x-3">
                      {allData?.[9] !== undefined ? (
                        <a className="ml-[-5px] flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full border bg-purple-500 text-white sm:h-[40px] sm:w-[40px]">
                          <UserId2 userAddress={allData?.[9]} />
                        </a>
                      ) : (
                        <a className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer rounded-full border sm:h-[40px] sm:w-[40px] "></a>
                      )}
                      {allData?.[10] !== undefined ? (
                        <a className="ml-[-5px] flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full border bg-purple-500 text-white sm:h-[40px] sm:w-[40px]">
                          <UserId2 userAddress={allData?.[10]} />
                        </a>
                      ) : (
                        <a className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer rounded-full border sm:h-[40px] sm:w-[40px] "></a>
                      )}
                      {allData?.[11] !== undefined ? (
                        <a className="ml-[-5px] flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full border bg-purple-500 text-white sm:h-[40px] sm:w-[40px]">
                          <UserId2 userAddress={allData?.[11]} />
                        </a>
                      ) : (
                        <a className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer rounded-full border sm:h-[40px] sm:w-[40px] "></a>
                      )}
                      {allData?.[12] !== undefined ? (
                        <a className="ml-[-5px] flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full border bg-purple-500 text-white sm:h-[40px] sm:w-[40px]">
                          <UserId2 userAddress={allData?.[12]} />
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
                    <div className="mt-[-10px] flex gap-x-2 sm:mt-[-12px] sm:gap-x-3">
                      {parseInt(results?.[0]?.data) !== undefined ? (
                        <a className="ml-[-5px] flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full border bg-purple-500 text-white sm:h-[40px] sm:w-[40px]">
                          <UserId2 userAddress={parseInt(results?.[0]?.data)} />
                        </a>
                      ) : (
                        <a className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer rounded-full border sm:h-[40px] sm:w-[40px] "></a>
                      )}
                      {parseInt(results?.[0]?.data) !== undefined ? (
                        <a className="ml-[-5px] flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full border bg-purple-500 text-white sm:h-[40px] sm:w-[40px]">
                          <UserId2 userAddress={parseInt(results?.[0]?.data)} />
                        </a>
                      ) : (
                        <a className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer rounded-full border sm:h-[40px] sm:w-[40px] "></a>
                      )}
                      {parseInt(results?.[0]?.data) !== undefined ? (
                        <a className="ml-[-5px] flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full border bg-purple-500 text-white sm:h-[40px] sm:w-[40px]">
                          <UserId2 userAddress={parseInt(results?.[0]?.data)} />
                        </a>
                      ) : (
                        <a className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer rounded-full border sm:h-[40px] sm:w-[40px] "></a>
                      )}
                      {parseInt(results?.[0]?.data) !== undefined ? (
                        <a className="ml-[-5px] flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full border bg-purple-500 text-white sm:h-[40px] sm:w-[40px]">
                          <UserId2 userAddress={parseInt(results?.[0]?.data)} />
                        </a>
                      ) : (
                        <a className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer rounded-full border sm:h-[40px] sm:w-[40px] "></a>
                      )}
                    </div>
                  </div>
                )}
                {allData?.[3] !== undefined ? (
                  <div className="flex flex-col items-center">
                    <a className="ml-[-5px] flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full border bg-purple-500 text-white sm:h-[50px] sm:w-[50px]">
                      <UserId2 userAddress={allData?.[3]} />
                    </a>
                    <div className="  flex justify-center gap-x-[2px] sm:gap-x-[20px]  ">
                      <div className="h-[20px] w-2 rotate-[50deg] transform border-l border-dashed  border-purple-500 sm:mt-[-5px] sm:h-[60px]"></div>
                      <div className=" h-[9.5px] w-2 border-l   border-dashed border-purple-500 sm:h-[42px]"></div>
                      <div className="ml-[-2px] mt-[-5px] h-[20px] w-2 rotate-[-30deg] transform  border-l border-dashed border-purple-500  sm:ml-[-3px] sm:mt-[-10px] sm:h-[60px]"></div>
                      <div className="ml-[-2px] mt-[-5px] h-[20px] w-2 rotate-[-50deg] transform  border-l border-dashed border-purple-500  sm:ml-[-3px] sm:mt-[-10px] sm:h-[60px]"></div>
                    </div>
                    <div className="mt-[-10px] flex gap-x-2 sm:mt-[-12px] sm:gap-x-3">
                      {allData?.[13] !== undefined ? (
                        <a className="ml-[-5px] flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full border bg-purple-500 text-white sm:h-[40px] sm:w-[40px]">
                          <UserId2 userAddress={allData?.[13]} />
                        </a>
                      ) : (
                        <a className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer rounded-full border sm:h-[40px] sm:w-[40px] "></a>
                      )}
                      {allData?.[14] !== undefined ? (
                        <a className="ml-[-5px] flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full border bg-purple-500 text-white sm:h-[40px] sm:w-[40px]">
                          <UserId2 userAddress={allData?.[14]} />
                        </a>
                      ) : (
                        <a className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer rounded-full border sm:h-[40px] sm:w-[40px] "></a>
                      )}
                      {allData?.[15] !== undefined ? (
                        <a className="ml-[-5px] flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full border bg-purple-500 text-white sm:h-[40px] sm:w-[40px]">
                          <UserId2 userAddress={allData?.[15]} />
                        </a>
                      ) : (
                        <a className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer rounded-full border sm:h-[40px] sm:w-[40px] "></a>
                      )}
                      {allData?.[16] !== undefined ? (
                        <a className="ml-[-5px] flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full border bg-purple-500 text-white sm:h-[40px] sm:w-[40px]">
                          <UserId2 userAddress={allData?.[16]} />
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
                    <div className="mt-[-10px] flex gap-x-2 sm:mt-[-12px] sm:gap-x-3">
                      {parseInt(results?.[0]?.data) !== undefined ? (
                        <a className="ml-[-5px] flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full border bg-purple-500 text-white sm:h-[40px] sm:w-[40px]">
                          <UserId2 userAddress={parseInt(results?.[0]?.data)} />
                        </a>
                      ) : (
                        <a className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer rounded-full border sm:h-[40px] sm:w-[40px] "></a>
                      )}
                      {parseInt(results?.[0]?.data) !== undefined ? (
                        <a className="ml-[-5px] flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full border bg-purple-500 text-white sm:h-[40px] sm:w-[40px]">
                          <UserId2 userAddress={parseInt(results?.[0]?.data)} />
                        </a>
                      ) : (
                        <a className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer rounded-full border sm:h-[40px] sm:w-[40px] "></a>
                      )}
                      {parseInt(results?.[0]?.data) !== undefined ? (
                        <a className="ml-[-5px] flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full border bg-purple-500 text-white sm:h-[40px] sm:w-[40px]">
                          <UserId2 userAddress={parseInt(results?.[0]?.data)} />
                        </a>
                      ) : (
                        <a className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer rounded-full border sm:h-[40px] sm:w-[40px] "></a>
                      )}
                      {parseInt(results?.[0]?.data) !== undefined ? (
                        <a className="ml-[-5px] flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full border bg-purple-500 text-white sm:h-[40px] sm:w-[40px]">
                          <UserId2 userAddress={parseInt(results?.[0]?.data)} />
                        </a>
                      ) : (
                        <a className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer rounded-full border sm:h-[40px] sm:w-[40px] "></a>
                      )}
                    </div>
                  </div>
                )}
                {allData?.[4] !== undefined ? (
                  <div className="flex flex-col items-center">
                    <a className="ml-[-5px] flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full border bg-purple-500 text-white sm:h-[50px] sm:w-[50px]">
                      <UserId2 userAddress={allData?.[4]} />
                    </a>
                    <div className="  flex justify-center gap-x-[2px] sm:gap-x-[20px]  ">
                      <div className="h-[20px] w-2 rotate-[50deg] transform border-l border-dashed  border-purple-500 sm:mt-[-5px] sm:h-[60px]"></div>
                      <div className=" h-[9.5px] w-2 border-l   border-dashed border-purple-500 sm:h-[42px]"></div>
                      <div className="ml-[-2px] mt-[-5px] h-[20px] w-2 rotate-[-30deg] transform  border-l border-dashed border-purple-500  sm:ml-[-3px] sm:mt-[-10px] sm:h-[60px]"></div>
                      <div className="ml-[-2px] mt-[-5px] h-[20px] w-2 rotate-[-50deg] transform  border-l border-dashed border-purple-500  sm:ml-[-3px] sm:mt-[-10px] sm:h-[60px]"></div>
                    </div>
                    <div className="mt-[-10px] flex gap-x-2 sm:mt-[-12px] sm:gap-x-3">
                      {allData?.[17] !== undefined ? (
                        <a className="ml-[-5px] flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full border bg-purple-500 text-white sm:h-[40px] sm:w-[40px]">
                          <UserId2 userAddress={allData?.[17]} />
                        </a>
                      ) : (
                        <a className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer rounded-full border sm:h-[40px] sm:w-[40px] "></a>
                      )}
                      {allData?.[18] !== undefined ? (
                        <a className="ml-[-5px] flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full border bg-purple-500 text-white sm:h-[40px] sm:w-[40px]">
                          <UserId2 userAddress={allData?.[18]} />
                        </a>
                      ) : (
                        <a className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer rounded-full border sm:h-[40px] sm:w-[40px] "></a>
                      )}
                      {allData?.[19] !== undefined ? (
                        <a className="ml-[-5px] flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full border bg-purple-500 text-white sm:h-[40px] sm:w-[40px]">
                          <UserId2 userAddress={allData?.[19]} />
                        </a>
                      ) : (
                        <a className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer rounded-full border sm:h-[40px] sm:w-[40px] "></a>
                      )}
                      {allData?.[20] !== undefined ? (
                        <a className="ml-[-5px] flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full border bg-purple-500 text-white sm:h-[40px] sm:w-[40px]">
                          <UserId2 userAddress={allData?.[20]} />
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
                    <div className="mt-[-10px] flex gap-x-2 sm:mt-[-12px] sm:gap-x-3">
                      {parseInt(results?.[0]?.data) !== undefined ? (
                        <a className="ml-[-5px] flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full border bg-purple-500 text-white sm:h-[40px] sm:w-[40px]">
                          <UserId2 userAddress={parseInt(results?.[0]?.data)} />
                        </a>
                      ) : (
                        <a className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer rounded-full border sm:h-[40px] sm:w-[40px] "></a>
                      )}
                      {parseInt(results?.[0]?.data) !== undefined ? (
                        <a className="ml-[-5px] flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full border bg-purple-500 text-white sm:h-[40px] sm:w-[40px]">
                          <UserId2 userAddress={parseInt(results?.[0]?.data)} />
                        </a>
                      ) : (
                        <a className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer rounded-full border sm:h-[40px] sm:w-[40px] "></a>
                      )}
                      {parseInt(results?.[0]?.data) !== undefined ? (
                        <a className="ml-[-5px] flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full border bg-purple-500 text-white sm:h-[40px] sm:w-[40px]">
                          <UserId2 userAddress={parseInt(results?.[0]?.data)} />
                        </a>
                      ) : (
                        <a className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer rounded-full border sm:h-[40px] sm:w-[40px] "></a>
                      )}
                      {parseInt(results?.[0]?.data) !== undefined ? (
                        <a className="ml-[-5px] flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full border bg-purple-500 text-white sm:h-[40px] sm:w-[40px]">
                          <UserId2 userAddress={parseInt(results?.[0]?.data)} />
                        </a>
                      ) : (
                        <a className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer rounded-full border sm:h-[40px] sm:w-[40px] "></a>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <TransactionTable matrixLevel={Number(params.id)} userAddress={address} /> */}
    </div>
  );
};

export default Page;
