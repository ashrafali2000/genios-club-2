'use client';

import { useContract, useContractRead } from '@thirdweb-dev/react';
import { UseFormatEther, UseFormatNumber } from '@/lib/utils/useEthers';
import { GeniosClubAddress, GeniosClubAbi } from '@/lib/constant';
import Link from 'next/link';
import TransactionTable from '@/components/dashboard/mainPage/G3X7Matrixes/matrixDetails/transactionTable';
import { useSearchParams } from 'next/navigation';

const Page = ({ params }: any) => {
  const searchParams = useSearchParams();
  const uid: any = searchParams?.get('uid');

  const { contract: GeniosClubContract } = useContract(
    GeniosClubAddress,
    GeniosClubAbi
  );

  const { data: address } = useContractRead(GeniosClubContract, 'IdToAddress', [
    uid,
  ]);
  const { data: user } = useContractRead(GeniosClubContract, 'Users', [
    address,
  ]);

  const { data: levelData, isLoading } = useContractRead(
    GeniosClubContract,
    'usersG3X7Matrix',
    [address, Number(uid)]
  );

  const team =
    UseFormatNumber(levelData?.ReinvestCount) * 12 +
    levelData?.FirstLevelRefs.length +
    levelData?.SecondLevelRefs.length;

  const nextNumber = Number(params.mid) + 1 === 9 ? 1 : Number(params.mid) + 1;
  const previousNumber =
    Number(params.mid) - 1 === 0 ? 8 : Number(params.mid) - 1;

  return (
    <div className="z-10  mt-10 lg:ml-10  lg:mt-0">
      <div className="relative rounded-[9px] border-none bg-[#2c0219] p-3 text-center font-san sm:p-6 sm:py-12">
        <h1 className="mb-10 text-[25px] font-medium text-[#9168bf]">
          Seven Level Click
        </h1>

        <h1 className="mx-auto mb-[20px] flex h-[80px] w-[200px] items-center justify-center rounded-lg border-2 border-[#ae7ddd] bg-[#1e1c2f] pl-[8px] pr-[8px] text-3xl font-bold text-[#ae7ddd] sm:w-[340px] xl:w-[440px]">
          {uid}
        </h1>

        <div className="flex items-center text-white">
          <Link
            href={`/view/g3x7-matrix/${previousNumber}?uid=${uid}`}
            className="sm:w-[48px] rounded-3xl border border-[#9168bf] p-2 text-[10px] text-white sm:text-[18px]"
          >
            <span className="sm:text-xl">&lt;</span> {previousNumber}
          </Link>

          <div className="z-10 mx-auto w-[70%] rounded-lg bg-[#9168bf] p-5 sm:w-[340px] xl:w-[440px]">
            <div className="flex justify-between">
              <h1 className="text-white md:text-[25px]">{params.mid}</h1>
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
            href={`/view/g3x7-matrix/${nextNumber}?uid=${uid}`}
            className="sm:w-[48px] rounded-3xl border border-[#9168bf] p-2  text-[10px] text-white sm:text-[18px]"
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
            <Show3Refs address={address} uid={uid} level={Number(params.mid)} />
          </div>
        </div>
      </div>
      <TransactionTable
        matrixLevel={Number(params.mid)}
        userAddress={address}
      />
    </div>
  );
};

function Show3Refs({
  address,
  level,
  uid,
}: {
  address: any;
  level: any;
  uid: string;
}) {
  const { contract: GeniosClubContract } = useContract(
    GeniosClubAddress,
    GeniosClubAbi
  );

  const { data: levelData, isLoading } = useContractRead(
    GeniosClubContract,
    'usersG3X7Matrix',
    [address, Number(level)]
  );

  return (
    <>
      <div className="flex justify-around gap-x-[29px] xsm:gap-x-[20px] sm:mt-[-6px] sm:justify-center sm:gap-x-[125px] xl:gap-x-[168px]">
        {levelData?.FirstLevelRefs[0] !== undefined ? (
          <div className="flex flex-col items-center  ">
            <UserId
              mid={level}
              myClassName="ml-[-5px] flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full border bg-[#9168bf] text-white sm:h-[70px] sm:w-[70px] xl:h-[80px] xl:w-[80px]"
              userAddress={levelData?.FirstLevelRefs[0]}
            />
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
            <UserId
              mid={level}
              myClassName="ml-[-5px] flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full border bg-[#9168bf] text-white sm:h-[70px] sm:w-[70px] xl:h-[80px] xl:w-[80px]"
              userAddress={levelData?.FirstLevelRefs[1]}
            />
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
            <UserId
              mid={level}
              myClassName="ml-[-5px] flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full border bg-[#9168bf] text-white sm:h-[70px] sm:w-[70px] xl:h-[80px] xl:w-[80px]"
              userAddress={levelData?.FirstLevelRefs[2]}
            />
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
        <ShowSec3Refs
          address={levelData?.FirstLevelRefs[0]}
          level={Number(level)}
        />
        <ShowSec3Refs
          address={levelData?.FirstLevelRefs[1]}
          level={Number(level)}
        />
        <ShowSec3Refs
          address={levelData?.FirstLevelRefs[2]}
          level={Number(level)}
        />
      </div>
    </>
  );
}

function ShowSec3Refs({ address, level }: { address: any; level: any }) {
  const { contract: GeniosClubContract } = useContract(
    GeniosClubAddress,
    GeniosClubAbi
  );

  const { data: levelData, isLoading } = useContractRead(
    GeniosClubContract,
    'usersG3X7Matrix',
    [address, Number(level)]
  );

  return (
    <>
      <div className="mt-[-10px] flex gap-x-2 sm:mt-[-12px] sm:gap-x-3">
        {levelData?.FirstLevelRefs[0] !== undefined ? (
          <UserId
            mid={level}
            myClassName="ml-[-5px] flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full border bg-purple-500 text-white sm:h-[50px] sm:w-[50px]"
            userAddress={levelData?.FirstLevelRefs[0]}
          />
        ) : (
          <div className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer rounded-full border sm:h-[50px] sm:w-[50px] " />
        )}

        {levelData?.FirstLevelRefs[1] !== undefined ? (
          <UserId
            mid={level}
            myClassName="ml-[-5px] flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full border bg-purple-500 text-white sm:h-[50px] sm:w-[50px]"
            userAddress={levelData?.FirstLevelRefs[1]}
          />
        ) : (
          <div className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer rounded-full border sm:h-[50px] sm:w-[50px] " />
        )}

        {levelData?.FirstLevelRefs[2] !== undefined ? (
          <UserId
            mid={level}
            myClassName="ml-[-5px] flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full border bg-purple-500 text-white sm:h-[50px] sm:w-[50px]"
            userAddress={levelData?.FirstLevelRefs[2]}
          />
        ) : (
          <div className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer rounded-full border sm:h-[50px] sm:w-[50px] " />
        )}
      </div>
    </>
  );
}

function UserId({
  mid,
  userAddress,
  myClassName,
}: {
  mid: any;
  userAddress: any;
  myClassName: any;
}) {
  const { contract: GeniosClubContract } = useContract(
    GeniosClubAddress,
    GeniosClubAbi
  );
  const { data: user, isLoading: usersIsLoading } = useContractRead(
    GeniosClubContract,
    'Users',
    [userAddress]
  );

  if (String(user?.Id || 0) === '0')
    return <div className={myClassName}>{String(user?.Id || 0)}</div>;

  return (
    <Link
      href={`/view/g3x7-matrix/${mid}?uid=${user?.Id}`}
      className={myClassName}
    >
      {String(user?.Id || 0)}
    </Link>
  );
}

export default Page;
