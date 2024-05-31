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
import { UseFormatEther, UseFormatNumber } from '@/lib/utils/useEthers';
import Modal from '@/components/modal';
import { useRef, useState, Fragment } from 'react';
import Link from 'next/link';
import { Popover, Transition } from '@headlessui/react';
import axios from 'axios';

function HGHJGHGJHGHJ({
  address,
  MatrixLevel,
  initLink,
}: {
  address: any;
  MatrixLevel: any;
  initLink: any;
}) {
  const { contract: GeniosClubContract } = useContract(
    GeniosClubAddress,
    GeniosClubAbi
  );

  const { data: levelData } = useContractRead(
    GeniosClubContract,
    'usersG3X7Matrix',
    [address, Number(MatrixLevel)]
  );
  return (
    <div className="flex justify-center gap-x-2">
      {levelData?.FirstLevelRefs[0] ? (
        <PopOver
          userAddress={levelData?.FirstLevelRefs[0]}
          matrix={2}
          MatrixLevel={MatrixLevel}
          size={38}
          initLink={initLink}
        />
      ) : (
        <div className="h-[21px] w-[21px] cursor-pointer rounded-full border sm:h-[38px] sm:w-[38px]" />
      )}
      {levelData?.FirstLevelRefs[1] ? (
        <PopOver
          userAddress={levelData?.FirstLevelRefs[1]}
          matrix={2}
          MatrixLevel={MatrixLevel}
          size={38}
          initLink={initLink}
        />
      ) : (
        <div className="h-[21px] w-[21px] cursor-pointer rounded-full border sm:h-[38px] sm:w-[38px]" />
      )}
      {levelData?.FirstLevelRefs[2] ? (
        <PopOver
          userAddress={levelData?.FirstLevelRefs[2]}
          matrix={2}
          MatrixLevel={MatrixLevel}
          size={38}
          initLink={initLink}
        />
      ) : (
        <div className="h-[21px] w-[21px] cursor-pointer rounded-full border sm:h-[38px] sm:w-[38px]" />
      )}
    </div>
  );
}

