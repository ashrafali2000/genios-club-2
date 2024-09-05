import { useMemo, useState } from 'react';
import { timeStamp } from '@/lib/blockTimeStamp';
import UserId from '@/lib/utils/userId';

interface RankEarnersProps {
  event: any;
  index: number;
}

export default function RankEarners({ event, index }: RankEarnersProps) {
  const { user, level } = JSON.parse(event.data);
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
    <tr key={index} className=" border-b bg-[#ae7ddd12]">
      <td
        scope="row"
        className="whitespace-nowrap px-6 py-2 font-medium dark:text-white"
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
            d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
          />
        </svg>
      </td>
      <td className="px-6 py-2">
        {' '}
        <UserId userAddress={user} />
      </td>

      <td className="max-w-[150px] truncate px-6 py-2">G3X5</td>
      <td className="px-6 py-2">{level}</td>
      <td className="px-6 py-2">{2.5 * 4}</td>
      <td className="truncate px-6 py-2">
        {event.blockHash.slice(0, 5)}...
        {event.blockHash.slice(-5)}
      </td>
      <td className="whitespace-nowrap px-6 py-2">
        {date || '00-00-0000 00:00'}
      </td>
    </tr>
  );
}
