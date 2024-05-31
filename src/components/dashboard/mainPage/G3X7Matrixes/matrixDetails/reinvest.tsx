import { useMemo, useState } from 'react';
import { timeStamp } from '@/lib/blockTimeStamp';
import { useContract, useContractRead } from '@thirdweb-dev/react';
import { GeniosClubAbi, GeniosClubAddress } from '@/lib/constant';

interface ReinvestProps {
  event: any;
  index: number;
}

export default function G3X7Reinvest({ event, index }: ReinvestProps) {
  const { user } = event.data;

  const { contract: GeniosClubContract } = useContract(
    GeniosClubAddress,
    GeniosClubAbi
  );
  const { data: userId } = useContractRead(GeniosClubContract, 'Users', [user]);

  const [date, setDate] = useState<any>(null);
  const blockNumber = event.transaction.blockNumber;

  const fetchDate = async () => {
    const result = await timeStamp(blockNumber);
    if (result !== null) {
      setDate(result);
    }
  };

  useMemo(async () => {
    fetchDate();
  }, [event.transaction.blockHash]);

  return (
    <>
      {userId && Number(userId.Id) !== 0 && (
        <tr key={index} className="border-b bg-[#ae7ddd12]">
          <td className="px-6 py-2"> {String(userId.Id) || '00'}</td>
          <td className="px-6 py-2">
            {user?.slice(0, 8)} . . . {user?.slice(-8)}
          </td>
          <td className="px-6 py-2">{date || '00-00-0000 00:00'}</td>
        </tr>
      )}
    </>
  );
}
