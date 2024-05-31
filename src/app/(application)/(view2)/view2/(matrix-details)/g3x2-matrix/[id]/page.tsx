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
  const [myPosition, setMyPosition] = useState("0");
  const [pagination, setPagination] = useState(1);

  // myCode
  const usePosition = (
    address: any,
    cycleNo: any,
    positionId: any,
    index: any,
    onFetch: any
  ) => {
    const { data, error } = useContractRead(
      GeniosClubContract,
      "PositionToId",
      [address, cycleNo, positionId, index]
    );

    const { data: address1, isLoading } = useContractRead(
      GeniosClubContract,
      "IdToAddress",
      [myPosition]
    );
    useEffect(() => {
      if (data !== undefined) {
        onFetch(index, data, address1);
      } else if (error) {
        onFetch(index, null, null);
      }
    }, [data, address1, error, index, onFetch, myPosition]);
  };

  const [positions, setPositions] = useState(Array(85).fill(null));
  const [loading, setLoading] = useState(true);

  const handleFetch = useCallback((index: any, position: any, address: any) => {
    setPositions((prev) => {
      const newPositions = [...prev];
      setMyPosition(position);
      newPositions[index - 1] = { position, address };
      return newPositions;
    });
  }, []);

  useEffect(() => {
    const allFetched = positions.every((pos) => pos !== null);
    if (allFetched) {
      setLoading(false);
    }
  }, [positions]);

  const PositionFetcher = ({
    address,
    cycleNo,
    positionId,
    index,
    onFetch,
  }: {
    address: any;
    cycleNo: any;
    positionId: any;
    index: any;
    onFetch: any;
  }) => {
    usePosition(address, positionId, cycleNo, index, onFetch);
    return null;
  };

  const nextNumber = Number(params.id) + 1 === 9 ? 1 : Number(params.id) + 1;
  const previousNumber =
    Number(params.id) - 1 === 0 ? 8 : Number(params.id) - 1;

  const [positionArray, setPositionArray] = useState<any[]>([
    pagination === 1
      ? [
          positions?.[0],
          positions?.[4],
          positions?.[8],
          positions?.[12],
          positions?.[16],
          positions?.[20],
          positions?.[36],
          positions?.[52],
          positions?.[68],
          positions?.[21],
          positions?.[37],
          positions?.[53],
          positions?.[69],
          positions?.[22],
          positions?.[38],
          positions?.[54],
          positions?.[70],
          positions?.[23],
          positions?.[39],
          positions?.[55],
          positions?.[71],
        ]
      : pagination === 2
      ? [
          positions?.[1],
          positions?.[5],
          positions?.[8],
          positions?.[9],
          positions?.[13],
          positions?.[17],
          positions?.[24],
          positions?.[40],
          positions?.[56],
          positions?.[25],
          positions?.[41],
          positions?.[57],
          positions?.[73],
          positions?.[26],
          positions?.[42],
          positions?.[58],
          positions?.[74],
          positions?.[27],
          positions?.[43],
          positions?.[59],
          positions?.[75],
        ]
      : pagination === 3
      ? [
          positions?.[2],
          positions?.[6],
          positions?.[10],
          positions?.[14],
          positions?.[18],
          positions?.[28],
          positions?.[44],
          positions?.[60],
          positions?.[76],
          positions?.[29],
          positions?.[45],
          positions?.[61],
          positions?.[77],
          positions?.[30],
          positions?.[46],
          positions?.[62],
          positions?.[78],
          positions?.[31],
          positions?.[47],
          positions?.[63],
          positions?.[79],
        ]
      : pagination === 4
      ? [
          positions?.[3],
          positions?.[7],
          positions?.[11],
          positions?.[15],
          positions?.[19],
          positions?.[32],
          positions?.[48],
          positions?.[64],
          positions?.[80],
          positions?.[33],
          positions?.[49],
          positions?.[65],
          positions?.[81],
          positions?.[34],
          positions?.[50],
          positions?.[66],
          positions?.[82],
          positions?.[35],
          positions?.[51],
          positions?.[67],
          positions?.[84],
        ]
      : [],
  ]);

  return (
    <div className="z-10  mt-10 lg:ml-10  lg:mt-0">
      <div className="relative rounded-[9px] border-none bg-[#2c0219] p-3 text-center font-san sm:p-6 sm:py-12">
        <h1 className="mb-10 text-[25px] font-medium text-[#9168bf]">
          G3X2 Matrix
        </h1>
        {Array.from({ length: 85 }, (_, i) => (
          <PositionFetcher
            key={i + 1}
            address={address}
            cycleNo={cycleNo}
            positionId={Number(params.id)}
            index={i + 1}
            onFetch={handleFetch}
          />
        ))}

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
                onClick={() => setPagination((prev) => prev - 1)}
                className="rounded-full p-3 border h-14"
              >
                {" "}
                Prev
              </button>
              <div className="flex justify-center  sm:mt-[-10px] sm:justify-center">
                {parseInt(positions?.[0]?.position) !== undefined ? (
                  <div className="flex flex-col items-center  ">
                    <a className="ml-[-5px] flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full border bg-[#9168bf] text-white sm:h-[70px] sm:w-[70px] xl:h-[80px] xl:w-[80px]">
                      <UserId2 userAddress={parseInt(positionArray?.[0])} />
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
                onClick={() => setPagination((prev) => prev + 1)}
                className="rounded-full p-3 border h-14"
              >
                Next
              </button>
            </div>

            <div className="flex justify-center  sm:justify-center ">
              <div className="flex gap-x-2 sm:mt-[-50px] sm:gap-x-2">
                {parseInt(positionArray?.[1]) !== undefined ? (
                  <div className="flex flex-col items-center">
                    <a className="ml-[-5px] flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full border bg-purple-500 text-white sm:h-[50px] sm:w-[50px]">
                      <UserId2 userAddress={parseInt(positionArray?.[1])} />
                    </a>
                    <div className="  flex justify-center gap-x-[2px] sm:gap-x-[20px]  ">
                      <div className="h-[20px] w-2 rotate-[50deg] transform border-l border-dashed  border-purple-500 sm:mt-[-5px] sm:h-[60px]"></div>
                      <div className=" h-[9.5px] w-2 border-l   border-dashed border-purple-500 sm:h-[42px]"></div>
                      <div className="ml-[-2px] mt-[-5px] h-[20px] w-2 rotate-[-30deg] transform  border-l border-dashed border-purple-500  sm:ml-[-3px] sm:mt-[-10px] sm:h-[60px]"></div>
                      <div className="ml-[-2px] mt-[-5px] h-[20px] w-2 rotate-[-50deg] transform  border-l border-dashed border-purple-500  sm:ml-[-3px] sm:mt-[-10px] sm:h-[60px]"></div>
                    </div>
                    <div className="mt-[-10px] flex gap-x-2 sm:mt-[-12px] sm:gap-x-3">
                      {parseInt(positionArray?.[5]) !== undefined ? (
                        <a className="ml-[-5px] flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full border bg-purple-500 text-white sm:h-[40px] sm:w-[40px]">
                          <UserId2 userAddress={parseInt(positionArray?.[5])} />
                        </a>
                      ) : (
                        <a className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer rounded-full border sm:h-[40px] sm:w-[40px] "></a>
                      )}
                      {parseInt(positionArray?.[6]) !== undefined ? (
                        <a className="ml-[-5px] flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full border bg-purple-500 text-white sm:h-[40px] sm:w-[40px]">
                          <UserId2 userAddress={parseInt(positionArray?.[6])} />
                        </a>
                      ) : (
                        <a className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer rounded-full border sm:h-[40px] sm:w-[40px] "></a>
                      )}
                      {parseInt(positionArray?.[7]) !== undefined ? (
                        <a className="ml-[-5px] flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full border bg-purple-500 text-white sm:h-[40px] sm:w-[40px]">
                          <UserId2 userAddress={parseInt(positionArray?.[7])} />
                        </a>
                      ) : (
                        <a className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer rounded-full border sm:h-[40px] sm:w-[40px] "></a>
                      )}
                      {parseInt(positionArray?.[8]) !== undefined ? (
                        <a className="ml-[-5px] flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full border bg-purple-500 text-white sm:h-[40px] sm:w-[40px]">
                          <UserId2 userAddress={parseInt(positionArray?.[8])} />
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
                      {parseInt(positions?.[0]?.position) !== undefined ? (
                        <a className="ml-[-5px] flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full border bg-purple-500 text-white sm:h-[40px] sm:w-[40px]">
                          <UserId2
                            userAddress={parseInt(positions?.[0]?.position)}
                          />
                        </a>
                      ) : (
                        <a className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer rounded-full border sm:h-[40px] sm:w-[40px] "></a>
                      )}
                      {parseInt(positions?.[0]?.position) !== undefined ? (
                        <a className="ml-[-5px] flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full border bg-purple-500 text-white sm:h-[40px] sm:w-[40px]">
                          <UserId2
                            userAddress={parseInt(positions?.[0]?.position)}
                          />
                        </a>
                      ) : (
                        <a className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer rounded-full border sm:h-[40px] sm:w-[40px] "></a>
                      )}
                      {parseInt(positions?.[0]?.position) !== undefined ? (
                        <a className="ml-[-5px] flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full border bg-purple-500 text-white sm:h-[40px] sm:w-[40px]">
                          <UserId2
                            userAddress={parseInt(positions?.[0]?.position)}
                          />
                        </a>
                      ) : (
                        <a className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer rounded-full border sm:h-[40px] sm:w-[40px] "></a>
                      )}
                      {parseInt(positions?.[0]?.position) !== undefined ? (
                        <a className="ml-[-5px] flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full border bg-purple-500 text-white sm:h-[40px] sm:w-[40px]">
                          <UserId2
                            userAddress={parseInt(positions?.[0]?.position)}
                          />
                        </a>
                      ) : (
                        <a className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer rounded-full border sm:h-[40px] sm:w-[40px] "></a>
                      )}
                    </div>
                  </div>
                )}
                {parseInt(positionArray?.[2]) !== undefined ? (
                  <div className="flex flex-col items-center">
                    <a className="ml-[-5px] flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full border bg-purple-500 text-white sm:h-[50px] sm:w-[50px]">
                      <UserId2 userAddress={parseInt(positionArray?.[2])} />
                    </a>
                    <div className="  flex justify-center gap-x-[2px] sm:gap-x-[20px]  ">
                      <div className="h-[20px] w-2 rotate-[50deg] transform border-l border-dashed  border-purple-500 sm:mt-[-5px] sm:h-[60px]"></div>
                      <div className=" h-[9.5px] w-2 border-l   border-dashed border-purple-500 sm:h-[42px]"></div>
                      <div className="ml-[-2px] mt-[-5px] h-[20px] w-2 rotate-[-30deg] transform  border-l border-dashed border-purple-500  sm:ml-[-3px] sm:mt-[-10px] sm:h-[60px]"></div>
                      <div className="ml-[-2px] mt-[-5px] h-[20px] w-2 rotate-[-50deg] transform  border-l border-dashed border-purple-500  sm:ml-[-3px] sm:mt-[-10px] sm:h-[60px]"></div>
                    </div>
                    <div className="mt-[-10px] flex gap-x-2 sm:mt-[-12px] sm:gap-x-3">
                      {parseInt(positionArray?.[9]) !== undefined ? (
                        <a className="ml-[-5px] flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full border bg-purple-500 text-white sm:h-[40px] sm:w-[40px]">
                          <UserId2 userAddress={parseInt(positionArray?.[9])} />
                        </a>
                      ) : (
                        <a className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer rounded-full border sm:h-[40px] sm:w-[40px] "></a>
                      )}
                      {parseInt(positionArray?.[10]) !== undefined ? (
                        <a className="ml-[-5px] flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full border bg-purple-500 text-white sm:h-[40px] sm:w-[40px]">
                          <UserId2
                            userAddress={parseInt(positionArray?.[10])}
                          />
                        </a>
                      ) : (
                        <a className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer rounded-full border sm:h-[40px] sm:w-[40px] "></a>
                      )}
                      {parseInt(positionArray?.[11]) !== undefined ? (
                        <a className="ml-[-5px] flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full border bg-purple-500 text-white sm:h-[40px] sm:w-[40px]">
                          <UserId2
                            userAddress={parseInt(positionArray?.[11])}
                          />
                        </a>
                      ) : (
                        <a className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer rounded-full border sm:h-[40px] sm:w-[40px] "></a>
                      )}
                      {parseInt(positionArray?.[12]) !== undefined ? (
                        <a className="ml-[-5px] flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full border bg-purple-500 text-white sm:h-[40px] sm:w-[40px]">
                          <UserId2
                            userAddress={parseInt(positionArray?.[12])}
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
                    <div className="mt-[-10px] flex gap-x-2 sm:mt-[-12px] sm:gap-x-3">
                      {parseInt(positions?.[0]?.position) !== undefined ? (
                        <a className="ml-[-5px] flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full border bg-purple-500 text-white sm:h-[40px] sm:w-[40px]">
                          <UserId2
                            userAddress={parseInt(positions?.[0]?.position)}
                          />
                        </a>
                      ) : (
                        <a className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer rounded-full border sm:h-[40px] sm:w-[40px] "></a>
                      )}
                      {parseInt(positions?.[0]?.position) !== undefined ? (
                        <a className="ml-[-5px] flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full border bg-purple-500 text-white sm:h-[40px] sm:w-[40px]">
                          <UserId2
                            userAddress={parseInt(positions?.[0]?.position)}
                          />
                        </a>
                      ) : (
                        <a className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer rounded-full border sm:h-[40px] sm:w-[40px] "></a>
                      )}
                      {parseInt(positions?.[0]?.position) !== undefined ? (
                        <a className="ml-[-5px] flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full border bg-purple-500 text-white sm:h-[40px] sm:w-[40px]">
                          <UserId2
                            userAddress={parseInt(positions?.[0]?.position)}
                          />
                        </a>
                      ) : (
                        <a className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer rounded-full border sm:h-[40px] sm:w-[40px] "></a>
                      )}
                      {parseInt(positions?.[0]?.position) !== undefined ? (
                        <a className="ml-[-5px] flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full border bg-purple-500 text-white sm:h-[40px] sm:w-[40px]">
                          <UserId2
                            userAddress={parseInt(positions?.[0]?.position)}
                          />
                        </a>
                      ) : (
                        <a className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer rounded-full border sm:h-[40px] sm:w-[40px] "></a>
                      )}
                    </div>
                  </div>
                )}
                {parseInt(positionArray?.[3]) !== undefined ? (
                  <div className="flex flex-col items-center">
                    <a className="ml-[-5px] flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full border bg-purple-500 text-white sm:h-[50px] sm:w-[50px]">
                      <UserId2 userAddress={parseInt(positionArray?.[3])} />
                    </a>
                    <div className="  flex justify-center gap-x-[2px] sm:gap-x-[20px]  ">
                      <div className="h-[20px] w-2 rotate-[50deg] transform border-l border-dashed  border-purple-500 sm:mt-[-5px] sm:h-[60px]"></div>
                      <div className=" h-[9.5px] w-2 border-l   border-dashed border-purple-500 sm:h-[42px]"></div>
                      <div className="ml-[-2px] mt-[-5px] h-[20px] w-2 rotate-[-30deg] transform  border-l border-dashed border-purple-500  sm:ml-[-3px] sm:mt-[-10px] sm:h-[60px]"></div>
                      <div className="ml-[-2px] mt-[-5px] h-[20px] w-2 rotate-[-50deg] transform  border-l border-dashed border-purple-500  sm:ml-[-3px] sm:mt-[-10px] sm:h-[60px]"></div>
                    </div>
                    <div className="mt-[-10px] flex gap-x-2 sm:mt-[-12px] sm:gap-x-3">
                      {parseInt(positionArray?.[13]) !== undefined ? (
                        <a className="ml-[-5px] flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full border bg-purple-500 text-white sm:h-[40px] sm:w-[40px]">
                          <UserId2
                            userAddress={parseInt(positionArray?.[13])}
                          />
                        </a>
                      ) : (
                        <a className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer rounded-full border sm:h-[40px] sm:w-[40px] "></a>
                      )}
                      {parseInt(positionArray?.[14]) !== undefined ? (
                        <a className="ml-[-5px] flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full border bg-purple-500 text-white sm:h-[40px] sm:w-[40px]">
                          <UserId2
                            userAddress={parseInt(positionArray?.[14])}
                          />
                        </a>
                      ) : (
                        <a className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer rounded-full border sm:h-[40px] sm:w-[40px] "></a>
                      )}
                      {parseInt(positionArray?.[15]) !== undefined ? (
                        <a className="ml-[-5px] flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full border bg-purple-500 text-white sm:h-[40px] sm:w-[40px]">
                          <UserId2
                            userAddress={parseInt(positionArray?.[15])}
                          />
                        </a>
                      ) : (
                        <a className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer rounded-full border sm:h-[40px] sm:w-[40px] "></a>
                      )}
                      {parseInt(positionArray?.[16]) !== undefined ? (
                        <a className="ml-[-5px] flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full border bg-purple-500 text-white sm:h-[40px] sm:w-[40px]">
                          <UserId2
                            userAddress={parseInt(positionArray?.[16])}
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
                    <div className="mt-[-10px] flex gap-x-2 sm:mt-[-12px] sm:gap-x-3">
                      {parseInt(positions?.[0]?.position) !== undefined ? (
                        <a className="ml-[-5px] flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full border bg-purple-500 text-white sm:h-[40px] sm:w-[40px]">
                          <UserId2
                            userAddress={parseInt(positions?.[0]?.position)}
                          />
                        </a>
                      ) : (
                        <a className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer rounded-full border sm:h-[40px] sm:w-[40px] "></a>
                      )}
                      {parseInt(positions?.[0]?.position) !== undefined ? (
                        <a className="ml-[-5px] flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full border bg-purple-500 text-white sm:h-[40px] sm:w-[40px]">
                          <UserId2
                            userAddress={parseInt(positions?.[0]?.position)}
                          />
                        </a>
                      ) : (
                        <a className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer rounded-full border sm:h-[40px] sm:w-[40px] "></a>
                      )}
                      {parseInt(positions?.[0]?.position) !== undefined ? (
                        <a className="ml-[-5px] flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full border bg-purple-500 text-white sm:h-[40px] sm:w-[40px]">
                          <UserId2
                            userAddress={parseInt(positions?.[0]?.position)}
                          />
                        </a>
                      ) : (
                        <a className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer rounded-full border sm:h-[40px] sm:w-[40px] "></a>
                      )}
                      {parseInt(positions?.[0]?.position) !== undefined ? (
                        <a className="ml-[-5px] flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full border bg-purple-500 text-white sm:h-[40px] sm:w-[40px]">
                          <UserId2
                            userAddress={parseInt(positions?.[0]?.position)}
                          />
                        </a>
                      ) : (
                        <a className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer rounded-full border sm:h-[40px] sm:w-[40px] "></a>
                      )}
                    </div>
                  </div>
                )}
                {parseInt(positionArray?.[4]) !== undefined ? (
                  <div className="flex flex-col items-center">
                    <a className="ml-[-5px] flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full border bg-purple-500 text-white sm:h-[50px] sm:w-[50px]">
                      <UserId2 userAddress={parseInt(positionArray?.[4])} />
                    </a>
                    <div className="  flex justify-center gap-x-[2px] sm:gap-x-[20px]  ">
                      <div className="h-[20px] w-2 rotate-[50deg] transform border-l border-dashed  border-purple-500 sm:mt-[-5px] sm:h-[60px]"></div>
                      <div className=" h-[9.5px] w-2 border-l   border-dashed border-purple-500 sm:h-[42px]"></div>
                      <div className="ml-[-2px] mt-[-5px] h-[20px] w-2 rotate-[-30deg] transform  border-l border-dashed border-purple-500  sm:ml-[-3px] sm:mt-[-10px] sm:h-[60px]"></div>
                      <div className="ml-[-2px] mt-[-5px] h-[20px] w-2 rotate-[-50deg] transform  border-l border-dashed border-purple-500  sm:ml-[-3px] sm:mt-[-10px] sm:h-[60px]"></div>
                    </div>
                    <div className="mt-[-10px] flex gap-x-2 sm:mt-[-12px] sm:gap-x-3">
                      {parseInt(positionArray?.[17]) !== undefined ? (
                        <a className="ml-[-5px] flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full border bg-purple-500 text-white sm:h-[40px] sm:w-[40px]">
                          <UserId2
                            userAddress={parseInt(positionArray?.[17])}
                          />
                        </a>
                      ) : (
                        <a className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer rounded-full border sm:h-[40px] sm:w-[40px] "></a>
                      )}
                      {parseInt(positionArray?.[18]) !== undefined ? (
                        <a className="ml-[-5px] flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full border bg-purple-500 text-white sm:h-[40px] sm:w-[40px]">
                          <UserId2
                            userAddress={parseInt(positionArray?.[18])}
                          />
                        </a>
                      ) : (
                        <a className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer rounded-full border sm:h-[40px] sm:w-[40px] "></a>
                      )}
                      {parseInt(positionArray?.[19]) !== undefined ? (
                        <a className="ml-[-5px] flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full border bg-purple-500 text-white sm:h-[40px] sm:w-[40px]">
                          <UserId2
                            userAddress={parseInt(positionArray?.[19])}
                          />
                        </a>
                      ) : (
                        <a className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer rounded-full border sm:h-[40px] sm:w-[40px] "></a>
                      )}
                      {parseInt(positionArray?.[20]) !== undefined ? (
                        <a className="ml-[-5px] flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full border bg-purple-500 text-white sm:h-[40px] sm:w-[40px]">
                          <UserId2
                            userAddress={parseInt(positionArray?.[20])}
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
                    <div className="mt-[-10px] flex gap-x-2 sm:mt-[-12px] sm:gap-x-3">
                      {parseInt(positions?.[0]?.position) !== undefined ? (
                        <a className="ml-[-5px] flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full border bg-purple-500 text-white sm:h-[40px] sm:w-[40px]">
                          <UserId2
                            userAddress={parseInt(positions?.[0]?.position)}
                          />
                        </a>
                      ) : (
                        <a className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer rounded-full border sm:h-[40px] sm:w-[40px] "></a>
                      )}
                      {parseInt(positions?.[0]?.position) !== undefined ? (
                        <a className="ml-[-5px] flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full border bg-purple-500 text-white sm:h-[40px] sm:w-[40px]">
                          <UserId2
                            userAddress={parseInt(positions?.[0]?.position)}
                          />
                        </a>
                      ) : (
                        <a className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer rounded-full border sm:h-[40px] sm:w-[40px] "></a>
                      )}
                      {parseInt(positions?.[0]?.position) !== undefined ? (
                        <a className="ml-[-5px] flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full border bg-purple-500 text-white sm:h-[40px] sm:w-[40px]">
                          <UserId2
                            userAddress={parseInt(positions?.[0]?.position)}
                          />
                        </a>
                      ) : (
                        <a className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer rounded-full border sm:h-[40px] sm:w-[40px] "></a>
                      )}
                      {parseInt(positions?.[0]?.position) !== undefined ? (
                        <a className="ml-[-5px] flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full border bg-purple-500 text-white sm:h-[40px] sm:w-[40px]">
                          <UserId2
                            userAddress={parseInt(positions?.[0]?.position)}
                          />
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
          {/* <div className="absolute bottom-[20%] top-[80%] z-10 grid  w-full grid-cols-2 items-center md:bottom-[40%] md:top-[60%] md:gap-x-80">
            <div className="flex items-center justify-center text-white sm:text-[15px]">
              <img
                src="/reinvest.svg"
                alt=""
                className="h-[20px]  w-[20px] p-1 md:h-[40px] md:w-[40px]"
              />

              <h1 className="text-[10px] md:text-[15px]">00 </h1>
            </div>
            <div className="ml-[-100px] flex items-center justify-center text-white sm:text-[15px]">
              <img
                src="/partner.svg"
                alt=""
                className="h-[20px] w-[20px] p-1 md:h-[40px] md:w-[40px]"
              />

              <h1 className="text-[10px] md:text-[15px]">{"00"}</h1>
            </div>
          </div> */}
        </div>
      </div>
      <TransactionTable matrixLevel={Number(params.id)} userAddress={address} />
    </div>
  );
};

export default Page;
