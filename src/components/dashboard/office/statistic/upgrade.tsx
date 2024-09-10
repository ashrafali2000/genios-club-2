import { useMemo, useState } from "react";
import { timeStamp } from "@/lib/blockTimeStamp";
import UserId from "@/lib/utils/userId";

interface UpgradeProps {
  event: any;
  index: number;
}

export default function Upgrade({ event, index }: UpgradeProps) {
  const { user } = event;
  console.log("myData----test----->", user);
  const [date, setDate] = useState<any>(null);
  const blockHash = event.blockHash;
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
        className="whitespace-nowrap px-6 py-2  font-medium dark:text-white"
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
            d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
          />
        </svg>
      </td>
      <td className="px-6 py-2">
        <UserId userAddress={user} />
      </td>

      {/* {matrix === 1 ? (
        <td className="max-w-[150px] truncate px-6 py-2">G3X2</td>
      ) : matrix === 2 ? (
        <td className="max-w-[150px] truncate px-6 py-2">G3X5</td>
      ) : null} */}

      {/* <td className="px-6 py-2">{level}</td> */}
      <td className="px-6 py-2">{10 * 4}</td>
      <td className="px-6 py-2">
        {blockHash.slice(0, 5)}...
        {blockHash.slice(-5)}
      </td>
      <td className="whitespace-nowrap px-6 py-2">
        {date || "00-00-0000 00:00"}
      </td>
    </tr>
  );
}
