'use client';

import {
  useContract,
  useContractRead,
  useContractWrite,
} from '@thirdweb-dev/react';
import {
  GeniosClubAbi,
  GeniosClubAddress,
  MTKAbi,
  MTKAddress,
} from '@/lib/constant';
import Modal from '../../../modal';
import { useState } from 'react';
import Link from 'next/link';
import { UseFormatEther, UseFormatNumber } from '@/lib/utils/useEthers';
import RefFirstLevelCircle from './refFirstLevelCircle';

const Matrix = ({
  MatrixLevel,
  address,
  view,
  title,
}: {
  MatrixLevel: any;
  title: any;
  address: any;
  view?: boolean;
}) => {
  const [openModal, setOpenModal] = useState(false);

  const { contract: GeniosClubContract } = useContract(
    GeniosClubAddress,
    GeniosClubAbi
  );
  const { contract: MTKContract } = useContract(MTKAddress, MTKAbi);

  // Read Functions
  const { data: levelData } = useContractRead(
    GeniosClubContract,
    'usersG3X2Matrix',
    [address, Number(MatrixLevel)]
  );
  const { data: balance, isLoading: balanceIsLoading } = useContractRead(
    MTKContract,
    'balanceOf',
    [address]
  );

  const { data: allowance, isLoading: allowanceIsLoading } = useContractRead(
    MTKContract,
    'allowance',
    [address, GeniosClubAddress]
  );

  const { data: user, isLoading: usersIsLoading } = useContractRead(
    GeniosClubContract,
    'Users',
    [address]
  );

  const {
    data: usersActiveG3X2Levels,
    isLoading: usersActiveG3X2LevelsIsLoading,
  } = useContractRead(GeniosClubContract, 'usersActiveG3X2Levels', [
    address,
    Number(MatrixLevel),
  ]);
  const { data: usersActiveG3X2LevelsP } = useContractRead(
    GeniosClubContract,
    'usersActiveG3X2Levels',
    [address, Number(MatrixLevel) - 1]
  );

  const { data: LevelPrice } = useContractRead(
    GeniosClubContract,
    'LevelPrice',
    [Number(MatrixLevel)]
  );

  // Write Functions
  const { mutateAsync: buyNewLevel, isLoading: buyNewLevelIsLoading } =
    useContractWrite(GeniosClubContract, 'buyNewLevel');
  const { mutateAsync: approve, isLoading: approveIsLoading } =
    useContractWrite(MTKContract, 'approve');

  // Token Approval Function
  const callApprove = async () => {
    try {
      const data = await approve({
        args: [GeniosClubAddress, String(LevelPrice)],
      });
      console.info('contract call success', data);
    } catch (err) {
      console.error('contract call failure', err);
    }
  };

  // Buy Level Function
  const buyLevel = async () => {
    try {
      const data = await buyNewLevel({ args: [Number(MatrixLevel), 1] });
      console.info('contract call success', data);
      setOpenModal(false);
    } catch (err) {
      console.error('contract call failure', err);
    }
  };

  const team =
    UseFormatNumber(levelData?.ReinvestCount) * 12 +
    levelData?.FirstLevelRefs.length +
    levelData?.SecondLevelRefs.length;

  const initLink = view ? `/view/g3x2-matrix` : `/g3x2-matrix`;
  const lastLink = view ? `?uid=${user?.Id}` : ``;

  return (
    <>
      <Modal open={openModal} setOpen={setOpenModal}>
        <div className="flex w-full flex-col items-center justify-center rounded-md bg-[#2c0219] p-10 font-san">
          <h1 className="text-center font-medium text-[#9168bf] sm:text-[35px]">
            Activate New Level
          </h1>

          <div className="mx-auto mt-4 w-full sm:w-[80%] sm:text-[25px]">
            {Number(UseFormatEther(balance || 0)) >=
            Number(UseFormatEther(LevelPrice || 0)) ? (
              <>
                <h1 className="text-center text-white">
                  Level Price : {UseFormatEther(LevelPrice || 0)}
                </h1>
                <h1 className="text-center text-white">
                  Allowance : {UseFormatEther(allowance || 0)}
                </h1>
              </>
            ) : null}

            {Number(UseFormatEther(balance || 0)) <
            Number(UseFormatEther(LevelPrice || 0)) ? (
              <>
                <h1 className="text-center text-white">
                  Balance : {UseFormatEther(balance || 0)}
                </h1>
                <h1 className="text-center text-white">
                  Level Price : {UseFormatEther(LevelPrice || 0)}
                </h1>
                <h1 className="text-center text-red-500">NOT ENOUGH BALANCE</h1>
              </>
            ) : null}

            {Number(UseFormatEther(balance || 0)) >=
              Number(UseFormatEther(LevelPrice || 0)) &&
            Number(UseFormatEther(allowance || 0)) <
              Number(UseFormatEther(LevelPrice || 0)) ? (
              approveIsLoading ? (
                <button
                  className="mt-4 inline-block h-fit w-full cursor-pointer rounded-3xl bg-[#9064b2] p-[10px] text-[12px] font-normal leading-[20px] text-white sm:p-[15px] sm:text-[15px]"
                  disabled
                >
                  <svg
                    aria-hidden="true"
                    role="status"
                    className="mr-3 inline h-4 w-4 animate-spin text-white"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="#E5E7EB"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentColor"
                    />
                  </svg>
                  LOADING...
                </button>
              ) : (
                <button
                  onClick={() => callApprove()}
                  className="mx-auto mt-4  inline-block w-full cursor-pointer rounded-3xl bg-[#9064b2] p-[10px] text-[12px] font-normal leading-[20px] text-white sm:p-[15px] sm:text-[15px] "
                >
                  APPROVE
                </button>
              )
            ) : null}

            {Number(UseFormatEther(allowance || 0)) >=
            Number(UseFormatEther(LevelPrice || 0)) ? (
              buyNewLevelIsLoading ? (
                <button
                  className="mt-4 inline-block w-full  cursor-pointer rounded-3xl  bg-[#9064b2] p-[10px] text-[12px] font-normal leading-[20px] text-white sm:p-[15px] sm:text-[15px]"
                  disabled
                >
                  <svg
                    aria-hidden="true"
                    role="status"
                    className="mr-3 inline h-4 w-4 animate-spin text-white"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="#E5E7EB"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentColor"
                    />
                  </svg>
                  LOADING...
                </button>
              ) : (
                <button
                  onClick={() => buyLevel()}
                  className="mx-auto mt-4 inline-block h-fit w-full cursor-pointer rounded-3xl bg-[#9064b2] p-[10px] text-[12px] font-normal leading-[20px] text-white sm:p-[15px] sm:text-[15px]"
                >
                  BUY LEVEL
                </button>
              )
            ) : null}
          </div>
        </div>
      </Modal>

      {usersActiveG3X2LevelsIsLoading ? (
        <>
          <div className=" mx-auto min-h-[195px] w-[260px] md:w-[330px] lg:w-[260px] xl:w-[330px]">
            <div className="max-w-sm animate-pulse">
              <div className="mb-4 h-2.5 w-48 rounded-full bg-gray-700"></div>
              <div className="mb-2.5 h-2 max-w-[360px] rounded-full bg-gray-700"></div>
              <div className="mb-2.5 h-2 rounded-full bg-gray-700"></div>
              <div className="mb-2.5 h-2 max-w-[330px] rounded-full bg-gray-700"></div>
              <div className="mb-2.5 h-2 max-w-[300px] rounded-full bg-gray-700"></div>
              <div className="h-2 max-w-[360px] rounded-full bg-gray-700"></div>
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        </>
      ) : !usersActiveG3X2Levels ? (
        <div className="mx-auto min-h-[195px]  w-[260px] rounded-2xl border border-solid border-[#ae7ddd] md:w-[330px] lg:w-[260px] xl:w-[330px]">
          <div className="rounded-t-2xl bg-[#ae7ddd] p-3 font-semibold text-[#2c0219] shadow-md">
            {title}
          </div>
          <div className=" border-t border-[#333] p-[12px]">
            {view && usersActiveG3X2LevelsP ? (
              <button className="mt-12 inline-block h-fit w-full rounded-3xl bg-[#9064b2] p-[10px] text-[12px] font-normal leading-[20px] text-white sm:p-[15px] sm:text-[15px] md:w-[60%]">
                NOT ACTIVATE
              </button>
            ) : usersActiveG3X2LevelsP ? (
              <button
                onClick={() => setOpenModal(true)}
                className="mt-12 inline-block h-fit w-full cursor-pointer rounded-3xl bg-[#9064b2] p-[10px] text-[12px] font-normal leading-[20px] text-white sm:p-[15px] sm:text-[15px] md:w-[60%]"
              >
                ACTIVATE
              </button>
            ) : null}
          </div>
        </div>
      ) : (
        <div className="mx-auto min-h-[195px] w-[260px] rounded-2xl border border-solid border-[#ae7ddd] md:w-[330px] lg:w-[260px] xl:w-[330px]">
          <Link
            href={`${initLink}/${MatrixLevel}/${lastLink}`}
            className="block w-full rounded-t-2xl bg-[#ae7ddd] p-3 font-semibold text-[#2c0219] shadow-md"
          >
            {title}
          </Link>

          <div className="px-5 md:px-[50px] lg:px-5 xl:px-[50px]">
            <div className="  flex justify-center gap-x-[60px]   ">
              <div className="h-[18px] w-2 rotate-[30deg] transform   border-l border-dashed border-purple-500"></div>
              <div className="  h-[15px] w-2   border-l border-dashed  border-purple-500"></div>
              <div className=" h-[18px] w-2 rotate-[-30deg] transform   border-l border-dashed border-purple-500"></div>
            </div>

            <RefFirstLevelCircle
              RefFirstLevel={levelData?.FirstLevelRefs}
              MatrixLevel={MatrixLevel}
            />
          </div>

          <div className="my-5 border-t border-[#333] bg-[#ae7ddd40] p-[12px]">
            <div className="flex items-center justify-between">
              <div className="mb-1 flex items-center text-[12px] text-white">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.875 12.5a4.062 4.062 0 1 0 0-8.125 4.062 4.062 0 0 0 0 8.125Z"
                    stroke="#fff"
                    strokeMiterlimit="10"
                  ></path>
                  <path
                    d="M12.14 4.523c.36-.097.73-.147 1.102-.148a4.063 4.063 0 0 1 0 8.125M1.25 15.422a6.875 6.875 0 0 1 11.25 0M13.242 12.5a6.868 6.868 0 0 1 5.625 2.922"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <span className="ml-1 font-bold text-white">{team}</span>
              </div>

              <div className="mb-1 flex items-center text-[12px] text-white">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.625 6.875 17.5 5l-1.875-1.875"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M2.5 10a5.008 5.008 0 0 1 5-5h10M4.375 13.125 2.5 15l1.875 1.875"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M17.5 10a5.008 5.008 0 0 1-5 5h-10"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <span className="ml-1 font-bold text-white">
                  {UseFormatNumber(levelData?.ReinvestCount)}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Matrix;
