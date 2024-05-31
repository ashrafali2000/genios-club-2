import { useEffect, useState } from 'react';
import { timeStamp } from '@/lib/blockTimeStamp';
import UserId from '@/lib/utils/userId';

interface NewUserPlaceProps {
  event: any;
  index: number;
}

export default function NewUserPlace({ event, index }: NewUserPlaceProps) {
  const { user } = JSON.parse(event.data);

  const [date, setDate] = useState<any>(null);
  const blockNumber = event.blockNumber;

  useEffect(() => {
    const fetchDate = async () => {
      const result = await timeStamp(blockNumber);
      if (result !== null) {
        setDate(result);
      }
    };

    fetchDate();
  }, [blockNumber]);

  return (
    <tr key={index} className="border-b bg-[#ae7ddd12]">
      <td className="px-6 py-2">
        <UserId userAddress={user} />
      </td>
      <td className="whitespace-nowrap px-6 py-2">
        {date || '00-00-0000 00:00'}
      </td>
    </tr>
  );
}
