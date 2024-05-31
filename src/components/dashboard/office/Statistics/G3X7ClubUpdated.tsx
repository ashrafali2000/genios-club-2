import { useMemo, useState } from 'react';
import { timeStamp } from '@/lib/blockTimeStamp';

interface G3X7ClubUpdatedProps {
  event: any;
  index: number;
}

export default function G3X7ClubUpdated({
  event,
  index,
}: G3X7ClubUpdatedProps) {
  const { userId } = JSON.parse(event.data);
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
    <tr key={index} className="border-b bg-[#ae7ddd12]">
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
            d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
          />
        </svg>
      </td>
      <td className="px-6 py-2"> {parseInt(userId.hex, 16)}</td>

      <td className="max-w-[150px] truncate px-6 py-2">G3X5</td>
      <td className="px-6 py-2">2</td>
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
