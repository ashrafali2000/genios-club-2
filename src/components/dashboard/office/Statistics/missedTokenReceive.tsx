import { useMemo, useState } from 'react';
import { timeStamp } from '@/lib/blockTimeStamp';
import UserId from '@/lib/utils/userId';

interface MissedTokenReceiveProps {
  event: any;
  index: number;
}

export default function MissedTokenReceive({
  event,
  index,
}: MissedTokenReceiveProps) {
  const { user, matrix, level } = JSON.parse(event.data);
  const [date, setDate] = useState<any>(null);
  const blockHash = event.blockHash;
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
    <tr key={index} className=" border-b bg-[#ae7ddd12]">
      <td
        scope="row"
        className="whitespace-nowrap px-6 py-2  font-medium dark:text-white"
      >
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
            d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
          />
        </svg>
      </td>
      <td className="px-6 py-2">
        {' '}
        <UserId userAddress={user} />
      </td>

      {matrix === 1 ? (
        <td className="max-w-[150px] truncate px-6 py-2">G3X2</td>
      ) : matrix === 2 ? (
        <td className="max-w-[150px] truncate px-6 py-2">G3X5</td>
      ) : null}

      <td className="px-6 py-2">{level}</td>
      <td className="px-6 py-2">{10 * 4}</td>
      <td className="px-6 py-2">
        {blockHash.slice(0, 5)}...
        {blockHash.slice(-5)}
      </td>
      <td className="whitespace-nowrap px-6 py-2">
        {date || '00-00-0000 00:00'}
      </td>
    </tr>
  );
}
