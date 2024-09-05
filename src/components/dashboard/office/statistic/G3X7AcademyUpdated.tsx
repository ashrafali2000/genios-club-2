import { useMemo, useState } from 'react';
import { timeStamp } from '@/lib/blockTimeStamp';

interface G3X7AcademyUpdatedProps {
  event: any;
  index: number;
}

export default function G3X7AcademyUpdated({
  event,
  index,
}: G3X7AcademyUpdatedProps) {
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
            d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
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
