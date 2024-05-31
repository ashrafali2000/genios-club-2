import { GeniosClubAddress, GeniosClubAbi } from '@/lib/constant';
import { useAddress, useContract, useContractRead } from '@thirdweb-dev/react';

export function X2GrandTotal({ address }: any) {
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
    <td className="px-6 py-2">
      {Number(String(data?.G3x2FirstTeam || 0)) +
        Number(String(data?.G3x2SecondTeam || 0))}
    </td>
  );
}
export function X7GrandTotal({ address }: any) {
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
    <td className="px-6 py-2">
      {Number(String(data?.G3x7FirstTeam || 0)) +
        Number(String(data?.G3x7SecondTeam || 0)) +
        Number(String(data?.G3x7ThirdTeam || 0)) +
        Number(String(data?.G3x7FourthTeam || 0)) +
        Number(String(data?.G3x7FifthTeam || 0)) +
        Number(String(data?.G3x7SixthTeam || 0)) +
        Number(String(data?.G3x7SeventhTeam || 0))}
    </td>
  );
}
export function BothLevelTotal({ address }: any) {
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
          G3X2
        </td>
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
          G3X2
        </td>
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
          G3X5
        </td>
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
          G3X5
        </td>
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
          G3X5
        </td>
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
          G3X5
        </td>
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
          G3X5
        </td>
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
          G3X5
        </td>
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
          G3X5
        </td>
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
        <td
          scope="row"
          className="whitespace-nowrap px-6 py-2  font-medium dark:text-white"
        ></td>
        <td className="px-6 py-2">
          {Number(String(data?.G3x2FirstTeam || 0)) +
            Number(String(data?.G3x2SecondTeam || 0)) +
            Number(String(data?.G3x7FirstTeam || 0)) +
            Number(String(data?.G3x7SecondTeam || 0)) +
            Number(String(data?.G3x7ThirdTeam || 0)) +
            Number(String(data?.G3x7FourthTeam || 0)) +
            Number(String(data?.G3x7FifthTeam || 0)) +
            Number(String(data?.G3x7SixthTeam || 0)) +
            Number(String(data?.G3x7SeventhTeam || 0))}
        </td>
      </tr>
    </>
  );
}
