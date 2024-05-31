'use client';

import TransactionTable from '@/components/dashboard/mainPage/G3X2Matrixes/matrixDetails/transactionTable';
import { UseFormatEther, UseFormatNumber } from '@/lib/utils/useEthers';
import { useContract, useContractRead } from '@thirdweb-dev/react';
import { GeniosClubAddress, GeniosClubAbi } from '@/lib/constant';
import { useSearchParams } from 'next/navigation';
import UserId from '@/lib/utils/userId';
import Link from 'next/link';

const Page = ({ params }: any) => {
  const searchParams = useSearchParams();
  const uid = searchParams?.get('uid');

  const { contract } = useContract(GeniosClubAddress, GeniosClubAbi);
  const { data: address, isLoading } = useContractRead(
    contract,
    'IdToAddress',
    [uid]
  );

  const { contract: GeniosClubContract } = useContract(
    GeniosClubAddress,
    GeniosClubAbi
  );

  const { data: user } = useContractRead(GeniosClubContract, 'Users', [
    address,
  ]);

  const { data: levelData } = useContractRead(
    GeniosClubContract,
    'usersG3X2Matrix',
    [address, Number(params.id)]
  );

  const team =
    UseFormatNumber(levelData?.ReinvestCount) * 12 +
    levelData?.FirstLevelRefs.length +
    levelData?.SecondLevelRefs.length;

  const nextNumber = Number(params.id) + 1 === 9 ? 1 : Number(params.id) + 1;
  const previousNumber =
    Number(params.id) - 1 === 0 ? 8 : Number(params.id) - 1;

  return (
    <div className="z-10  mt-10 lg:ml-10  lg:mt-0">
      <div className="relative rounded-[9px] border-none bg-[#2c0219] p-3 text-center font-san sm:p-6 sm:py-12">
        <h1 className="mb-10 text-[25px] font-medium text-[#9168bf]">
          G3X2 Matrix
        </h1>

        <h1 className="mx-auto mb-[20px] flex h-[80px] w-[200px] items-center justify-center rounded-lg border-2 border-[#ae7ddd] bg-[#1e1c2f] pl-[8px] pr-[8px] text-3xl font-bold text-[#ae7ddd] sm:w-[340px] xl:w-[440px]">
          {UseFormatNumber(user?.Id)}
        </h1>

        <div className="flex items-center text-white">
          <Link
            href={`/view/g3x2-matrix/${previousNumber}/?uid=${uid}`}
            className="rounded-3xl border border-[#9168bf] p-2 text-[10px] text-white sm:text-[18px]"
          >
            <span className="sm:text-xl">&lt;</span> {previousNumber}
          </Link>

          <div className="z-10 mx-auto w-[70%] rounded-lg bg-[#9168bf] p-5 sm:w-[340px] xl:w-[440px]">
            <div className="flex justify-between">
              <h1 className="text-white md:text-[25px]">{Number(params.id)}</h1>
              <a href="#" className="font-bold text-white md:text-[25px]">
                ID {UseFormatNumber(user?.Id)}
              </a>
            </div>
            <div className="mt-3 flex flex-col items-end">
              <h1 className="font-bold text-white md:text-[20px]">
                {UseFormatEther(levelData?.Earnings)} DAI
              </h1>
            </div>
          </div>

          <Link
            href={`/view/g3x2-matrix/${nextNumber}/?uid=${uid}`}
            className="rounded-3xl border border-[#9168bf] p-2 text-[10px] text-white sm:text-[18px]"
          >
            {nextNumber} <span className="sm:text-xl">&gt;</span>
          </Link>
        </div>

        <div className="sm:w-full">
          <div className="px-5 md:px-[50px] lg:px-5 xl:px-[50px]">
            <div className="flex justify-around sm:justify-center sm:gap-x-[155px] xl:gap-x-[210px]">
              <div className="h-[18px] w-2 rotate-[30deg] transform border-l  border-dashed border-purple-500 sm:h-[70px]"></div>
              <div className=" h-[15px] w-2 border-l border-dashed border-purple-500  sm:h-[65px]"></div>
              <div className="mt-[-4px] h-[18px] w-2 rotate-[-30deg] transform border-l border-dashed border-purple-500 sm:h-[70px]"></div>
            </div>
            <div className="flex justify-around gap-x-[29px] xsm:gap-x-[20px] sm:mt-[-6px] sm:justify-center sm:gap-x-[125px] xl:gap-x-[168px]">
              {levelData?.FirstLevelRefs[0] !== undefined ? (
                <div className="flex flex-col items-center  ">
                  <a className="ml-[-5px] flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full border bg-[#9168bf] text-white sm:h-[70px] sm:w-[70px] xl:h-[80px] xl:w-[80px]">
                    <UserId userAddress={levelData?.FirstLevelRefs[0]} />
                  </a>
                  <div className="  flex justify-center gap-x-[2px] sm:gap-x-[20px]  ">
                    <div className="h-[20px] w-2 rotate-[50deg] transform border-l border-dashed  border-purple-500 sm:mt-[-5px] sm:h-[60px]"></div>
                    <div className=" h-[9.5px] w-2 border-l   border-dashed border-purple-500 sm:h-[42px]"></div>
                    <div className="ml-[-2px] mt-[-5px] h-[20px] w-2 rotate-[-50deg] transform  border-l border-dashed border-purple-500  sm:ml-[-3px] sm:mt-[-10px] sm:h-[60px]"></div>
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
              {levelData?.FirstLevelRefs[1] !== undefined ? (
                <div className="flex flex-col items-center  ">
                  <a className="ml-[-5px] flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full border bg-[#9168bf] text-white sm:h-[70px] sm:w-[70px] xl:h-[80px] xl:w-[80px]">
                    <UserId userAddress={levelData?.FirstLevelRefs[1]} />
                  </a>
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
              {levelData?.FirstLevelRefs[2] !== undefined ? (
                <div className="flex flex-col items-center  ">
                  <a className="ml-[-5px] flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full border bg-[#9168bf] text-white sm:h-[70px] sm:w-[70px] xl:h-[80px] xl:w-[80px]">
                    <UserId userAddress={levelData?.FirstLevelRefs[2]} />
                  </a>
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

            <div className="flex justify-around gap-x-[21px] sm:justify-center sm:gap-x-[32px] xl:gap-x-[85px]">
              <div className="mt-[-10px] flex gap-x-2 sm:mt-[-12px] sm:gap-x-3">
                {levelData?.SecondLevelRefs[0] !== undefined ? (
                  <a className="ml-[-5px] flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full border bg-purple-500 text-white sm:h-[50px] sm:w-[50px] ">
                    <UserId userAddress={levelData?.SecondLevelRefs[0]} />
                  </a>
                ) : (
                  <a className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer rounded-full border sm:h-[50px] sm:w-[50px] "></a>
                )}
                {levelData?.SecondLevelRefs[3] !== undefined ? (
                  <a className="ml-[-5px] flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full border bg-purple-500 text-white sm:h-[50px] sm:w-[50px]">
                    <UserId userAddress={levelData?.SecondLevelRefs[3]} />
                  </a>
                ) : (
                  <a className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer rounded-full border sm:h-[50px] sm:w-[50px] "></a>
                )}
                {levelData?.SecondLevelRefs[6] !== undefined ? (
                  <a className="ml-[-5px] flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full border bg-purple-500 text-white sm:h-[50px] sm:w-[50px]">
                    <UserId userAddress={levelData?.SecondLevelRefs[6]} />
                  </a>
                ) : (
                  <a className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer rounded-full border sm:h-[50px] sm:w-[50px] "></a>
                )}
              </div>
              <div className="mt-[-10px] flex gap-x-2 sm:mt-[-12px] sm:gap-x-3">
                {levelData?.SecondLevelRefs[1] !== undefined ? (
                  <a className="ml-[-5px] flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full border bg-purple-500 text-white sm:h-[50px] sm:w-[50px]">
                    <UserId userAddress={levelData?.SecondLevelRefs[1]} />
                  </a>
                ) : (
                  <a className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer rounded-full border sm:h-[50px] sm:w-[50px] "></a>
                )}
                {levelData?.SecondLevelRefs[4] !== undefined ? (
                  <a className="ml-[-5px] flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full border bg-purple-500 text-white sm:h-[50px] sm:w-[50px]">
                    <UserId userAddress={levelData?.SecondLevelRefs[4]} />
                  </a>
                ) : (
                  <a className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer rounded-full border sm:h-[50px] sm:w-[50px] "></a>
                )}
                {levelData?.SecondLevelRefs[7] !== undefined ? (
                  <a className="ml-[-5px] flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full border bg-purple-500 text-white sm:h-[50px] sm:w-[50px]">
                    <UserId userAddress={levelData?.SecondLevelRefs[7]} />
                  </a>
                ) : (
                  <a className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer rounded-full border sm:h-[50px] sm:w-[50px] "></a>
                )}
              </div>
              <div className="mt-[-10px] flex gap-x-2 sm:mt-[-12px] sm:gap-x-3">
                {levelData?.SecondLevelRefs[2] !== undefined ? (
                  <a className="ml-[-5px] flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full border bg-purple-500 text-white sm:h-[50px] sm:w-[50px]">
                    <UserId userAddress={levelData?.SecondLevelRefs[2]} />
                  </a>
                ) : (
                  <a className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer rounded-full border sm:h-[50px] sm:w-[50px] "></a>
                )}
                {levelData?.SecondLevelRefs[5] !== undefined ? (
                  <a className="ml-[-5px] flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full border bg-purple-500 text-white sm:h-[50px] sm:w-[50px]">
                    <UserId userAddress={levelData?.SecondLevelRefs[5]} />
                  </a>
                ) : (
                  <a className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer rounded-full border sm:h-[50px] sm:w-[50px] "></a>
                )}
                {levelData?.SecondLevelRefs[8] !== undefined ? (
                  <a className="ml-[-5px] flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full border bg-purple-500 text-white sm:h-[50px] sm:w-[50px]">
                    <UserId userAddress={levelData?.SecondLevelRefs[8]} />
                  </a>
                ) : (
                  <a className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer rounded-full border sm:h-[50px] sm:w-[50px] "></a>
                )}
              </div>
            </div>
          </div>
          <div className="absolute bottom-[20%] top-[80%] z-10 grid  w-full grid-cols-2 items-center md:bottom-[40%] md:top-[60%] md:gap-x-80">
            <div className="flex items-center justify-center text-white sm:text-[15px]">
              <img
                src="/reinvest.svg"
                alt=""
                className="h-[20px]  w-[20px] p-1 md:h-[40px] md:w-[40px]"
              />

              <h1 className="text-[10px] md:text-[15px]">
                {UseFormatNumber(levelData?.ReinvestCount || '00')}
              </h1>
            </div>
            <div className="ml-[-100px] flex items-center justify-center text-white sm:text-[15px]">
              <img
                src="/partner.svg"
                alt=""
                className="h-[20px] w-[20px] p-1 md:h-[40px] md:w-[40px]"
              />

              <h1 className="text-[10px] md:text-[15px]">{team || '00'}</h1>
            </div>
          </div>
        </div>
      </div>
      <TransactionTable matrixLevel={Number(params.id)} userAddress={address} />
    </div>
  );
};

export default Page;
