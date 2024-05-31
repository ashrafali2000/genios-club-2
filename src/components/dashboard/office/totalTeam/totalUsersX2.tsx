import { GeniosClubAddress, GeniosClubAbi } from '@/lib/constant';
import { useAddress, useContract, useContractRead } from '@thirdweb-dev/react';
import { X2GrandTotal } from './grandTotal';

export default function TotalUsersX2({ address }: any) {
  const { contract: GeniosClubContract } = useContract(
    GeniosClubAddress,
    GeniosClubAbi
  );

  const { data, isLoading } = useContractRead(
    GeniosClubContract,
    'UsersTeams',
    [address]
  );

  return (
    <>
      <tr className="border-b bg-[#ae7ddd12] ">
        <td
          scope="row"
          className="whitespace-nowrap px-6 py-2  font-medium dark:text-white"
        >
          1
        </td>
        <td className="px-6 py-2">{String(data?.G3x2FirstTeam || 0)}</td>
      </tr>
      <tr className="border-b bg-[#ae7ddd12] ">
        <td
          scope="row"
          className="whitespace-nowrap px-6 py-2  font-medium dark:text-white"
        >
          2
        </td>
        <td className="px-6 py-2">{String(data?.G3x2SecondTeam || 0)}</td>
      </tr>
      <tr className="border-b bg-[#ae7ddd12] ">
        <td
          scope="row"
          className="whitespace-nowrap px-6 py-2  font-medium dark:text-white"
        >
          Grand Total
        </td>
        <X2GrandTotal />
      </tr>
    </>
  );
}
