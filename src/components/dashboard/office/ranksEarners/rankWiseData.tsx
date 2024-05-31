'use client';
import { PoolAbi, PoolAddress } from '@/lib/constant';
import UserId from '@/lib/utils/userId';
import { useContract, useContractRead } from '@thirdweb-dev/react';
import { useMemo, useState } from 'react';

interface NewUserPlaceProps {
  index: number;
  filter: string;
  setFilter: any;
}

export default function RankWiseData({
  index,
  filter,
  setFilter,
}: NewUserPlaceProps) {
  const [date, setDate] = useState<any>(null);

  const { contract: PoolContract } = useContract(PoolAddress, PoolAbi);
  const { data: AddedRanks, isLoading: addedRanksIsLoading } = useContractRead(
    PoolContract,
    'AddedRanks',
    [index]
  );

  // if (filter === String(AddedRanks?.level)) {
  //   console.log("done");
  // }

  const matrixLevel = {
    '1': { name: 'Silver', team: '10' },
    '2': { name: 'Gold', team: '40' },
    '3': { name: 'Amber', team: '160' },
    '4': { name: 'Pearl', team: '640' },
    '5': { name: 'Ruby', team: '2,560' },
    '6': { name: 'Sapphire', team: '10,240' },
    '7': { name: 'Emerald', team: '40,960' },
    '8': { name: 'Diamond', team: '163,840' },
  };

  function convertUnixTimestamp() {
    const timestamp: number = AddedRanks?.hisTime; // unix timestamp in seconds

    const dtObject = new Date(timestamp * 1000); // Convert to milliseconds
    const day = dtObject.getUTCDate();
    const month = dtObject.getUTCMonth() + 1; // Months are 0-indexed, so add 1
    const year = dtObject.getUTCFullYear();

    // Format components in dd-mm-yyyy format
    const formattedDate = `${day.toString().padStart(2, '0')}-${month
      .toString()
      .padStart(2, '0')}-${year}`;

    if (formattedDate !== null) {
      setDate(formattedDate);
    }
  }
  useMemo(async () => {
    convertUnixTimestamp();
  }, [AddedRanks]);
  return (
    <tr className="border-b bg-[#ae7ddd12] ">
      <td
        scope="row"
        className="whitespace-nowrap px-6 py-2  font-medium dark:text-white"
      >
        <UserId
          userAddress={
            AddedRanks?.userAdd || '0x0000000000000000000000000000000000000000'
          }
        />
      </td>
      <td className="px-6 py-2">
        {
          (matrixLevel as { [key: string]: { name: string } })[
            AddedRanks?.level || '0'
          ]?.name
        }
      </td>
      <td className="px-6 py-2">{date || '00:00:0000'}</td>
    </tr>
  );
}
