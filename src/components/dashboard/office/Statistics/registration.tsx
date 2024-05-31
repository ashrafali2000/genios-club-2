import { useEffect, useMemo, useState } from 'react';
import { timeStamp } from '@/lib/blockTimeStamp';
import UserId from '@/lib/utils/userId';

interface RegistrationProps {
  event: any;
  index: number;
}

export default function Registration({ event, index }: RegistrationProps) {
  const { user } = JSON.parse(event.data);

  const [date, setDate] = useState<any>(null);
  const blockNumber = event.blockNumber;

  const fetchDate = async () => {
    const result = await timeStamp(blockNumber);
    if (result !== null) {
      setDate(result);
    }
  };

  useEffect(() => {
    fetchDate();
  }, [event.blockHash]);

  return (
    <tr key={index} className=" border-b bg-[#ae7ddd12] text-white">
      <td className="px-6 py-2 font-medium ">
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
      <td className="px-6 py-2">
        {' '}
        <UserId userAddress={user} />
      </td>

      <td className="max-w-[150px] px-6 py-2">G3X2</td>
      <td className="px-6 py-2">1</td>
      <td className="px-6 py-2">{2.5 * 4}</td>
      <td className="px-6 py-2">
        {event.blockHash.slice(0, 5)}...
        {event.blockHash.slice(-5)}
      </td>
      <td className="whitespace-nowrap px-6 py-2">
        {date || '00-00-0000 00:00'}
      </td>
    </tr>
  );
}