const Matrix = ({
  address,
  MatrixLevel,
  view,
  title,
}: {
  address: any;
  title: any;
  MatrixLevel: any;
  view?: boolean;
}) => {
  const [openModal, setOpenModal] = useState(false);

  const { contract: GeniosClubContract } = useContract(
    GeniosClubAddress,
    GeniosClubAbi
  );
  const { contract: MTKContract } = useContract(MTKAddress, MTKAbi);

  // Read Functions
  const { data: user, isLoading: usersIsLoading } = useContractRead(
    GeniosClubContract,
    'Users',
    [address]
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
  const { data: levelData } = useContractRead(
    GeniosClubContract,
    'usersG3X7Matrix',
    [address, Number(MatrixLevel)]
  );

  const {
    data: usersActiveG3X7Levels,
    isLoading: usersActiveG3X7LevelsIsLoading,
  } = useContractRead(GeniosClubContract, 'usersActiveG3X7Levels', [
    address,
    Number(MatrixLevel),
  ]);

  const { data: usersActiveG3X7LevelsP } = useContractRead(
    GeniosClubContract,
    'usersActiveG3X7Levels',
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
      const data = await buyNewLevel({
        args: [Number(MatrixLevel), 2],
      });
      console.info('contract call success', data);

      setOpenModal(false);
    } catch (err) {
      console.error('contract call failure', err);
    }
  };

  const team =
    UseFormatNumber(levelData?.ReinvestCount) * 363 +
    levelData?.FirstLevelRefs.length +
    levelData?.SecondLevelRefs.length +
    levelData?.ThirdLevelRefs.length +
    levelData?.FourthLevelRefs.length +
    levelData?.FifthLevelRefs.length;

  const initLink = view ? `/view/g3x7-matrix` : `/g3x7-matrix/${user?.Id}`;
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

      {usersActiveG3X7LevelsIsLoading ? (
        <>
          <div className=" mx-auto h-[195px] w-full">
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
      ) : !usersActiveG3X7Levels ? (
        <div className="mx-auto h-[195px] w-full rounded-2xl border border-solid border-[#ae7ddd]">
          <div className="rounded-t-2xl  bg-[#ae7ddd] p-3 font-semibold text-[#2c0219] shadow-md">
            {title}
          </div>
          <div className=" border-t border-[#333] p-[12px]">
            {view && usersActiveG3X7LevelsP ? (
              <button className="mt-12 inline-block h-fit w-full rounded-3xl bg-[#9064b2] p-[10px] text-[12px] font-normal leading-[20px] text-white sm:p-[15px] sm:text-[15px] md:w-[60%]">
                NOT ACTIVATE
              </button>
            ) : usersActiveG3X7LevelsP ? (
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
        <div className=" mt-2 w-full  rounded-[9px] border-none bg-[#2c0219] px-2 pb-6 pt-4 text-center font-san">
          <div className="w-full rounded-2xl border border-solid border-[#ae7ddd]">
            <div className=" grid w-full">
              <Link
                href={`${initLink}/${MatrixLevel}/${lastLink}`}
                className="w-full rounded-t-lg bg-[#ae7ddd] p-5 font-bold shadow-md"
              >
                <span className="font-semibold text-[#2c0219]">{title}</span>
              </Link>

              <div className="grid w-full  p-5">
                <div className="mt-4 flex justify-center gap-x-[60px] md:gap-x-[173px]">
                  {levelData?.FirstLevelRefs[0] ? (
                    <PopOver
                      userAddress={levelData.FirstLevelRefs[0]}
                      matrix={2}
                      MatrixLevel={MatrixLevel}
                      size={62}
                    />
                  ) : (
                    <div className="h-[21px] w-[21px] cursor-pointer rounded-full  border sm:h-[62px] sm:w-[62px]" />
                  )}
                  {levelData?.FirstLevelRefs[1] ? (
                    <PopOver
                      userAddress={levelData.FirstLevelRefs[1]}
                      matrix={2}
                      MatrixLevel={MatrixLevel}
                      size={62}
                    />
                  ) : (
                    <div className="h-[21px] w-[21px] cursor-pointer rounded-full border sm:h-[62px] sm:w-[62px]" />
                  )}
                  {levelData.FirstLevelRefs[2] ? (
                    <PopOver
                      userAddress={levelData.FirstLevelRefs[2]}
                      matrix={2}
                      MatrixLevel={MatrixLevel}
                      size={62}
                    />
                  ) : (
                    <div className="h-[21px] w-[21px] cursor-pointer rounded-full border sm:h-[62px] sm:w-[62px]" />
                  )}
                </div>

                <div className="mt-4 flex justify-center gap-x-2 md:gap-x-20">
                  <HGHJGHGJHGHJ
                    address={levelData.FirstLevelRefs[0]}
                    MatrixLevel={MatrixLevel}
                    initLink={initLink}
                  />
                  <HGHJGHGJHGHJ
                    address={levelData.FirstLevelRefs[1]}
                    MatrixLevel={MatrixLevel}
                    initLink={initLink}
                  />
                  <HGHJGHGJHGHJ
                    address={levelData.FirstLevelRefs[2]}
                    MatrixLevel={MatrixLevel}
                    initLink={initLink}
                  />
                  {/* <div className="flex justify-center gap-x-2">
                    {levelData.SecondLevelRefs[0] ? (
                      <PopOver
                        userAddress={levelData.SecondLevelRefs[0]}
                        matrix={2}
                        MatrixLevel={MatrixLevel}
                        size={38}
                      />
                    ) : (
                      <div className="h-[38px] w-[38px] cursor-pointer rounded-full border" />
                    )}
                    {levelData.SecondLevelRefs[3] ? (
                      <PopOver
                        userAddress={levelData.SecondLevelRefs[3]}
                        matrix={2}
                        MatrixLevel={MatrixLevel}
                        size={38}
                      />
                    ) : (
                      <div className="h-[38px] w-[38px] cursor-pointer rounded-full border" />
                    )}
                    {levelData.SecondLevelRefs[6] ? (
                      <PopOver
                        userAddress={levelData.SecondLevelRefs[6]}
                        matrix={2}
                        MatrixLevel={MatrixLevel}
                        size={38}
                      />
                    ) : (
                      <div className="h-[38px] w-[38px] cursor-pointer rounded-full border" />
                    )}
                  </div>

                  <div className="flex justify-center gap-x-2">
                    {levelData.SecondLevelRefs[1] ? (
                      <PopOver
                        userAddress={levelData.SecondLevelRefs[1]}
                        matrix={2}
                        MatrixLevel={MatrixLevel}
                        size={38}
                      />
                    ) : (
                      <div className="h-[38px] w-[38px] cursor-pointer rounded-full border" />
                    )}
                    {levelData.SecondLevelRefs[4] ? (
                      <PopOver
                        userAddress={levelData.SecondLevelRefs[4]}
                        matrix={2}
                        MatrixLevel={MatrixLevel}
                        size={38}
                      />
                    ) : (
                      <div className="h-[38px] w-[38px] cursor-pointer rounded-full border" />
                    )}
                    {levelData.SecondLevelRefs[7] ? (
                      <PopOver
                        userAddress={levelData.SecondLevelRefs[7]}
                        matrix={2}
                        MatrixLevel={MatrixLevel}
                        size={38}
                      />
                    ) : (
                      <div className="h-[38px] w-[38px] cursor-pointer rounded-full border" />
                    )}
                  </div>

                  <div className="flex justify-center gap-x-2">
                    {levelData.SecondLevelRefs[2] ? (
                      <PopOver
                        userAddress={levelData.SecondLevelRefs[2]}
                        matrix={2}
                        MatrixLevel={MatrixLevel}
                        size={38}
                      />
                    ) : (
                      <div className="h-[38px] w-[38px] cursor-pointer rounded-full border" />
                    )}
                    {levelData.SecondLevelRefs[5] ? (
                      <PopOver
                        userAddress={levelData.SecondLevelRefs[5]}
                        matrix={2}
                        MatrixLevel={MatrixLevel}
                        size={38}
                      />
                    ) : (
                      <div className="h-[38px] w-[38px] cursor-pointer rounded-full border" />
                    )}
                    {levelData.SecondLevelRefs[8] ? (
                      <PopOver
                        userAddress={levelData.SecondLevelRefs[8]}
                        matrix={2}
                        MatrixLevel={MatrixLevel}
                        size={38}
                      />
                    ) : (
                      <div className="h-[38px] w-[38px] cursor-pointer rounded-full border" />
                    )}
                  </div> */}
                </div>

                {/* <div className="mt-4 flex justify-center gap-x-2">
                  <div className="flex justify-center gap-x-1">
                    <div className="flex justify-center gap-x-1">
                      {levelData.ThirdLevelRefs[0] ? (
                        <Link
                          href={`/g3x7-matrix/${MatrixLevel}?lev=${3}&idx=${0}`}
                        >
                          <PopOver
                            userAddress={levelData.ThirdLevelRefs[0]}
                            matrix={2}
                            size={19}
                          />
                        </Link>
                      ) : (
                        <div className="h-[19px] w-[19px] cursor-pointer rounded-full border" />
                      )}
                      {levelData.ThirdLevelRefs[9] ? (
                        <Link
                          href={`/g3x7-matrix/${MatrixLevel}?lev=${3}&idx=${9}`}
                        >
                          <PopOver
                            userAddress={levelData.ThirdLevelRefs[9]}
                            matrix={2}
                            size={19}
                          />
                        </Link>
                      ) : (
                        <div className="h-[19px] w-[19px] cursor-pointer rounded-full border" />
                      )}
                      {levelData.ThirdLevelRefs[18] ? (
                        <Link
                          href={`/g3x7-matrix/${MatrixLevel}?lev=${3}&idx=${18}`}
                        >
                          <PopOver
                            userAddress={levelData.ThirdLevelRefs[18]}
                            matrix={2}
                            size={19}
                          />
                        </Link>
                      ) : (
                        <div className="h-[19px] w-[19px] cursor-pointer rounded-full border" />
                      )}
                    </div>
                    <div className="flex justify-center gap-x-1">
                      {levelData.ThirdLevelRefs[1] ? (
                        <Link
                          href={`/g3x7-matrix/${MatrixLevel}?lev=${3}&idx=${1}`}
                        >
                          <PopOver
                            userAddress={levelData.ThirdLevelRefs[1]}
                            matrix={2}
                            size={19}
                          />
                        </Link>
                      ) : (
                        <div className="h-[19px] w-[19px] cursor-pointer rounded-full border" />
                      )}
                      {levelData.ThirdLevelRefs[10] ? (
                        <Link
                          href={`/g3x7-matrix/${MatrixLevel}?lev=${3}&idx=${10}`}
                        >
                          <PopOver
                            userAddress={levelData.ThirdLevelRefs[10]}
                            matrix={2}
                            size={19}
                          />
                        </Link>
                      ) : (
                        <div className="h-[19px] w-[19px] cursor-pointer rounded-full border" />
                      )}
                      {levelData.ThirdLevelRefs[19] ? (
                        <Link
                          href={`/g3x7-matrix/${MatrixLevel}?lev=${3}&idx=${19}`}
                        >
                          <PopOver
                            userAddress={levelData.ThirdLevelRefs[19]}
                            matrix={2}
                            size={19}
                          />
                        </Link>
                      ) : (
                        <div className="h-[19px] w-[19px] cursor-pointer rounded-full border" />
                      )}
                    </div>
                    <div className="flex justify-center gap-x-1">
                      {levelData.ThirdLevelRefs[2] ? (
                        <Link
                          href={`/g3x7-matrix/${MatrixLevel}?lev=${3}&idx=${2}`}
                        >
                          <PopOver
                            userAddress={levelData.ThirdLevelRefs[2]}
                            matrix={2}
                            size={19}
                          />
                        </Link>
                      ) : (
                        <div className="h-[19px] w-[19px] cursor-pointer rounded-full border" />
                      )}
                      {levelData.ThirdLevelRefs[11] ? (
                        <Link
                          href={`/g3x7-matrix/${MatrixLevel}?lev=${3}&idx=${11}`}
                        >
                          <PopOver
                            userAddress={levelData.ThirdLevelRefs[11]}
                            matrix={2}
                            size={19}
                          />
                        </Link>
                      ) : (
                        <div className="h-[19px] w-[19px] cursor-pointer rounded-full border" />
                      )}
                      {levelData.ThirdLevelRefs[20] ? (
                        <Link
                          href={`/g3x7-matrix/${MatrixLevel}?lev=${3}&idx=${20}`}
                        >
                          <PopOver
                            userAddress={levelData.ThirdLevelRefs[20]}
                            matrix={2}
                            size={19}
                          />
                        </Link>
                      ) : (
                        <div className="h-[19px] w-[19px] cursor-pointer rounded-full border" />
                      )}
                    </div>
                  </div>
                  <div className="flex justify-center gap-x-1">
                    <div className="flex justify-center gap-x-1">
                      {levelData.ThirdLevelRefs[3] ? (
                        <Link
                          href={`/g3x7-matrix/${MatrixLevel}?lev=${3}&idx=${3}`}
                        >
                          <PopOver
                            userAddress={levelData.ThirdLevelRefs[3]}
                            matrix={2}
                            size={19}
                          />
                        </Link>
                      ) : (
                        <div className="h-[19px] w-[19px] cursor-pointer rounded-full border" />
                      )}
                      {levelData.ThirdLevelRefs[12] ? (
                        <Link
                          href={`/g3x7-matrix/${MatrixLevel}?lev=${3}&idx=${12}`}
                        >
                          <PopOver
                            userAddress={levelData.ThirdLevelRefs[12]}
                            matrix={2}
                            size={19}
                          />
                        </Link>
                      ) : (
                        <div className="h-[19px] w-[19px] cursor-pointer rounded-full border" />
                      )}
                      {levelData.ThirdLevelRefs[21] ? (
                        <Link
                          href={`/g3x7-matrix/${MatrixLevel}?lev=${3}&idx=${21}`}
                        >
                          <PopOver
                            userAddress={levelData.ThirdLevelRefs[21]}
                            matrix={2}
                            size={19}
                          />
                        </Link>
                      ) : (
                        <div className="h-[19px] w-[19px] cursor-pointer rounded-full border" />
                      )}
                    </div>
                    <div className="flex justify-center gap-x-1">
                      {levelData.ThirdLevelRefs[4] ? (
                        <Link
                          href={`/g3x7-matrix/${MatrixLevel}?lev=${3}&idx=${4}`}
                        >
                          <PopOver
                            userAddress={levelData.ThirdLevelRefs[4]}
                            matrix={2}
                            size={19}
                          />
                        </Link>
                      ) : (
                        <div className="h-[19px] w-[19px] cursor-pointer rounded-full border" />
                      )}
                      {levelData.ThirdLevelRefs[13] ? (
                        <Link
                          href={`/g3x7-matrix/${MatrixLevel}?lev=${3}&idx=${13}`}
                        >
                          <PopOver
                            userAddress={levelData.ThirdLevelRefs[13]}
                            matrix={2}
                            size={19}
                          />
                        </Link>
                      ) : (
                        <div className="h-[19px] w-[19px] cursor-pointer rounded-full border" />
                      )}
                      {levelData.ThirdLevelRefs[22] ? (
                        <Link
                          href={`/g3x7-matrix/${MatrixLevel}?lev=${3}&idx=${22}`}
                        >
                          <PopOver
                            userAddress={levelData.ThirdLevelRefs[22]}
                            matrix={2}
                            size={19}
                          />
                        </Link>
                      ) : (
                        <div className="h-[19px] w-[19px] cursor-pointer rounded-full border" />
                      )}
                    </div>
                    <div className="flex justify-center gap-x-1">
                      {levelData.ThirdLevelRefs[5] ? (
                        <Link
                          href={`/g3x7-matrix/${MatrixLevel}?lev=${3}&idx=${5}`}
                        >
                          <PopOver
                            userAddress={levelData.ThirdLevelRefs[5]}
                            matrix={2}
                            size={19}
                          />
                        </Link>
                      ) : (
                        <div className="h-[19px] w-[19px] cursor-pointer rounded-full border" />
                      )}
                      {levelData.ThirdLevelRefs[14] ? (
                        <Link
                          href={`/g3x7-matrix/${MatrixLevel}?lev=${3}&idx=${14}`}
                        >
                          <PopOver
                            userAddress={levelData.ThirdLevelRefs[14]}
                            matrix={2}
                            size={19}
                          />
                        </Link>
                      ) : (
                        <div className="h-[19px] w-[19px] cursor-pointer rounded-full border" />
                      )}
                      {levelData.ThirdLevelRefs[23] ? (
                        <Link
                          href={`/g3x7-matrix/${MatrixLevel}?lev=${3}&idx=${23}`}
                        >
                          <PopOver
                            userAddress={levelData.ThirdLevelRefs[23]}
                            matrix={2}
                            size={19}
                          />
                        </Link>
                      ) : (
                        <div className="h-[19px] w-[19px] cursor-pointer rounded-full border" />
                      )}
                    </div>
                  </div>
                  <div className="flex justify-center gap-x-1">
                    <div className="flex justify-center gap-x-1">
                      {levelData.ThirdLevelRefs[6] ? (
                        <Link
                          href={`/g3x7-matrix/${MatrixLevel}?lev=${3}&idx=${6}`}
                        >
                          <PopOver
                            userAddress={levelData.ThirdLevelRefs[6]}
                            matrix={2}
                            size={19}
                          />
                        </Link>
                      ) : (
                        <div className="h-[19px] w-[19px] cursor-pointer rounded-full border" />
                      )}
                      {levelData.ThirdLevelRefs[15] ? (
                        <Link
                          href={`/g3x7-matrix/${MatrixLevel}?lev=${3}&idx=${15}`}
                        >
                          <PopOver
                            userAddress={levelData.ThirdLevelRefs[15]}
                            matrix={2}
                            size={19}
                          />
                        </Link>
                      ) : (
                        <div className="h-[19px] w-[19px] cursor-pointer rounded-full border" />
                      )}
                      {levelData.ThirdLevelRefs[24] ? (
                        <Link
                          href={`/g3x7-matrix/${MatrixLevel}?lev=${3}&idx=${24}`}
                        >
                          <PopOver
                            userAddress={levelData.ThirdLevelRefs[24]}
                            matrix={2}
                            size={19}
                          />
                        </Link>
                      ) : (
                        <div className="h-[19px] w-[19px] cursor-pointer rounded-full border" />
                      )}
                    </div>
                    <div className="flex justify-center gap-x-1">
                      {levelData.ThirdLevelRefs[7] ? (
                        <Link
                          href={`/g3x7-matrix/${MatrixLevel}?lev=${3}&idx=${7}`}
                        >
                          <PopOver
                            userAddress={levelData.ThirdLevelRefs[7]}
                            matrix={2}
                            size={19}
                          />
                        </Link>
                      ) : (
                        <div className="h-[19px] w-[19px] cursor-pointer rounded-full border" />
                      )}
                      {levelData.ThirdLevelRefs[16] ? (
                        <Link
                          href={`/g3x7-matrix/${MatrixLevel}?lev=${3}&idx=${16}`}
                        >
                          <PopOver
                            userAddress={levelData.ThirdLevelRefs[16]}
                            matrix={2}
                            size={19}
                          />
                        </Link>
                      ) : (
                        <div className="h-[19px] w-[19px] cursor-pointer rounded-full border" />
                      )}
                      {levelData.ThirdLevelRefs[25] ? (
                        <Link
                          href={`/g3x7-matrix/${MatrixLevel}?lev=${3}&idx=${25}`}
                        >
                          <PopOver
                            userAddress={levelData.ThirdLevelRefs[25]}
                            matrix={2}
                            size={19}
                          />
                        </Link>
                      ) : (
                        <div className="h-[19px] w-[19px] cursor-pointer rounded-full border" />
                      )}
                    </div>
                    <div className="flex justify-center gap-x-1">
                      {levelData.ThirdLevelRefs[8] ? (
                        <Link
                          href={`/g3x7-matrix/${MatrixLevel}?lev=${3}&idx=${8}`}
                        >
                          <PopOver
                            userAddress={levelData.ThirdLevelRefs[8]}
                            matrix={2}
                            size={19}
                          />
                        </Link>
                      ) : (
                        <div className="h-[19px] w-[19px] cursor-pointer rounded-full border" />
                      )}
                      {levelData.ThirdLevelRefs[17] ? (
                        <Link
                          href={`/g3x7-matrix/${MatrixLevel}?lev=${3}&idx=${17}`}
                        >
                          <PopOver
                            userAddress={levelData.ThirdLevelRefs[17]}
                            matrix={2}
                            size={19}
                          />
                        </Link>
                      ) : (
                        <div className="h-[19px] w-[19px] cursor-pointer rounded-full border" />
                      )}
                      {levelData.ThirdLevelRefs[26] ? (
                        <Link
                          href={`/g3x7-matrix/${MatrixLevel}?lev=${3}&idx=${26}`}
                        >
                          <PopOver
                            userAddress={levelData.ThirdLevelRefs[26]}
                            matrix={2}
                            size={19}
                          />
                        </Link>
                      ) : (
                        <div className="h-[19px] w-[19px] cursor-pointer rounded-full border" />
                      )}
                    </div>
                  </div>
                </div> */}
              </div>

              <div className="mx-auto my-5 w-full border-t border-[#333] bg-[#ae7ddd40] p-[12px]">
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
          </div>
        </div>
      )}
    </>
  );
};

export default Matrix;

export function PopOver({
  userAddress,
  matrix,
  size,
  MatrixLevel,
  initLink,
}: any) {
  const buttonRef = useRef<any>(null);
  const timeoutDuration = 100;
  let timeout: any;
  const { contract: GeniosClubContract } = useContract(
    GeniosClubAddress,
    GeniosClubAbi
  );

  const { data: user, isLoading } = useContractRead(
    GeniosClubContract,
    'Users',
    [userAddress]
  );

  const closePopover = () => {
    return buttonRef?.current?.dispatchEvent(
      new KeyboardEvent('keydown', {
        key: 'Escape',
        bubbles: true,
        cancelable: true,
      })
    );
  };

  const onMouseEnter = (open: any) => {
    clearTimeout(timeout);
    if (open) return;
    return buttonRef.current?.click();
  };

  const onMouseLeave = (open: any) => {
    if (!open) return;
    timeout = setTimeout(() => closePopover(), timeoutDuration);
  };

  return (
    <Popover className="relative">
      {({ open }) => {
        return (
          <div onMouseLeave={onMouseLeave.bind(null, open)}>
            <Popover.Button
              ref={buttonRef}
              className={`
                  ${open ? '' : 'text-opacity-90 '}
                  group inline-flex items-center rounded-md text-base font-medium text-white hover:text-opacity-100 focus:outline-none `}
              onMouseEnter={onMouseEnter.bind(null, open)}
              onMouseLeave={onMouseLeave.bind(null, open)}
            >
              {matrix !== 2 ? (
                <a className="ml-[-5px] h-[21px]  w-[21px] cursor-pointer rounded-full border  border-[#ae7ddd] bg-purple-500"></a>
              ) : (
                <span
                  className={`h-[21px] w-[21px] cursor-pointer rounded-full border border-[#ae7ddd] bg-purple-500 sm:h-[38px] sm:w-[38px]`}
                />
              )}
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute z-10 mt-0 w-[300px] -translate-x-1/2 transform px-4 sm:px-0 ">
                <div
                  className="w-full rounded-lg border border-[#ae7ddd] shadow-lg "
                  onMouseEnter={onMouseEnter.bind(null, open)}
                  onMouseLeave={onMouseLeave.bind(null, open)}
                >
                  <Link href={`${initLink}/${String(user?.Id)}/${MatrixLevel}`}>
                    <div className="rounded-t-lg border-b border-[#ae7ddd] bg-[#2c0219] px-3 py-2 ">
                      <h3 className="font-semibold text-white">
                        USER ID: {String(user?.Id)}
                      </h3>
                    </div>
                  </Link>
                  <div className="rounded-b-lg  bg-[#2c0219] px-3 py-2 text-white">
                    <p>
                      {userAddress?.slice(0, 9)} . . . {userAddress?.slice(-9)}
                    </p>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </div>
        );
      }}
    </Popover>
  );
}
