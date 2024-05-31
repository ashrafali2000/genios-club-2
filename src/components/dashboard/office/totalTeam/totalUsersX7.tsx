import { GeniosClubAddress, GeniosClubAbi } from '@/lib/constant';
import { useAddress, useContract, useContractRead } from '@thirdweb-dev/react';
import { X7GrandTotal } from './grandTotal';

export default function TotalUsersX7({ address }: any) {
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
        <td className="px-6 py-2">{String(data?.G3x7FirstTeam || 0)}</td>
      </tr>
      <tr className="border-b bg-[#ae7ddd12] ">
        <td
          scope="row"
          className="whitespace-nowrap px-6 py-2  font-medium dark:text-white"
        >
          2
        </td>
        <td className="px-6 py-2">{String(data?.G3x7SecondTeam || 0)}</td>
      </tr>
      <tr className="border-b bg-[#ae7ddd12] ">
        <td
          scope="row"
          className="whitespace-nowrap px-6 py-2  font-medium dark:text-white"
        >
          3
        </td>
        <td className="px-6 py-2">{String(data?.G3x7ThirdTeam || 0)}</td>
      </tr>
      <tr className="border-b bg-[#ae7ddd12] ">
        <td
          scope="row"
          className="whitespace-nowrap px-6 py-2  font-medium dark:text-white"
        >
          4
        </td>
        <td className="px-6 py-2">{String(data?.G3x7FourthTeam || 0)}</td>
      </tr>
      <tr className="border-b bg-[#ae7ddd12] ">
        <td
          scope="row"
          className="whitespace-nowrap px-6 py-2  font-medium dark:text-white"
        >
          5
        </td>
        <td className="px-6 py-2">{String(data?.G3x7FifthTeam || 0)}</td>
      </tr>
      <tr className="border-b bg-[#ae7ddd12] ">
        <td
          scope="row"
          className="whitespace-nowrap px-6 py-2  font-medium dark:text-white"
        >
          6
        </td>
        <td className="px-6 py-2">{String(data?.G3x7SixthTeam || 0)}</td>
      </tr>
      <tr className="border-b bg-[#ae7ddd12] ">
        <td
          scope="row"
          className="whitespace-nowrap px-6 py-2  font-medium dark:text-white"
        >
          7
        </td>
        <td className="px-6 py-2">{String(data?.G3x7SeventhTeam || 0)}</td>
      </tr>
      <tr className="border-b bg-[#ae7ddd12] ">
        <td
          scope="row"
          className="whitespace-nowrap px-6 py-2  font-medium dark:text-white"
        >
          Grand Total
        </td>
        <X7GrandTotal />
      </tr>
    </>
  );
}
