'use client';
import {
  GeniosClubAddress,
  PoolAddress,
  PoolAbi,
  GeniosClubAbi,
} from '@/lib/constant';
import { TableLoader } from '@/lib/utils/tableLoader';
import { UseFormatEther } from '@/lib/utils/useEthers';
import {
  useContract,
  useContractEvents,
  useContractRead,
  useContractWrite,
} from '@thirdweb-dev/react';

export default function LevelWiseData({
  address,
  level,
  view,
}: {
  address: string;
  level: any;
  view?: boolean;
}) {
  // Contracts
  const { contract: GeniosClubContract } = useContract(
    GeniosClubAddress,
    GeniosClubAbi
  );

  const {
    data: usersActiveG3X7Levels,
    isLoading: usersActiveG3X7LevelsIsLoading,
  } = useContractRead(GeniosClubContract, 'usersActiveG3X7Levels', [
    address,
    Number(level) === 8 ? Number(level) : Number(level) + 1,
  ]);

  const { contract: PoolContract } = useContract(PoolAddress, PoolAbi);

  const { mutateAsync: WithdrawAmount, isLoading: WithdrawAmountIsLoading } =
    useContractWrite(PoolContract, 'WithdrawAmount');

  const { data: CheckWithdrawAmount } = useContractRead(
    PoolContract,
    'CheckWithdrawAmount',
    [level, address]
  );

  const { data: IsTimeToWithdraw } = useContractRead(
    PoolContract,
    'IsTimeToWithdraw',
    [level, address]
  );

  const withDraw = async () => {
    try {
      const data = await WithdrawAmount({ args: [level, address] });
      console.info('contract call success', data);
    } catch (err) {
      console.error('contract call failure', err);
    }
  };

  // Read Functions
  const { data: usersRanks, isLoading: usersRanksIsLoading } = useContractRead(
    GeniosClubContract,
    'usersRanks',
    [address, level]
  );

  const matrixLevel: any = {
    '1': { name: 'Silver', team: '10' },
    '2': { name: 'Gold', team: '40' },
    '3': { name: 'Amber', team: '160' },
    '4': { name: 'Pearl', team: '640' },
    '5': { name: 'Ruby', team: '2,560' },
    '6': { name: 'Sapphire', team: '10,240' },
    '7': { name: 'Emerald', team: '40,960' },
    '8': { name: 'Diamond', team: '163,840' },
  };
  return (
    <>
      {usersRanksIsLoading ? (
        <tr className=" border-b bg-[#ae7ddd12]">
          <td>
            <TableLoader />
          </td>
          <td>
            <TableLoader />
          </td>
          <td>
            <TableLoader />
          </td>
          <td>
            <TableLoader />
          </td>
          <td>
            <TableLoader />
          </td>
          <td>
            <TableLoader />
          </td>
        </tr>
      ) : (
        <tr className={`border-b bg-[#ae7ddd12]`}>
          <td
            scope="row"
            className="whitespace-nowrap px-6 py-2  font-medium dark:text-white"
          >
            <img src="/partner.svg" alt="" className="h-7 w-7" />
          </td>
          <td
            scope="row"
            className="whitespace-nowrap px-6 py-2  font-medium dark:text-white"
          >
            {matrixLevel[String(level)].name}
          </td>
          <td
            className={`px-6 py-2 ${
              String(usersRanks?.DirectRefs) >= '3'
                ? 'text-green-700'
                : 'text-white'
            }`}
          >
            {String(usersRanks?.DirectRefs || 0)} / {level == 1 && '3'}
            {level == 2 && '4'}
            {level == 3 && '4'}
            {level == 4 && '4'}
            {level == 5 && '4'}
            {level == 6 && '4'}
            {level == 7 && '4'}
            {level == 8 && '4'}
          </td>

          <td className="px-6 py-2">
            {UseFormatEther(CheckWithdrawAmount?.lastWeekAmount || 0)}
          </td>
          <td className="flex justify-center px-6 py-2">
            {usersActiveG3X7Levels === true ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5zm.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935zM3.504 1c.007.517.026 1.006.056 1.469.13 2.028.457 3.546.87 4.667C5.294 9.48 6.484 10 7 10a.5.5 0 0 1 .5.5v2.61a1 1 0 0 1-.757.97l-1.426.356a.5.5 0 0 0-.179.085L4.5 15h7l-.638-.479a.501.501 0 0 0-.18-.085l-1.425-.356a1 1 0 0 1-.757-.97V10.5A.5.5 0 0 1 9 10c.516 0 1.706-.52 2.57-2.864.413-1.12.74-2.64.87-4.667.03-.463.049-.952.056-1.469H3.504z"
                  fill="white"
                ></path>
              </svg>
            ) : (
              <div className={`h-5 w-5 rounded-full border bg-red-700`}></div>
            )}
          </td>

          {!view ? (
            <td className="px-6 py-2">
              {usersRanks?.IsActive === true ? (
                !IsTimeToWithdraw ? (
                  <button
                    className="inline-block w-full cursor-not-allowed rounded-3xl bg-[#9064b2] p-[6px] font-normal leading-[20px] text-white opacity-60"
                    disabled
                  >
                    WITHDRAW
                  </button>
                ) : (
                  <button
                    onClick={() => withDraw()}
                    className="inline-block w-full cursor-pointer rounded-3xl bg-[#9064b2] p-[6px] font-normal leading-[20px] text-white"
                  >
                    WITHDRAW
                  </button>
                )
              ) : (
                'Not Active'
              )}
            </td>
          ) : null}
        </tr>
      )}
    </>
  );
}
