'use client';

import React from 'react';
import LevelWiseData from './levelWiseData';

const RanksCard = ({ address, view }: { address: any; view?: boolean }) => {
  return (
    <div className="  relative z-10 mt-4 lg:mt-0">
      <div className=" rounded-[9px] border-none bg-[#2c0219] px-2 pb-6 pt-4  text-center font-san lg:h-[52vw]  ">
        <div>
          <h1 className="text-[20px] font-medium text-[#9168bf] ">
            RANKS CARD
          </h1>

          <div className="relative mt-5 overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full overflow-scroll text-center text-sm text-white ">
              <thead className="text-xs uppercase text-white ">
                <tr className="border-b text-[13px] font-bold text-[#6d678f]">
                  <th scope="col" className="px-6 py-3"></th>
                  <th scope="col" className="px-6 py-3">
                    Rank
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Direct
                  </th>
                  {/* <th scope="col" className="px-6 py-3">
                    Team
                  </th> */}
                  <th scope="col" className="px-6 py-3">
                    Amount
                  </th>
                  <th scope="col" className="px-6 py-3">
                    status
                  </th>
                  {!view ? (
                    <th scope="col" className="px-6 py-3">
                      Action
                    </th>
                  ) : null}
                </tr>
              </thead>
              <tbody>
                <LevelWiseData level={1} address={address} view={view} />
                <LevelWiseData level={2} address={address} view={view} />
                <LevelWiseData level={3} address={address} view={view} />
                <LevelWiseData level={4} address={address} view={view} />
                <LevelWiseData level={5} address={address} view={view} />
                <LevelWiseData level={6} address={address} view={view} />
                <LevelWiseData level={7} address={address} view={view} />
                <LevelWiseData level={8} address={address} view={view} />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RanksCard;
