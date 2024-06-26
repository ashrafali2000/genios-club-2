"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import UserRaw from "./userRaw";
import { TableLoader } from "@/lib/utils/tableLoader";
import Pagination from "@/lib/utils/pagination";

const DirectReferrals = ({ address }: { address: any }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [eventsArray, setEventsArray] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [itemsPerPage, setItemsPerPage] = useState<any>(10);
  const [filters, setFilters] = useState({
    addr: "",
  });
  const [totalPages, setTotalPages] = useState<number>(0);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        `/api/events/direct-refrel/${address}`,
        {
          currentPage,
          itemsPerPage,
        }
      );

      const eventsData = response.data;
      setTotalPages(eventsData.pagination.totalPages);
      setEventsArray(eventsData.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, [address, itemsPerPage, currentPage]);

  const handleItemsPerPageChange = (e: any) => {
    const newItemsPerPage = parseInt(e.target.value, 10);
    setCurrentPage(1); // Reset to the first page
    setItemsPerPage(newItemsPerPage);
  };

  return (
    <div className="mt-4 rounded-[9px] border-none bg-[#2c0219] px-2 pb-6 pt-4 text-center font-san lg:mt-0">
      <div>
        <h1 className="mb-10 text-[20px] font-medium text-[#9168bf]">
          Direct Referrals
        </h1>

        <div className="flex items-center pb-4 justify-between">
          <div>
            <label>Items per page:</label>
            <select
              className="bg-transparent"
              onChange={handleItemsPerPageChange}
              value={itemsPerPage}
            >
              <option className="text-black" value={10}>
                10
              </option>
              <option className="text-black" value={25}>
                25
              </option>
              <option className="text-black" value={50}>
                50
              </option>
              <option className="text-black" value={100}>
                100
              </option>
            </select>
          </div>
          <div>
            <div className="justify-left flex">
              <h1 className="text-[11px] text-[#dddddd]">Search</h1>
            </div>
            <input
              type="text"
              name="FilterByUserAddress"
              value={filters.addr}
              onChange={(e) =>
                setFilters({
                  ...filters,
                  addr: e.target.value,
                })
              }
              className="block rounded-md border-[1px] bg-transparent p-2 text-sm text-white md:w-80"
              placeholder="Search User Address"
            />
          </div>
        </div>
        <div className="relative w-full overflow-auto shadow-md sm:rounded-lg lg:h-[78vh] xl:h-[80vh] h-[90vh]">
          <table className="w-full text-center text-sm text-white">
            <thead className="text-xs uppercase text-white">
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
                  X5
                </th>
                <th scope="col" className="px-6 py-3">
                  Profits
                </th>
                <th scope="col" className="px-6 py-3">
                  Partners
                </th>
              </tr>
            </thead>
            <tbody>
              {isLoading
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
                        <td>
                          <TableLoader />
                        </td>
                        <td>
                          <TableLoader />
                        </td>
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
                : eventsArray &&
                  eventsArray.map((event: any, index: any) => {
                    const { referrer, user } = JSON.parse(event.data);
                    return (
                      <UserRaw
                        key={index}
                        address={user}
                        blockNumber={event.blockNumber}
                      />
                    );
                  })}
            </tbody>
          </table>
          {!isLoading && eventsArray && eventsArray.length === 0 ? (
            <div>
              <h1 className="m-5 text-white">Data not found</h1>
            </div>
          ) : null}
        </div>
      </div>
      {!isLoading && totalPages != null && (
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          marginTop={"6"}
        />
      )}
    </div>
  );
};

export default DirectReferrals;
