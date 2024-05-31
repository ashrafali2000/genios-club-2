import { useMemo, useState } from 'react';
import { timeStamp } from '@/lib/blockTimeStamp';

interface ReinvestProps {
  event: any;
  index: number;
}

export default function Reinvest({ event, index }: ReinvestProps) {
  const { referrer, referrerId, userId, user } = event.data;

  const [date, setDate] = useState<any>(null);
  const blockNumber = event.transaction.blockNumber;

  useMemo(async () => {
    const fetchDate = async () => {
      const result = await timeStamp(blockNumber);
      if (result !== null) {
        setDate(result);
      }
    };

    fetchDate();
  }, [event.transaction.blockHash]);

  return (
    <tr key={index} className="border-b bg-[#ae7ddd12]">
      <td className="px-6 py-2"> {String(userId)}</td>
      <td className="px-6 py-2">
        {user?.slice(0, 8)} . . . {user?.slice(-8)}
      </td>
      <td className="px-6 py-2">{date || '00-00-0000 00:00'}</td>
    </tr>
  );
}
