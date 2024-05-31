'use client';

import { timeStamp } from '@/lib/blockTimeStamp';
import { GeniosClubAddress, GeniosClubAbi } from '@/lib/constant';
import { UseFormatEtherNumber, UseFormatNumber } from '@/lib/utils/useEthers';
import { useContract, useContractRead } from '@thirdweb-dev/react';
import { useMemo, useState } from 'react';
import UserX2Level from './userX2Level';
import UserX7Level from './userX7Level';
import UserRank from './userRank';

const UserRaw = ({
  address,
  blockNumber,
}: {
  address: any;
  blockNumber: any;
}) => {
  const { contract: GeniosClubContract } = useContract(
    GeniosClubAddress,
    GeniosClubAbi
  );
  const { data: user, isLoading: usersIsLoading } = useContractRead(
    GeniosClubContract,
    'Users',
    [address]
  );

  const [date, setDate] = useState<any>(null);

  useMemo(async () => {
    const fetchDate = async () => {
      const result = await timeStamp(blockNumber);
      if (result !== null) {
        setDate(result);
      }
    };

    fetchDate();
  }, [blockNumber]);

  return (
    <tr className="border-b bg-[#ae7ddd12] ">
      <td
        scope="row"
        className="whitespace-nowrap px-6 py-2  font-medium dark:text-white"
      >
        {UseFormatNumber(user?.Id)}
      </td>
      <td className="whitespace-nowrap px-6 py-2">
        {date || '00-00-0000 00:00'}
      </td>
      <td className="px-6 py-2">
        {address.slice(0, 5)}...
        {address.slice(-5)}
      </td>
      <td className="px-6 py-2">
        <UserX2Level address={address} />
      </td>
      <td className="px-6 py-2">
        <UserX7Level address={address} />
      </td>
      <td className="px-6 py-2">
        {UseFormatEtherNumber(user?.G3X2Earnings) +
          UseFormatEtherNumber(user?.G3X7Earnings)}
      </td>
      <td className="px-6 py-2">{UseFormatNumber(user?.DirectRefs)}</td>
    </tr>
  );
};

export default UserRaw;
