import { useMemo, useState } from "react";

import UserId from "@/lib/utils/userId";
import { timeStamp } from "@/lib/blockTimeStamp";

interface NewUserPlaceProps {
  event: any;
  index: number;
}

export default function NewUserPlace({ event, index }: NewUserPlaceProps) {
  const { user, sponcerId, amount, time } = event;
  let date: any = new Date(Number(time.slice(1, -1)) * 1000);
  console.log("myData----test----->", user, sponcerId, amount, time);

  // const [date, setDate] = useState<any>(null);
  // const blockHash = event.blockHash;
  // const blockNumber = event.blockNumber;

  // useMemo(async () => {
  //   const fetchDate = async () => {
  //     const result = await timeStamp(time);
  //     if (result !== null) {
  //       setDate(result);
  //     }
  //   };

  //   fetchDate();
  // }, [event.blockHash]);

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
            d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
          />
        </svg>
      </td>
      <td className="px-6 py-2">{user.slice(1, -1)}</td>
      {/* {matrix === 1 ? (
        <td className="max-w-[150px] truncate px-6 py-2">G3X2</td>
      ) : matrix === 2 ? (
        <td className="max-w-[150px] truncate px-6 py-2">G3X5</td>
      ) : null} */}

      {/* <td className="px-6 py-2">{level}</td> */}
      <td className="px-6 py-2">{sponcerId.slice(1, -1)}</td>
      <td className="px-6 py-2">
        {Number(amount.slice(1, -1) / 1000000000000000000)}
      </td>
      <td className="whitespace-nowrap px-6 py-2">
        {date.toUTCString() || "00-00-0000 00:00"}
      </td>
    </tr>
  );
}
