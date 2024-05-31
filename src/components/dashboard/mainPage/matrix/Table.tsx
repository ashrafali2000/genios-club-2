'use client';

const Table = ({ address, contract }: { address: string; contract: any }) => {
  return (
    <div className="mt-10 rounded-[9px] border-none bg-[#2c0219] px-2 pb-6 pt-4 text-center font-san">
      <div>
        <h1 className="mb-10 text-[20px] font-medium text-[#9168bf]">
          DOWNLINE
        </h1>

        <div className="flex flex-col items-center pb-4 md:flex-row md:justify-between">
          <div className="mb-4 md:mb-0">
            <div className="flex justify-center">
              <h1 className="text-[11px] font-bold text-[#dddddd]">Show</h1>
            </div>
            <select className="w-40 rounded-md border-[1px] bg-transparent px-3 py-1.5 text-sm font-medium text-white shadow-sm">
              <option className="bg-[#2c0219] " value="">
                10
              </option>
              <option value="" className="bg-[#2c0219] ">
                1.0
              </option>
              <option value="" className="bg-[#2c0219] ">
                10
              </option>
              <option value="" className="bg-[#2c0219] ">
                002
              </option>
            </select>

            <div className="flex justify-center">
              <h1 className="text-[11px] font-bold text-[#dddddd]">Entries</h1>
            </div>
          </div>

          <div className="relative">
            <div className="flex justify-center md:justify-end">
              <h1 className="text-[11px] text-[#dddddd]">Search:</h1>
            </div>
            <input
              type="text"
              id="table-search"
              className="block rounded-md border-[1px] bg-transparent p-2 text-sm text-white md:w-80 "
            />
          </div>
        </div>
        <div className="relative w-full overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-auto overflow-auto text-center text-sm text-white ">
            <thead className="text-xs uppercase text-white ">
              <tr className="border-b text-[13px] font-bold text-[#6d678f]">
                <th scope="col" className="px-6 py-3">
                  ID
                </th>
                <th scope="col" className="px-6 py-3">
                  Registration date
                </th>
                <th scope="col" className="px-6 py-3">
                  Wallet
                </th>
                <th scope="col" className="px-6 py-3">
                  X2
                </th>
                <th scope="col" className="px-6 py-3">
                  X7
                </th>
                <th scope="col" className="px-6 py-3">
                  Rank
                </th>
                <th scope="col" className="px-6 py-3">
                  Profits
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
                <td className="px-6 py-2">25-6-22</td>
                <td className="max-w-[150px] truncate px-6 py-2">
                  0x93a33efC878C6Ee5E8960B47Eb93f4296288b978
                </td>
                <td className="px-6 py-2">1</td>
                <td className="px-6 py-2">5</td>
                <td className="px-6 py-2">8</td>
                <td className="px-6 py-2">0.005</td>
              </tr>
              <tr className=" border-b  ">
                <td
                  scope="row"
                  className="whitespace-nowrap px-6 py-2  font-medium dark:text-white"
                >
                  10
                </td>
                <td className="px-6 py-2">20-6-22</td>
                <td className="max-w-[150px] truncate px-6 py-2">
                  0x93a33efC878C6Ee5E8960B47Eb93f4296288b978
                </td>
                <td className="px-6 py-2">3</td>
                <td className="px-6 py-2">6</td>
                <td className="px-6 py-2">2</td>
                <td className="px-6 py-2">0.009</td>
              </tr>
              <tr className="border-b bg-[#ae7ddd12] ">
                <td
                  scope="row"
                  className="whitespace-nowrap px-6 py-2  font-medium dark:text-white"
                >
                  10
                </td>
                <td className="px-6 py-2">25-6-22</td>
                <td className="max-w-[150px] truncate px-6 py-2">
                  0x93a33efC878C6Ee5E8960B47Eb93f4296288b978
                </td>
                <td className="px-6 py-2">1</td>
                <td className="px-6 py-2">5</td>
                <td className="px-6 py-2">8</td>
                <td className="px-6 py-2">0.005</td>
              </tr>
              <tr className=" border-b  ">
                <td
                  scope="row"
                  className="whitespace-nowrap px-6 py-2  font-medium dark:text-white"
                >
                  10
                </td>
                <td className="px-6 py-2">20-6-22</td>
                <td className="max-w-[150px] truncate px-6 py-2">
                  0x93a33efC878C6Ee5E8960B47Eb93f4296288b978
                </td>
                <td className="px-6 py-2">3</td>
                <td className="px-6 py-2">6</td>
                <td className="px-6 py-2">2</td>
                <td className="px-6 py-2">0.009</td>
              </tr>
              <tr className="border-b bg-[#ae7ddd12] ">
                <td
                  scope="row"
                  className="whitespace-nowrap px-6 py-2  font-medium dark:text-white"
                >
                  10
                </td>
                <td className="px-6 py-2">25-6-22</td>
                <td className="max-w-[150px] truncate px-6 py-2">
                  0x93a33efC878C6Ee5E8960B47Eb93f4296288b978
                </td>
                <td className="px-6 py-2">1</td>
                <td className="px-6 py-2">5</td>
                <td className="px-6 py-2">8</td>
                <td className="px-6 py-2">3</td>
              </tr>
              <tr className=" border-b  ">
                <td
                  scope="row"
                  className="whitespace-nowrap px-6 py-2  font-medium dark:text-white"
                >
                  10
                </td>
                <td className="px-6 py-2">20-6-22</td>
                <td className="max-w-[150px] truncate px-6 py-2">
                  0x93a33efC878C6Ee5E8960B47Eb93f4296288b978
                </td>
                <td className="px-6 py-2">3</td>
                <td className="px-6 py-2">6</td>
                <td className="px-6 py-2">0.009</td>
                <td className="px-6 py-2">7</td>
              </tr>
              <tr className="border-b bg-[#ae7ddd12] ">
                <td
                  scope="row"
                  className="whitespace-nowrap px-6 py-2  font-medium dark:text-white"
                >
                  10
                </td>
                <td className="px-6 py-2">25-6-22</td>
                <td className="max-w-[150px] truncate px-6 py-2">
                  0x93a33efC878C6Ee5E8960B47Eb93f4296288b978
                </td>
                <td className="px-6 py-2">1</td>
                <td className="px-6 py-2">8</td>
                <td className="px-6 py-2">0.005</td>
                <td className="px-6 py-2">3</td>
              </tr>
              <tr className=" border-b  ">
                <td
                  scope="row"
                  className="whitespace-nowrap px-6 py-2  font-medium dark:text-white"
                >
                  10
                </td>
                <td className="px-6 py-2">20-6-22</td>
                <td className="max-w-[150px] truncate px-6 py-2">
                  0x93a33efC878C6Ee5E8960B47Eb93f4296288b978
                </td>
                <td className="px-6 py-2">6</td>
                <td className="px-6 py-2">2</td>
                <td className="px-6 py-2">0.009</td>
                <td className="px-6 py-2">7</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
