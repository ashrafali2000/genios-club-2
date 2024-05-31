'use client';

import React, { useEffect } from 'react';
import RankWiseData from './rankWiseData';
import { useState } from 'react';
import { TableLoader } from '@/lib/utils/tableLoader';
import { useContract, useContractRead } from '@thirdweb-dev/react';
import { PoolAbi, PoolAddress } from '@/lib/constant';

const RanksEarned = () => {
  const [newArray, setNewArray] = useState<string[]>([]);
  const [filter, setFilter] = useState<string>('1');

  const matrixLevel: any = [
    { level: '1', name: 'Silver' },
    { level: '2', name: 'Gold' },
    { level: '3', name: 'Amber' },
    { level: '4', name: 'Pearl' },
    { level: '5', name: 'Ruby' },
    { level: '6', name: 'Sapphire' },
    { level: '7', name: 'Emerald' },
    { level: '8', name: 'Diamond' },
  ];

  const { contract: PoolContract } = useContract(PoolAddress, PoolAbi);
  const { data: indexOfRanks, isLoading: indexOfRanksIsLoading } =
    useContractRead(PoolContract, 'indexOfRanks');

  useEffect(() => {
    if (Number(indexOfRanks) > 0) {
      const tempArray = new Array<string>(Number(indexOfRanks)).fill('id');
      setNewArray(tempArray);
    } else {
      setNewArray([]);
    }
  }, [indexOfRanks]);

  return (
    <div className=" rounded-[9px] border-none bg-[#2c0219] px-2 pb-6  pt-4 text-center font-san  ">
      <div>
        <h1 className="mb-10 text-[20px] font-medium text-[#9168bf]">
          Rank Earners
        </h1>
        <div className="flex flex-col items-center pb-4 md:flex-row md:justify-between">
          <div className="mb-4  md:mb-0">
            <select className="w-40 rounded-md border-[1px] bg-transparent px-3 py-1.5 text-sm font-medium text-white shadow-sm">
              {matrixLevel.map((rank: any, index: any) => {
                return (
                  <option
                    key={index}
                    value={rank.name}
                    className="bg-[#2c0219] "
                  >
                    {rank.name}
                  </option>
                );
              })}
            </select>
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
              {indexOfRanksIsLoading
                ? [1, 2, 3, 4, 5, 6, 7, 8].map((index: any) => {
                    return (
                      <tr key={index} className="border-b bg-[#ae7ddd12]">
                        <td>
                          <TableLoader />
                        </td>
                        <td>
                          <TableLoader />
                        </td>
                        <td>
                          <TableLoader />
                        </td>
                      </tr>
                    );
                  })
                : newArray &&
                  newArray?.map((data: any, index: any) => {
                    return (
                      <RankWiseData
                        key={index}
                        index={index + 1}
                        filter={filter}
                        setFilter={setFilter}
                      />
                    );
                  })}
            </tbody>
          </table>
          {!indexOfRanksIsLoading && indexOfRanks.length === 0 ? (
            <div>
              <h1 className="m-5 text-white">Data not found</h1>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default RanksEarned;
