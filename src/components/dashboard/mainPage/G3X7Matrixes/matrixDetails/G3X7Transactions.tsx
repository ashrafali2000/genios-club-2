import { timeStamp } from '@/lib/blockTimeStamp';
import { GeniosClubAbi, GeniosClubAddress } from '@/lib/constant';
import { useContract, useContractRead } from '@thirdweb-dev/react';
import { useMemo, useState } from 'react';

interface G3X7TransactionsProps {
  event: any;
  index: number;
}

export function G3X7Transactions({ event, index }: G3X7TransactionsProps) {
  const { user } = JSON.parse(event.data);

  const { contract: GeniosClubContract } = useContract(
    GeniosClubAddress,
    GeniosClubAbi
  );
  const { data: userId } = useContractRead(GeniosClubContract, 'Users', [user]);

  const [date, setDate] = useState<any>(null);
  const blockNumber = event.blockNumber;

  const fetchDate = async () => {
    const result = await timeStamp(blockNumber);
    if (result !== null) {
      setDate(result);
    }
  };

  useMemo(async () => {
    fetchDate();
  }, [event.blockHash]);

  return (
    <>
      {userId && Number(userId.Id) !== 0 && (
        <tr key={index} className="border-b bg-[#ae7ddd12]">
          <td className="px-6 py-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#00B0C2"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
              />
            </svg>
          </td>
          <td className="px-6 py-2">{date || '00-00-0000 00:00'}</td>
          <td className="px-6 py-2">{String(userId.Id) || '00'}</td>
          <td className="px-6 py-2">
            {user?.slice(0, 8)} . . . {user?.slice(-8)}
          </td>
        </tr>
      )}
    </>
  );
}

export function G3X7Reinvest({ event, index }: G3X7TransactionsProps) {
  const { referrer, referrerId, userId, user } = JSON.parse(event.data);

  const [date, setDate] = useState<any>(null);
  const blockNumber = event.blockNumber;

  useMemo(async () => {
    const fetchDate = async () => {
      const result = await timeStamp(blockNumber);
      if (result !== null) {
        setDate(result);
      }
    };

    fetchDate();
  }, [event.blockHash]);

  return (
    <>
      {parseInt(userId.hex, 16) !== 0 && (
        <tr key={index} className="border-b bg-[#ae7ddd12]">
          <td className="px-6 py-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#00B0C2"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
              />
            </svg>
          </td>
          <td className="px-6 py-2">{date || '00-00-0000 00:00'}</td>
          <td className="px-6 py-2">{parseInt(userId.hex, 16)}</td>
          <td className="px-6 py-2">
            {user?.slice(0, 8)} . . . {user?.slice(-8)}
          </td>
        </tr>
      )}
    </>
  );
}
