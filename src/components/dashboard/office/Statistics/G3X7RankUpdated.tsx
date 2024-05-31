import { useMemo, useState } from 'react';
import { timeStamp } from '@/lib/blockTimeStamp';

interface G3X7RankUpdatedProps {
  event: any;
  index: number;
}

export default function G3X7RankUpdated({
  event,
  index,
}: G3X7RankUpdatedProps) {
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
            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
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
