import React from 'react';

const ranksCard = () => {
  return (
    <div className=" rounded-[9px] border-none bg-[#2c0219] px-2 pb-6  pt-4 text-center font-san  ">
      <div>
        <h1 className="mb-10 text-[20px] font-medium text-[#9168bf]">
          Rank Earners
        </h1>
        <div className="flex flex-col items-center pb-4 md:flex-row md:justify-between">
          <div className="mb-4  md:mb-0">
            <select className="w-40 rounded-md border-[1px] bg-transparent px-3 py-1.5 text-sm font-medium text-white shadow-sm">
              <option value="1" className="bg-[#2c0219] ">
                Silver
              </option>
              <option value="2" className="bg-[#2c0219] ">
                Gold
              </option>
            </select>
          </div>

          <div className="relative">
            <div className="flex justify-center md:justify-end">
              <h1 className="text-[11px] text-[#dddddd]">Search:</h1>
            </div>
            <input
              type="text"
              className="block rounded-md border-[1px] bg-transparent p-2 text-sm text-white md:w-80 "
            />
          </div>
        </div>

        <div className="relative w-full overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full overflow-scroll text-center text-sm text-white ">
            <thead className="text-xs uppercase text-white ">
              <tr className="border-b text-[13px] font-bold text-[#6d678f]">
                <th scope="col" className="px-6 py-3">
                  ID
                </th>

                <th scope="col" className="px-6 py-3">
                  Rank Earned
                </th>
                <th scope="col" className="px-6 py-3">
                  Date
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b bg-[#ae7ddd12] ">
                <td
                  scope="row"
                  className="whitespace-nowrap px-6 py-2  font-medium dark:text-white"
                >
                  10
                </td>
                <td className="px-6 py-2">
                  0x258DcDFC4339F6c8e6a5D1a071B1c88a7CA13698
                </td>
                <td className="px-6 py-2">47</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ranksCard;
