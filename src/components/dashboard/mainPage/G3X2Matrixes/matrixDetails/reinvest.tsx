import { useMemo, useState } from 'react';
import { timeStamp } from '@/lib/blockTimeStamp';
import { useContract, useContractRead } from '@thirdweb-dev/react';
import { GeniosClubAbi, GeniosClubAddress } from '@/lib/constant';

interface ReinvestProps {
  event: any;
  index: number;
}

export default function G3X2Reinvest({ event, index }: ReinvestProps) {
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
          <td className="px-6 py-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
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
