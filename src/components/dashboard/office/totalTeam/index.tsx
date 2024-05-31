'use client';
import { useState } from 'react';
import TotalUsersX2 from './totalUsersX2';
import TotalUsersX7 from './totalUsersX7';
import { BothLevelTotal } from './grandTotal';

export default function TotalTeam({ address }: any) {
  const [option, setOption] = useState<any>('all');

  const handleOnChange = (e: any) => {
    setOption(e.target.value);
  };

  return (
    <div className=" rounded-[9px] border-none bg-[#2c0219] px-2  pb-6 pt-4  text-center font-san lg:h-[52vw]  ">
      <div>
        <h1 className="mb-10 text-[20px] font-medium text-[#9168bf]">
          Total Team
        </h1>

        <div className="flex justify-end">
          <div className="mb-4 md:mb-0">
            <div className="flex justify-center">
              <h1 className="text-[11px] font-bold text-[#dddddd]">Show</h1>
            </div>
            <select
              onChange={handleOnChange}
              className="w-40 rounded-md border-[1px] bg-transparent px-3 py-1.5 text-sm font-medium text-white shadow-sm"
            >
              <option value="all" className="bg-[#2c0219] ">
                All
              </option>
              <option value="X2" className="bg-[#2c0219] ">
                G3X2
              </option>
              <option value="X7" className="bg-[#2c0219] ">
                G3X5
              </option>
            </select>
          </div>
        </div>
        <div className="relative w-full overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full overflow-scroll text-center text-sm text-white ">
            <thead className="text-xs uppercase text-white ">
              <tr className="border-b text-[13px] font-bold text-[#6d678f]">
                {option === 'all' ? (
                  <th scope="col" className="px-6 py-3">
                    Program
                  </th>
                ) : null}

                <th scope="col" className="px-6 py-3">
                  Reference Level
                </th>
                <th scope="col" className="px-6 py-3">
                  Total
                </th>
              </tr>
            </thead>
            <tbody>
              {option === 'all' ? <BothLevelTotal address={address} /> : null}
              {option === 'X2' ? <TotalUsersX2 address={address} /> : null}
              {option === 'X7' ? <TotalUsersX7 address={address} /> : null}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
